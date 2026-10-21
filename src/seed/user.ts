import 'dotenv/config'
import { getPayload } from 'payload'
import config from '../payload.config'

/*
  Create the first administrator without going through the browser.

    npm run seed:user -- admin@example.com 'a-strong-password'

  Payload also offers a create-first-user screen at /admin; this exists so the flow can
  be scripted for a demo environment.
*/
const [email, password] = process.argv.slice(2)

if (!email || !password) {
  console.error("usage: npm run seed:user -- <email> '<password>'")
  process.exit(1)
}

const payload = await getPayload({ config })
const existing = await payload.find({
  collection: 'users',
  where: { email: { equals: email } },
  limit: 1,
  overrideAccess: true,
})

if (existing.docs[0]) {
  console.log(`${email} already exists`)
} else {
  await payload.create({
    collection: 'users',
    data: { email, password, name: 'Administrator', role: 'admin' },
    overrideAccess: true,
  })
  console.log(`created ${email}`)
}

process.exit(0)
