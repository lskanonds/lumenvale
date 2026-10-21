import 'dotenv/config'
import { getPayload, type Payload, type RequiredDataFromCollectionSlug } from 'payload'
import config from '../payload.config'
import { homepage, jobs, plants, services, siteSettings, team } from './content'
import { pages } from './pages'

/*
  Load the demo content into an empty CMS.

    npm run seed              add anything missing, leave existing records alone
    npm run seed -- --force   overwrite the seeded records

  Safe to re-run: documents are matched on slug, so nothing is duplicated, and without
  --force a record an editor may have changed is never touched.
*/

const force = process.argv.includes('--force')

// Seeding writes many documents at once; revalidating after each would be pointless.
const context = { skipRevalidate: true }

type Seeded = 'pages' | 'plants' | 'services' | 'team' | 'jobs'

async function seed<T extends Seeded>(
  payload: Payload,
  collection: T,
  docs: RequiredDataFromCollectionSlug<T>[],
) {
  for (const doc of docs) {
    const slug = (doc as { slug: string }).slug
    const label = `${collection.padEnd(9)}${slug}`
    // Seeded content is published content; left unset, it would land as a draft.
    const data = { ...doc, _status: 'published' } as RequiredDataFromCollectionSlug<T>

    const existing = await payload.find({
      collection,
      where: { slug: { equals: slug } },
      limit: 1,
      depth: 0,
      overrideAccess: true,
    })

    if (!existing.docs[0]) {
      await payload.create({ collection, data, context, overrideAccess: true })
      console.log(`${label}: created`)
    } else if (force) {
      await payload.update({
        collection,
        id: existing.docs[0].id,
        // Payload's update() typing cannot follow a generic collection slug. It is the same
        // shape create() accepts above.
        data: data as never,
        context,
        overrideAccess: true,
      })
      console.log(`${label}: updated`)
    } else {
      console.log(`${label}: exists, skipped`)
    }
  }
}

const run = async () => {
  const payload = await getPayload({ config })

  await seed(payload, 'services', services)
  await seed(payload, 'plants', plants)
  await seed(payload, 'team', team)
  await seed(payload, 'jobs', jobs)
  await seed(payload, 'pages', pages)

  // Globals always exist, so "missing" means never filled in. Both are drafted, so the
  // status is set explicitly.
  const settings = await payload.findGlobal({ slug: 'siteSettings', depth: 0, overrideAccess: true })
  if (force || !settings.name) {
    await payload.updateGlobal({
      slug: 'siteSettings',
      data: { ...siteSettings, _status: 'published' },
      context,
      overrideAccess: true,
    })
    console.log('global   siteSettings: written')
  } else {
    console.log('global   siteSettings: exists, skipped')
  }

  const home = await payload.findGlobal({ slug: 'homepage', depth: 0, overrideAccess: true })
  if (force || !home.hero?.intro) {
    await payload.updateGlobal({
      slug: 'homepage',
      data: { ...homepage, _status: 'published' },
      context,
      overrideAccess: true,
    })
    console.log('global   homepage: written')
  } else {
    console.log('global   homepage: exists, skipped')
  }

  console.log('\nSeed complete.')
  process.exit(0)
}

run().catch((error) => {
  console.error(error)
  process.exit(1)
})
