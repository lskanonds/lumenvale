import type { CSSProperties } from 'react'

/*
  Orientation panel above the admin dashboard.

  Most people editing this site run plants, not websites. Payload's dashboard on its own is
  a grid of collection names, so this explains what each menu heading reaches on the
  public site, how an edit goes live, and what Draft means.

  The admin has its own stylesheet, so this uses Payload's theme variables instead of the
  site's Tailwind classes and follows the admin's light and dark themes.
*/

const card: CSSProperties = {
  border: '1px solid var(--theme-elevation-150)',
  borderRadius: '4px',
  padding: '1.75rem 2rem',
  marginBottom: '2rem',
  background: 'var(--theme-elevation-0)',
}

const heading: CSSProperties = {
  margin: '0 0 0.5rem',
  fontSize: '1.25rem',
  fontWeight: 600,
  color: 'var(--theme-elevation-1000)',
}

const lede: CSSProperties = {
  margin: '0 0 1.75rem',
  maxWidth: '54ch',
  color: 'var(--theme-elevation-650)',
  lineHeight: 1.6,
}

const grid: CSSProperties = {
  display: 'grid',
  gap: '1.5rem',
  gridTemplateColumns: 'repeat(auto-fit, minmax(15rem, 1fr))',
  marginBottom: '1.75rem',
}

const label: CSSProperties = {
  margin: '0 0 0.4rem',
  fontSize: '0.6875rem',
  fontWeight: 600,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: 'var(--theme-elevation-500)',
}

const body: CSSProperties = {
  margin: 0,
  fontSize: '0.875rem',
  lineHeight: 1.6,
  color: 'var(--theme-elevation-750)',
}

const note: CSSProperties = {
  margin: 0,
  paddingTop: '1.25rem',
  borderTop: '1px solid var(--theme-elevation-100)',
  fontSize: '0.875rem',
  lineHeight: 1.6,
  color: 'var(--theme-elevation-650)',
}

const strong: CSSProperties = { color: 'var(--theme-elevation-1000)', fontWeight: 600 }

// The five cards match the five headings in the menu on the left, in the same order and
// under the same names. Keep them in sync if a collection's `admin.group` changes.
export function BeforeDashboard() {
  return (
    <div style={card}>
      <h2 style={heading}>Editing the website</h2>
      <p style={lede}>
        Everything on the public site is edited from here. Nothing you do here can break the
        design: the layout is fixed, and you supply the words and the photographs. The headings
        below match the menu on the left.
      </p>

      <div style={grid}>
        <div>
          <p style={label}>Pages</p>
          <p style={body}>
            Whole pages you build yourself. Add sections from the palette (text, cards, figures,
            a quote, a gallery, questions and answers, a call to action), put them in any order
            and give each one a background. Tick <span style={strong}>Show in the main menu</span>{' '}
            and the page appears in the header. The same sections can be added to any plant, any
            service and the homepage, under <span style={strong}>Extra sections</span>.
          </p>
        </div>
        <div>
          <p style={label}>Content</p>
          <p style={body}>
            The things there can be many of: plants in the portfolio, services, leadership and
            open positions. Adding a plant here publishes its full case study and adds it to the
            portfolio automatically.
          </p>
        </div>
        <div>
          <p style={label}>Media</p>
          <p style={body}>
            Photographs, uploaded once and used anywhere. Upload the largest version you have.
            Every image needs a short description for screen readers and search engines; the
            field will ask for one.
          </p>
        </div>
        <div>
          <p style={label}>Administration</p>
          <p style={body}>
            Who can sign in. Everyone with an account can edit every part of the site;
            administrators can also add and remove people.
          </p>
        </div>
        <div>
          <p style={label}>Settings</p>
          <p style={body}>
            The things there is one of: company name, tagline, contact addresses, social links,
            and the opening statement on the homepage. These appear across every page.
          </p>
        </div>
      </div>

      <p style={note}>
        <span style={strong}>Draft and Published.</span> A new record starts as a draft, which
        only signed-in editors can see. It reaches the public site when you press{' '}
        <span style={strong}>Publish</span>, and the site updates within a few seconds, with no
        developer and no rebuild. To take something down, switch it back to draft rather than
        deleting it, so the record survives if you change your mind.
      </p>

      <p style={{ ...note, borderTop: 'none', paddingTop: '0.75rem' }}>
        <span style={strong}>Live preview.</span> Every record has two buttons on the right of
        the grey bar above the form. The <span style={strong}>eye</span> opens the real page
        beside the form and redraws it as you type; you can switch it between phone, tablet and
        desktop. The <span style={strong}>arrow</span> opens that page in a new tab. Drag the
        line between the form and the page to give either one more room. Your work is saved as
        you go and stays invisible to visitors until you publish.
      </p>
    </div>
  )
}

/** A line on the sign-in screen, for people who arrive from an old bookmark. */
export function BeforeLogin() {
  return (
    <p
      style={{
        margin: '0 0 1.5rem',
        textAlign: 'center',
        fontSize: '0.875rem',
        lineHeight: 1.6,
        color: 'var(--theme-elevation-650)',
      }}
    >
      Sign in to edit the website.
    </p>
  )
}

/**
 * "View the site" at the foot of the menu. The admin and the public site are one
 * deployment, so this is simply the root and survives a change of domain.
 */
export function ViewSiteLink() {
  return (
    <a
      className="nav__link"
      href="/"
      target="_blank"
      rel="noreferrer"
      style={{ marginTop: '1.5rem' }}
    >
      <span className="nav__link-label">View the site ↗</span>
    </a>
  )
}
