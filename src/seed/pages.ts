import type { RequiredDataFromCollectionSlug } from 'payload'
import { DOMAIN } from './content'
import { br, h2, link, p, richText, ul } from './richtext'

/**
 * Pages built from the section palette: the audience pages, the contact page and the
 * legal pages. Together they use most of the blocks in src/blocks/config.ts.
 */

const general = `mailto:hello@${DOMAIN}`

export const pages: RequiredDataFromCollectionSlug<'pages'>[] = [
  {
    slug: 'owners',
    showInNav: true,
    navLabel: 'For Owners',
    navOrder: 50,
    title: 'Is your plant producing what it should?',
    eyebrow: 'For asset owners',
    intro:
      'Lumenvale works with plant owners to recover lost production, control operating costs and protect the long-term value of the asset.',
    sections: [
      {
        blockType: 'cards',
        surface: 'cream',
        eyebrow: 'When owners call us',
        heading: 'The four conversations we have most often.',
        columns: '2',
        items: [
          {
            title: 'Your plant is producing less than it should',
            body: 'Output is drifting below the original forecast or below comparable plants nearby, and nobody has given you a straight explanation of why.',
          },
          {
            title: 'O&M costs have climbed and output has not',
            body: 'Service contracts, call-out fees and spare parts add up quietly. A plant can be fully available on paper and still lose the argument on the bottom line.',
          },
          {
            title: 'Warranties are ending or equipment is failing',
            body: 'Inverters near the end of their warranty, trackers that will not hold position, or a repowering decision that needs a plan before it becomes an emergency.',
          },
          {
            title: 'You own the plant, not the expertise',
            body: 'You need someone on site who is accountable in writing, and a monthly report you can read in ten minutes rather than interpret.',
          },
        ],
      },
      {
        blockType: 'process',
        surface: 'primary',
        eyebrow: 'How we run a plant',
        heading: 'From the control room to the annual inspection.',
        intro:
          'The same routine at every plant we operate, so owners always know what happened, when, and what it cost.',
        steps: [
          {
            marker: 'Around the clock',
            title: 'Control room watch',
            body: 'Every inverter, tracker row and meter reports to our control room. Alarms are triaged within fifteen minutes, day or night, and a crew goes out when the fix cannot be made remotely.',
          },
          {
            marker: 'Weekly',
            title: 'Site walk and work orders',
            body: 'The lead technician walks the plant, checks what the data cannot see, and closes the week’s work orders with photographs.',
          },
          {
            marker: 'Monthly',
            title: 'Owner report',
            body: 'Energy against expectation, losses by cause, the peer-group index and the action list, delivered within ten working days of month end.',
          },
          {
            marker: 'Annually',
            title: 'Thermography and testing',
            body: 'Drone thermography, IV-curve tests on sampled strings and a substation inspection, compared with the year before to track degradation.',
          },
        ],
        footnote:
          'Owners and their lenders receive the monthly report directly; nothing passes through a separate account team.',
      },
      {
        blockType: 'ownerReport',
        surface: 'sand',
        eyebrow: 'What you receive',
        heading: 'The monthly report, one page at a time.',
        intro:
          'Every owner gets the same report on the same day each month. This is an extract from the first page, using one of our plants as the example.',
        reportPeriod: 'June 2026',
        metrics: [
          { label: 'Energy delivered', value: '10.42 GWh', note: '+4.8% vs. budget' },
          { label: 'Performance ratio', value: '83.7%', note: 'Weather-corrected' },
          { label: 'Technical availability', value: '99.6%', note: 'Target 99.0%' },
          { label: 'Yield index', value: '110.2', note: 'vs. peer group of 9' },
          { label: 'Curtailment', value: '2.1%', note: 'Grid-ordered' },
          { label: 'Open work orders', value: '3', note: 'All under 48 hours old' },
        ],
        actions: [
          {
            text: 'Replace the failed combiner box fuses in block C4. Parts are on site and the work is booked for 8 July.',
          },
          {
            text: 'Bring the second dry-season module wash forward to week 28, after measured soiling losses reached 2.4 per cent.',
          },
          {
            text: 'Update tracker controller firmware across all 1,240 rows, staged over two nights to avoid daytime losses.',
          },
        ],
        covers:
          'The full report also covers revenue against the PPA price, O&M cost per kilowatt, warranty claims in progress and a twelve-month production forecast.',
      },
      {
        blockType: 'process',
        surface: 'cream',
        eyebrow: 'Taking over a plant',
        heading: 'The first ninety days, planned before day one.',
        steps: [
          {
            marker: 'Before handover',
            title: 'Data and due diligence',
            body: 'We review the monitoring history, warranty position and open defects, and agree a written handover list with the outgoing operator.',
          },
          {
            marker: 'Day one',
            title: 'Control room live',
            body: 'Monitoring switches to our control room on the handover date, so alarms are never left unwatched in between.',
          },
          {
            marker: 'First 30 days',
            title: 'Baseline inspection',
            body: 'A full site inspection, thermography and a spares count give us, and you, an honest baseline to be measured against.',
          },
          {
            marker: 'First 90 days',
            title: 'Recovery plan',
            body: 'Every loss found in the baseline is costed and ranked, and the fixes with the fastest payback are already done or booked.',
          },
        ],
      },
      {
        blockType: 'faq',
        surface: 'white',
        eyebrow: 'Questions owners ask',
        heading: 'Before you get in touch.',
        items: [
          {
            question: 'Can you take over a plant that is still under the builder’s O&M warranty?',
            answer:
              'Yes. We often start as the owner’s independent asset manager while the original contractor’s warranty runs, then take over operations when it ends. The handover is planned months ahead.',
          },
          {
            question: 'Do you only work on plants you run end to end?',
            answer:
              'No. Some owners use us for asset management only, some for O&M only, and some for monitoring and performance engineering on top of their existing contractors.',
          },
          {
            question: 'How are your fees structured?',
            answer:
              'A fixed annual fee per megawatt for the agreed scope, with an optional performance element tied to availability or yield. We do not propose a fee before we have seen the plant’s data.',
          },
          {
            question: 'Will you tell us if the plant does not need you?',
            answer:
              'Yes. If the plant is already well run, we will say so and tell you what we would keep an eye on.',
          },
        ],
      },
      {
        blockType: 'inquiry',
        surface: 'sand',
        eyebrow: 'Asset owner enquiries',
        emailRoute: 'owners',
        mode: 'form',
        allowAttachments: true,
        note: 'Everything you send is treated as confidential. We review every enquiry, including the ones we end up passing on.',
        steps: [
          {
            title: 'Tell us about the plant',
            body: 'Location, size, technology and whatever operating history you are comfortable sharing. Twelve months of monitoring data tells us most of what we need.',
          },
          {
            title: 'We come back with an honest read',
            body: 'What the plant should be producing, where the gap is and what it would take to close it. If we do not think we can improve on your current operator, we will say so.',
          },
          {
            title: 'Proposal and handover plan',
            body: 'Scope, fees and a handover plan with dates. Value is lost in the handover far more often than in the negotiation, so the plan is specific.',
          },
        ],
      },
    ],
    seo: {
      title: 'For Asset Owners',
      description:
        'Lumenvale works with solar plant owners to recover lost production, control operating costs and protect long-term asset value.',
    },
    _status: 'published',
  },
  {
    slug: 'investors',
    showInNav: false,
    navOrder: 100,
    title: 'Bringing us a portfolio?',
    eyebrow: 'Investors & brokers',
    intro:
      'We review operating and late-stage solar and storage assets across California, and we underwrite them as the operator who would run them.',
    sections: [
      {
        blockType: 'details',
        surface: 'cream',
        eyebrow: 'Acquisition criteria',
        heading: 'What we are actively looking at.',
        intro:
          'Opportunities outside these lines still get read. The criteria describe our focus, not a filter applied before the file is opened.',
        columns: '3',
        items: [
          { label: 'Segment', value: 'Ground-mount solar, with or without storage' },
          { label: 'Geography', value: 'San Joaquin Valley, High Desert and nearby regions' },
          { label: 'Size', value: 'Roughly 5 to 80 MWp per plant' },
          { label: 'Stage', value: 'Operating, or ready to build with interconnection secured' },
          { label: 'Condition', value: 'Stabilised, underperforming or due for repowering' },
          { label: 'Structure', value: 'Direct acquisition or joint venture with existing owners' },
        ],
      },
      {
        blockType: 'figures',
        surface: 'primaryDeep',
        eyebrow: 'The portfolio today',
        heading: 'What we already run.',
        items: [
          { value: '142', label: 'Megawatts', detail: 'Peak solar capacity' },
          { value: '120', label: 'Megawatt-hours', detail: 'Battery storage' },
          { value: '4', label: 'Plants', detail: 'One under construction' },
          { value: '99.4%', label: 'Availability', detail: 'Fleet average, trailing 12 months' },
        ],
      },
      {
        blockType: 'inquiry',
        surface: 'sand',
        eyebrow: 'Deal submissions',
        emailRoute: 'investors',
        mode: 'form',
        note: 'Submissions are held in confidence. Broker representation is respected and fees are honoured on closed transactions.',
        steps: [
          {
            title: 'Send the opportunity',
            body: 'An information memorandum, or simply the location, size, technology and asking price. Off-market submissions are welcome and treated confidentially.',
          },
          {
            title: 'We review it as an operator',
            body: 'We model the plant the way we would run it, starting from its own production history rather than the original yield report.',
          },
          {
            title: 'A straight answer either way',
            body: 'We answer every broker submission, including the ones we pass on, and tell you what the deal would have needed to look like.',
          },
        ],
        footnote: {
          eyebrow: 'Please note',
          text: 'Nothing on this website is an offer to sell or a solicitation of an offer to buy any security, nor a recommendation regarding any investment. Any discussion of a potential transaction takes place under a separate written agreement.',
        },
      },
    ],
    seo: {
      title: 'Investors & Brokers',
      description:
        'Acquisition criteria and deal submissions for Lumenvale Energy: operating and late-stage solar and storage assets in California.',
    },
    _status: 'published',
  },
  {
    slug: 'contact',
    showInNav: true,
    navLabel: 'Contact',
    navOrder: 60,
    title: 'Talk to the people who run the plants.',
    eyebrow: 'Get in touch',
    intro:
      'Enquiries go straight to the person responsible for that side of the business, not to a queue.',
    sections: [
      {
        blockType: 'contactRoutes',
        surface: 'cream',
        items: [
          {
            eyebrow: 'Asset owners',
            title: 'Management and O&M',
            body: 'Considering a change of operator, or looking for one for a plant you are buying.',
            emailRoute: 'owners',
            subject: 'Asset management enquiry',
          },
          {
            eyebrow: 'Investors & brokers',
            title: 'Acquisitions & investment',
            body: 'Portfolio sales, off-market opportunities and joint-venture conversations.',
            emailRoute: 'investors',
            subject: 'Acquisition opportunity',
          },
          {
            eyebrow: 'Everything else',
            title: 'General enquiries',
            body: 'Suppliers, utilities, press, careers and anything that does not fit the two above.',
            emailRoute: 'general',
            subject: 'General enquiry',
          },
        ],
        columns: [
          {
            eyebrow: 'Office',
            lead: 'Bakersfield, CA\nServing the San Joaquin Valley and the High Desert',
            body: 'Most of the team is at a plant most days. If you would rather meet on site than at a desk, that is usually easier for everyone.',
          },
          {
            eyebrow: 'Press',
            body: 'For interviews, comment or photography of our plants, write to the general address and put “Press” in the subject line.',
          },
        ],
      },
      {
        blockType: 'inquiry',
        surface: 'sand',
        eyebrow: 'General enquiries',
        emailRoute: 'general',
        mode: 'form',
        steps: [
          {
            title: 'Tell us what you need',
            body: 'A few lines are enough. If it concerns a specific plant, name it.',
          },
          {
            title: 'It reaches the right person',
            body: 'Your message goes to whoever is responsible for that side of the business, not to a shared inbox.',
          },
          {
            title: 'We reply within a business day',
            body: 'Usually sooner. If we are not the right people to help, we will say so and point you elsewhere.',
          },
        ],
      },
    ],
    seo: {
      title: 'Contact',
      description:
        'Contact Lumenvale Energy: asset management and O&M enquiries, acquisitions, careers and general questions.',
    },
    _status: 'published',
  },
  {
    slug: 'privacy',
    showInNav: false,
    navOrder: 900,
    title: 'Privacy Policy',
    eyebrow: 'Legal',
    intro: 'How we handle the information you share with us through this website.',
    sections: [
      {
        blockType: 'longForm',
        surface: 'cream',
        meta: 'Last updated: October 2026',
        content: richText(
          p(
            'Lumenvale Energy LLC (“Lumenvale”, “we”, “us”) operates this website. This policy explains what information we collect through it, why we collect it and what we do with it.',
          ),
          h2('Information we collect'),
          p(
            'We collect the information you give us directly: the contents of any enquiry form you complete or email you send us. That is usually your name, company, email address and telephone number, plus whatever you choose to tell us about a plant, an opportunity or an application.',
          ),
          p(
            'We also collect limited technical information automatically, such as your browser and device type, an approximate location derived from your IP address, the pages you viewed and the site that referred you. This is standard web analytics and is not used to identify you personally.',
          ),
          h2('How we use it'),
          ul(
            'To respond to your enquiry and continue the conversation',
            'To evaluate a plant, opportunity or job application you have sent us',
            'To understand how the site is used and improve it',
            'To meet our legal, tax and regulatory obligations',
          ),
          p('We do not sell your information or share it with third parties for their own marketing.'),
          h2('Documents you attach'),
          p(
            'Files attached to an enquiry are forwarded to us by email and are not stored on this website. We keep only their names and sizes with your enquiry, so we know what was sent.',
          ),
          h2('Who we share it with'),
          p(
            'We share information only with service providers that help us run the site (hosting, email delivery and analytics), and only as far as they need it to provide that service. We may also disclose information where the law requires it, or where it is necessary to protect our rights or the safety of others.',
          ),
          h2('Cookies'),
          p(
            'This site uses cookies that are needed for it to work, and may use analytics cookies to measure traffic. You can block or delete cookies in your browser settings, although blocking necessary cookies may affect how parts of the site work.',
          ),
          h2('How long we keep it'),
          p(
            'We keep enquiry correspondence for as long as it remains commercially relevant, and longer where accounting or legal rules require it. Job applications are kept so we can consider you for future openings, unless you ask us not to.',
          ),
          h2('Your choices'),
          p(
            'You can ask us what information we hold about you, and ask us to correct or delete it. Write to ',
            link(general),
            ' and we will respond within a reasonable time. Depending on where you live, you may have further rights under privacy law.',
          ),
          h2('Changes'),
          p('We may update this policy from time to time. The date at the top shows the latest revision.'),
          h2('Contact'),
          p('Lumenvale Energy LLC', br(), 'Bakersfield, CA', br(), link(general)),
        ),
      },
    ],
    seo: {
      title: 'Privacy Policy',
      description: 'How Lumenvale Energy handles information shared through this website.',
    },
    _status: 'published',
  },
  {
    slug: 'terms',
    showInNav: false,
    navOrder: 900,
    title: 'Terms of Use',
    eyebrow: 'Legal',
    intro: 'The terms that apply when you use this website.',
    sections: [
      {
        blockType: 'longForm',
        surface: 'cream',
        meta: 'Last updated: October 2026',
        content: richText(
          p(
            'This website is operated by Lumenvale Energy LLC. By using it you accept these terms; if you do not accept them, please do not use the site.',
          ),
          h2('Information on this site'),
          p(
            'The content here is general information about our company and our services. We take care to keep it accurate and current, but we cannot promise it is complete, error-free or up to date at any given moment. Plant details and performance figures are provided for information and are not a guarantee of future results.',
          ),
          h2('No offer or advice'),
          p(
            'Nothing on this website is an offer to sell, or a solicitation of an offer to buy, any security or interest in a plant, and nothing here is investment, legal, tax or accounting advice. Any transaction or engagement with Lumenvale is governed only by separate written agreements.',
          ),
          h2('Third parties'),
          p(
            'Equipment makers, utilities and other organisations named on this site are mentioned for identification only, which does not imply that they endorse this website. We are not responsible for the content or privacy practices of third-party sites we link to.',
          ),
          h2('Our content'),
          p(
            'The text, design, graphics and marks on this site belong to or are licensed to Lumenvale. You may view and print pages for your own reference, but not republish them or use them commercially without our written permission.',
          ),
          h2('Acceptable use'),
          p(
            'You agree not to use this site unlawfully, attempt to gain unauthorised access to it, introduce malicious code, or interfere with its operation.',
          ),
          h2('Limitation of liability'),
          p(
            'To the fullest extent permitted by law, Lumenvale is not liable for any indirect or consequential loss arising from your use of this website or from reliance on information on it. Nothing in these terms limits liability that cannot be limited by law.',
          ),
          h2('Governing law'),
          p('These terms are governed by the laws of the State of California.'),
          h2('Contact'),
          p('Questions about these terms: ', link(general), '.'),
        ),
      },
    ],
    seo: {
      title: 'Terms of Use',
      description: 'The terms that apply to the use of the Lumenvale Energy website.',
    },
    _status: 'published',
  },
  {
    slug: 'accessibility',
    showInNav: false,
    navOrder: 900,
    title: 'Accessibility',
    eyebrow: 'Legal',
    intro: 'Our commitment to making this website usable by everyone.',
    sections: [
      {
        blockType: 'longForm',
        surface: 'cream',
        meta: 'Last updated: October 2026',
        content: richText(
          h2('Our commitment'),
          p(
            'Lumenvale Energy LLC wants this website to be usable by everyone, including people with disabilities. We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 at level AA.',
          ),
          h2('What we do'),
          ul(
            'Check colour contrast against WCAG AA thresholds across the site',
            'Keep every page usable with a keyboard, with a visible focus indicator',
            'Use semantic headings and landmarks so screen readers can navigate',
            'Provide text alternatives for images and charts, including a table for every chart',
            'Respect the reduced-motion setting of your operating system',
            'Run automated accessibility tests before every release',
          ),
          h2('Ongoing work'),
          p(
            'Accessibility is not a one-time exercise. As we add pages, photography and forms we test again, and we treat an accessibility defect like a broken link: something to fix, not to schedule.',
          ),
          h2('Tell us about a problem'),
          p(
            'If something on this site is hard to use, or you need information from it in a different format, please let us know which page it was and what happened. Write to ',
            link(general),
            ' and we will work with you to provide what you need.',
          ),
        ),
      },
    ],
    seo: {
      title: 'Accessibility',
      description: 'The accessibility commitment of Lumenvale Energy and how to report a problem.',
    },
    _status: 'published',
  },
]
