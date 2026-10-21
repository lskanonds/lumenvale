import type { RequiredDataFromCollectionSlug } from 'payload'
import type { Homepage, SiteSetting } from '@/payload-types'

/**
 * Demo content for an empty CMS, in the shape Payload accepts.
 *
 * Lumenvale Energy is a fictional company. Its plants, people, figures, addresses and
 * email domain (`.example`, reserved for documentation) are invented for this project.
 *
 * This is the starting state of the CMS, not a runtime data source: once seeded, the admin
 * is the source of truth.
 */

const items = (...values: string[]) => values.map((item) => ({ item }))
const paragraphs = (...values: string[]) => values.map((paragraph) => ({ paragraph }))

export const DOMAIN = 'lumenvale.example'

export const siteSettings: Omit<SiteSetting, 'id' | 'createdAt' | 'updatedAt'> = {
  name: 'Lumenvale',
  descriptor: 'Solar Asset Management',
  nameFull: 'Lumenvale Energy',
  legalName: 'Lumenvale Energy LLC',
  tagline: 'Sunlight, accounted for.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  description:
    'Lumenvale Energy manages, operates and maintains utility-scale solar and storage plants across California’s San Joaquin Valley and High Desert.',
  footerNote:
    'Lumenvale Energy is a fictional company created for a portfolio project. Its plants, people, figures and contact details are invented, and any resemblance to real businesses is coincidental.',
  email: {
    general: `hello@${DOMAIN}`,
    owners: `owners@${DOMAIN}`,
    investors: `investments@${DOMAIN}`,
  },
  location: {
    city: 'Bakersfield',
    state: 'California',
    stateCode: 'CA',
    region: 'California’s San Joaquin Valley and High Desert',
  },
  social: { linkedin: '', facebook: '', instagram: '' },
}

export const homepage: Omit<Homepage, 'id' | 'createdAt' | 'updatedAt'> = {
  hero: {
    eyebrow: 'Asset Management / Operations & Maintenance / Repowering',
    intro:
      'Lumenvale runs utility-scale solar and storage plants for their owners, with the field crews, control room and reporting that lenders and investors expect.',
  },
  stats: [
    { value: '142', label: 'Megawatts', detail: 'Peak capacity under management' },
    { value: '99.4%', label: 'Availability', detail: 'Fleet average, trailing 12 months' },
    { value: '1 of 9', label: 'Peer group', detail: 'Copperwash Solar yield ranking' },
    { value: '24/7', label: 'Control room', detail: 'Every inverter, every minute' },
  ],
  extraSections: [
    {
      blockType: 'quote',
      surface: 'primary',
      quote:
        'We would rather tell an owner their plant is fine than sell them work it does not need. The meter keeps everyone honest, including us.',
      attribution: 'Elena Marsh',
      role: 'Managing Director, Lumenvale',
    },
  ],
}

export const services: RequiredDataFromCollectionSlug<'services'>[] = [
  {
    slug: 'asset-management',
    order: 1,
    title: 'Asset Management',
    blurb:
      'Owner-side oversight of the plant as an investment: budgets, contracts, PPA compliance, lender reporting and the decisions that protect long-term value.',
    lead: 'Asset management represents the owner rather than the contractor, even when we are also the contractor. Where we hold both roles, the reporting is built so ownership can see the difference.',
    sections: [
      {
        heading: 'Decisions weighed at exit value',
        body: 'Deferring an inverter overhaul improves this year’s margin and reduces what the plant is worth at sale. Budgets and reserve plans are built against the hold period and the likely exit, not against the convenience of the current year.',
      },
      {
        heading: 'Contracts are part of the asset',
        body: 'The PPA, the interconnection agreement, warranties and land leases carry obligations and options that move the value of a plant. They are tracked and managed deliberately, not handled when a letter arrives.',
      },
    ],
    covers: items(
      'Annual budgets and reforecasts',
      'PPA and interconnection compliance',
      'Lender and investor reporting',
      'Warranty and insurance claims',
      'Land lease and permit obligations',
      'Hold, refinance and sale analysis',
    ),
    reporting:
      'A monthly asset report and a quarterly review covering production against budget, availability, contractual position, open claims and any recommendation that changes the return profile of the hold.',
  },
  {
    slug: 'operations-maintenance',
    order: 2,
    title: 'Operations & Maintenance',
    blurb:
      'Preventive and corrective maintenance by our own field crews, from module cleaning and vegetation to inverters, trackers and the substation.',
    lead: 'Operations is where an O&M contract is actually judged. Inverters are online or they are not, trackers hold position or they do not, and the production figures follow within days.',
    sections: [
      {
        heading: 'Maintenance before failure',
        body: 'Preventive schedules cover inverters, trackers, combiner boxes, transformers and the substation. Most of the energy an ageing plant loses goes to small faults left running, and those never show up on an invoice.',
      },
      {
        heading: 'Crews that know the site',
        body: 'Each plant has a named lead technician and a crew based within an hour’s drive. Spares for the most common failures are stocked by region, so a repair waits for nothing but the drive.',
      },
    ],
    covers: items(
      'Preventive maintenance programmes',
      'Corrective maintenance with guaranteed response times',
      'Module cleaning planned on measured soiling',
      'Vegetation and site management',
      'Spare parts and warranty logistics',
      'High-voltage switching and substation work',
    ),
    reporting:
      'Work orders, response and repair times, energy lost per fault and preventive maintenance completion are reported each month next to the production figures, so cause and effect can be read together.',
  },
  {
    slug: 'performance-engineering',
    order: 3,
    title: 'Monitoring & Performance Engineering',
    blurb:
      'A 24/7 control room watching every inverter, and engineers who turn the data into fixes: underperforming strings, soiling, clipping and degradation.',
    lead: 'Monitoring tells you that something is wrong. Performance engineering finds out why, puts a number on what it costs and decides whether it is worth fixing.',
    sections: [
      {
        heading: 'Measured against expectation',
        body: 'Every plant is modelled against its own irradiance and temperature, so a cloudy month is not mistaken for a fault and a quiet fault is not hidden by a sunny month.',
      },
      {
        heading: 'Compared with its peers',
        body: 'Year-on-year growth can simply mean the weather improved. A yield index against comparable plants in the same region shows whether a plant is actually doing better, and that is the number we manage to.',
      },
    ],
    covers: items(
      '24/7 monitoring and alarm response',
      'Performance ratio and availability analysis',
      'Peer-group yield benchmarking',
      'Drone thermography and IV-curve testing',
      'Soiling and degradation tracking',
      'Root-cause reports for every major loss',
    ),
    reporting:
      'A monthly performance pack: energy against expectation, losses broken down by cause, the yield index against the peer group and the actions carried forward from the previous month.',
  },
  {
    slug: 'repowering-storage',
    order: 4,
    title: 'Repowering & Storage Retrofits',
    blurb:
      'Inverter replacements, tracker upgrades and battery retrofits for plants whose original equipment has started to cost more than it earns.',
    lead: 'A repowering is a revenue decision before it is an engineering project. Every day a block is offline is energy that cannot be sold, so scope and sequencing are planned against the production calendar, not only the contractor’s.',
    sections: [
      {
        heading: 'Scope that survives the budget',
        body: 'We scope against warranty position, failure history and remaining useful life, then price the work before committing. Upgrades overrun most often because the scope was optimistic at approval, not because the work was done badly.',
      },
      {
        heading: 'Sequenced around the sun',
        body: 'Block-by-block outages in the shoulder seasons, with commissioning finished before summer, keep lost production to a minimum while the work is under way.',
      },
    ],
    covers: items(
      'Inverter replacement and re-stringing',
      'Tracker controller and drive upgrades',
      'Battery storage retrofits',
      'Interconnection and permitting support',
      'Contractor selection and cost control',
      'Commissioning and performance testing',
    ),
    reporting:
      'Weekly progress against schedule and budget during the works, with energy lost to outages tracked as a line item rather than absorbed silently.',
  },
  {
    slug: 'acquisitions-due-diligence',
    order: 5,
    title: 'Acquisitions & Due Diligence',
    blurb:
      'Buy-side technical review, energy yield underwriting and handover planning for operating solar and storage assets.',
    lead: 'We review plants the way an operator does, because we may be the ones running them. That tends to produce more conservative production assumptions and more realistic maintenance budgets than a desktop model.',
    sections: [
      {
        heading: 'Data before the brochure',
        body: 'We start from the plant’s own monitoring history, not from the original yield report. Ten years of real production say more about a plant than its pre-construction estimate.',
      },
      {
        heading: 'Through to handover',
        body: 'Due diligence, warranty transfer, spares inventory and the handover from the previous operator are planned as one process. Value is lost in the handover far more often than in the negotiation.',
      },
    ],
    covers: items(
      'Technical due diligence and site inspection',
      'Energy yield and degradation analysis',
      'O&M and capital budget review',
      'Contract and warranty review',
      'Broker and off-market deal sourcing',
      'Handover and takeover planning',
    ),
    reporting:
      'Buyers and capital partners receive the full technical findings, the assumptions behind the production forecast and a written view of the risks, including the ones that argue against the deal.',
  },
  {
    slug: 'grid-energy-market',
    order: 6,
    title: 'Grid & Energy Market Services',
    blurb:
      'Scheduling, curtailment management, battery dispatch and offtake administration, so every megawatt-hour produced is also paid for.',
    lead: 'Producing energy is half of the job. The other half is making sure it is delivered, settled and paid for under the right contract at the right price.',
    sections: [
      {
        heading: 'Curtailment is a cost, not weather',
        body: 'Grid-ordered curtailment, communication outages and settlement errors all lose revenue without losing any sunlight. We track each one and recover what can be recovered.',
      },
      {
        heading: 'Storage that earns its keep',
        body: 'Where a plant has batteries, dispatch is planned daily against prices and grid constraints, and reported against what a perfect schedule would have earned.',
      },
    ],
    covers: items(
      'Generation scheduling and forecasting',
      'Curtailment tracking and claims',
      'Battery dispatch optimisation',
      'PPA invoicing and settlement checks',
      'Interconnection and grid code compliance',
      'Market and regulatory monitoring',
    ),
    reporting:
      'A monthly revenue reconciliation: energy produced, delivered and paid for, with every difference explained and assigned an owner.',
  },
]

/** Monthly yield index for the featured case study, January 2025 to June 2026. */
const copperwashIndex: [string, number][] = [
  ['Jan 2025', 94.8],
  ['Feb 2025', 95.6],
  ['Mar 2025', 98.2],
  ['Apr 2025', 99.1],
  ['May 2025', 101.8],
  ['Jun 2025', 102.4],
  ['Jul 2025', 103.9],
  ['Aug 2025', 103.1],
  ['Sep 2025', 105.6],
  ['Oct 2025', 106.3],
  ['Nov 2025', 104.9],
  ['Dec 2025', 107.2],
  ['Jan 2026', 106.8],
  ['Feb 2026', 108.5],
  ['Mar 2026', 107.7],
  ['Apr 2026', 109.4],
  ['May 2026', 108.9],
  ['Jun 2026', 110.2],
]

export const plants: RequiredDataFromCollectionSlug<'plants'>[] = [
  {
    slug: 'copperwash-solar',
    order: 1,
    featured: true,
    name: 'Copperwash Solar',
    technology: 'Single-axis trackers · bifacial modules',
    offtake: '15-year utility PPA',
    operatingStatus: 'operating',
    statusLabel: 'Operating · Repowered 2025',
    region: 'Kern County, California',
    commissionedYear: 2016,
    capacity: 48.6,
    interconnection: '70 kV line to the county substation, 3 miles',
    role: 'Asset management & O&M',
    address: {
      street: 'Copperwash Road, off Highway 223',
      city: 'Arvin',
      state: 'CA',
      zip: '93203',
      mapQuery: '35.1957, -118.8640',
    },
    performance: {
      headline: 'From the bottom half of its peer group to the top in eighteen months',
      body: 'Copperwash came under our management in December 2024 with two central inverters failing repeatedly, trackers drifting off position and a cleaning schedule set by the calendar rather than by soiling. We replaced the failing inverters, recalibrated the trackers and moved cleaning onto measured soiling losses. The plant now produces more energy per installed kilowatt than any other in its regional peer group.',
      period: 'June 2026',
      source: 'revenue-grade meter and plant SCADA',
      peerGroupSize: 9,
      rank: '1 of 9',
      rankCaption: 'Position within regional peer group',
      metrics: [
        {
          label: 'Yield index',
          value: '106.9',
          trend: 'up',
          caption: 'vs. peer group, trailing 12 months',
        },
        { label: 'Performance ratio', value: '84.1%', trend: 'up', caption: 'Trailing 12 months' },
        { label: 'Technical availability', value: '99.4%', caption: 'Trailing 12 months' },
        { label: 'Specific yield', value: '2,018', caption: 'kWh/kWp, trailing 12 months' },
        { label: 'Energy delivered', value: '98.1 GWh', caption: 'Trailing 12 months' },
        { label: 'Production vs. budget', value: '+6.2%', trend: 'up', caption: 'Year to date' },
        {
          label: 'Mean time to repair',
          value: '5.8 h',
          trend: 'down',
          caption: 'Inverter faults, year to date',
        },
        { label: 'Curtailment', value: '1.9%', caption: 'Grid-ordered, trailing 12 months' },
      ],
      indexSeries: copperwashIndex.map(([month, yieldIndex]) => ({ month, yieldIndex })),
      dataNote:
        'Detailed monthly performance reports are shared with prospective owners and lenders on request.',
    },
    roleSummary:
      'Lumenvale holds full operational accountability for the plant: asset management, field maintenance, monitoring and the commercial work around the PPA.',
    scope: [
      {
        group: 'Commercial',
        items: items(
          'PPA administration and invoicing',
          'Budgets and reforecasting',
          'Lender and investor reporting',
          'Warranty and insurance claims',
        ),
      },
      {
        group: 'Operations',
        items: items(
          '24/7 monitoring and alarm response',
          'Preventive and corrective maintenance',
          'Module cleaning and vegetation',
          'Tracker and inverter servicing',
        ),
      },
      {
        group: 'Engineering & safety',
        items: items(
          'Performance analysis and benchmarking',
          'Thermography and IV-curve testing',
          'High-voltage switching',
          'Health, safety and environment',
        ),
      },
    ],
    description: paragraphs(
      'Copperwash Solar is a 48.6 MWp single-axis tracker plant on former grazing land at the southern end of the San Joaquin Valley. It was commissioned in 2016 and sells its output under a fifteen-year utility power purchase agreement.',
      'The site gets some of the strongest sunshine in the valley, along with summer heat and dust that punish deferred maintenance. The 2025 repowering replaced two of its six central inverters and retrofitted the tracker controllers across the plant.',
    ),
    highlights: [
      { label: 'Modules', value: '112,400 bifacial' },
      { label: 'Tracker rows', value: '1,240' },
      { label: 'Inverters', value: '6 central, 2 replaced in 2025' },
      { label: 'Site area', value: '310 acres' },
    ],
    systems: [
      'Plant SCADA with one-minute data',
      'Two on-site weather stations',
      'Soiling measurement stations',
      'Revenue-grade metering',
      'Perimeter CCTV and access control',
      'Sheep grazing for vegetation control',
    ].map((system) => ({ system })),
    seo: {
      title: 'Copperwash Solar',
      description:
        'A Lumenvale case study: a 48.6 MWp tracker plant in Kern County, California, now first in its regional peer group for energy yield.',
    },
  },
  {
    slug: 'halfmoon-flats-solar',
    order: 2,
    featured: true,
    name: 'Halfmoon Flats Solar',
    technology: 'Fixed-tilt · monofacial modules',
    offtake: 'Community solar subscriptions',
    operatingStatus: 'operating',
    statusLabel: 'Operating since 2019',
    region: 'Tulare County, California',
    commissionedYear: 2019,
    capacity: 21.4,
    interconnection: '12 kV distribution feeder',
    role: 'O&M and monitoring',
    address: {
      street: 'Halfmoon Avenue, west of Road 120',
      city: 'Tulare',
      state: 'CA',
      zip: '93274',
      mapQuery: '36.1660, -119.4380',
    },
    performance: {
      headline: 'Steady, unglamorous and on budget for six years running',
      body: 'Halfmoon Flats is the kind of plant that should never make the news. Since we took over operations in 2020 it has met its production budget every year, with availability above 99 per cent and no unplanned inverter outage longer than a day.',
      period: 'June 2026',
      source: 'revenue-grade meter',
      peerGroupSize: 11,
      rank: '3 of 11',
      rankCaption: 'Position within regional peer group',
      metrics: [
        { label: 'Technical availability', value: '99.2%', caption: 'Trailing 12 months' },
        { label: 'Performance ratio', value: '81.7%', caption: 'Trailing 12 months' },
        { label: 'Energy delivered', value: '37.9 GWh', caption: 'Trailing 12 months' },
        { label: 'Production vs. budget', value: '+1.8%', trend: 'up', caption: 'Year to date' },
      ],
      dataNote:
        'Detailed monthly performance reports are shared with prospective owners and lenders on request.',
    },
    roleSummary:
      'Lumenvale runs operations, maintenance and monitoring for the plant under a long-term O&M agreement. Asset management stays with the owner, who receives our monthly reporting.',
    scope: [
      {
        group: 'Operations',
        items: items(
          'Preventive and corrective maintenance',
          'Module cleaning and vegetation',
          'Inverter servicing and warranty claims',
        ),
      },
      {
        group: 'Monitoring',
        items: items(
          '24/7 monitoring and alarm response',
          'String-level fault detection',
          'Monthly performance reporting',
        ),
      },
      {
        group: 'Community programme',
        items: items(
          'Production data for subscriber billing',
          'Planned outage notices',
          'Site safety and access',
        ),
      },
    ],
    description: paragraphs(
      'Halfmoon Flats is a 21.4 MWp fixed-tilt plant in Tulare County that supplies a community solar programme with around four thousand residential subscribers.',
      'Fixed-tilt arrays have fewer moving parts than trackers, so the maintenance effort shifts to the string inverters, to cleaning, and to the vegetation that grows quickly next to irrigated farmland.',
    ),
    highlights: [
      { label: 'Modules', value: '51,200 monofacial' },
      { label: 'Inverters', value: '84 string inverters' },
      { label: 'Site area', value: '120 acres' },
      { label: 'Subscribers', value: 'About 4,000 households' },
    ],
    systems: [
      'Plant SCADA with five-minute data',
      'On-site weather station',
      'String-level monitoring',
      'Revenue-grade metering',
    ].map((system) => ({ system })),
    seo: {
      title: 'Halfmoon Flats Solar',
      description:
        'A Lumenvale case study: a 21.4 MWp community solar plant in Tulare County, California, on budget every year since 2020.',
    },
  },
  {
    slug: 'saltgrass-ridge-solar-storage',
    order: 3,
    featured: true,
    name: 'Saltgrass Ridge Solar + Storage',
    technology: 'Single-axis trackers · 4-hour battery',
    offtake: 'Utility PPA and capacity contract',
    operatingStatus: 'operating',
    statusLabel: 'Operating · Storage added 2025',
    region: 'San Bernardino County, California',
    commissionedYear: 2021,
    capacity: 62,
    storage: '30 MW / 120 MWh',
    interconnection: '115 kV line to the regional substation',
    role: 'Asset management & O&M',
    address: {
      street: 'Saltgrass Ridge Road',
      city: 'Lucerne Valley',
      state: 'CA',
      zip: '92356',
      mapQuery: '34.4500, -116.9000',
    },
    performance: {
      headline: 'A battery retrofit that pays for its own capacity contract',
      body: 'We managed the addition of a 30 MW, four-hour battery in 2025 without taking the solar plant offline for a single day of summer production. The battery now moves afternoon solar into the evening peak, which is where most of the plant’s revenue growth has come from.',
      period: 'June 2026',
      source: 'plant SCADA and settlement data',
      peerGroupSize: 7,
      rank: '2 of 7',
      rankCaption: 'Position within regional peer group',
      metrics: [
        { label: 'Technical availability', value: '99.5%', caption: 'Solar, trailing 12 months' },
        { label: 'Battery availability', value: '98.7%', caption: 'Since commissioning' },
        { label: 'Round-trip efficiency', value: '86.3%', caption: 'Battery, year to date' },
        { label: 'Revenue vs. budget', value: '+9.4%', trend: 'up', caption: 'Year to date' },
      ],
      dataNote:
        'Detailed monthly performance reports are shared with prospective owners and lenders on request.',
    },
    roleSummary:
      'Lumenvale manages the plant for its owner and runs operations and maintenance for both the solar plant and the battery, including daily dispatch planning.',
    scope: [
      {
        group: 'Commercial',
        items: items(
          'PPA and capacity contract administration',
          'Battery dispatch planning',
          'Settlement checks and curtailment claims',
        ),
      },
      {
        group: 'Operations',
        items: items(
          'Solar and battery maintenance',
          'Tracker servicing in high wind',
          'Dust and sand management',
        ),
      },
      {
        group: 'Engineering',
        items: items(
          'Battery health and degradation tracking',
          'Performance benchmarking',
          'Fire safety systems',
        ),
      },
    ],
    description: paragraphs(
      'Saltgrass Ridge is a 62 MWp tracker plant in the High Desert, commissioned in 2021. In 2025 a 30 MW, 120 MWh battery was added beside the existing substation.',
      'The desert gives the plant excellent sunshine and a harsh working environment: wind that stresses trackers, sand that scours modules and summer temperatures that shorten the life of anything left uncooled.',
    ),
    highlights: [
      { label: 'Modules', value: '138,000 bifacial' },
      { label: 'Battery', value: '30 MW / 120 MWh' },
      { label: 'Site area', value: '410 acres' },
      { label: 'Commissioned', value: '2021, storage 2025' },
    ],
    systems: [
      'Plant SCADA and battery management system',
      'Wind stow control for trackers',
      'Three on-site weather stations',
      'Battery fire detection and suppression',
      'Revenue-grade metering',
    ].map((system) => ({ system })),
    seo: {
      title: 'Saltgrass Ridge Solar + Storage',
      description:
        'A Lumenvale case study: a 62 MWp desert solar plant with a 120 MWh battery retrofit in San Bernardino County, California.',
    },
  },
  {
    slug: 'thistledown-solar',
    order: 4,
    featured: true,
    name: 'Thistledown Solar',
    technology: 'Single-axis trackers · agrivoltaic layout',
    offtake: 'Community solar subscriptions',
    operatingStatus: 'construction',
    statusLabel: 'Under construction · Energisation 2027',
    region: 'Kings County, California',
    capacity: 9.8,
    interconnection: '12 kV distribution feeder',
    role: 'Owner’s engineer, then O&M',
    address: {
      street: 'Thistledown Lane',
      city: 'Hanford',
      state: 'CA',
      zip: '93230',
      mapQuery: '36.3000, -119.7000',
    },
    performance: {
      headline: 'An agrivoltaic plant designed with the farm, not around it',
      body: 'The panels are raised and spaced so that sheep can graze and forage crops can grow beneath them. We are acting as owner’s engineer through construction and will take over operations when the plant is energised.',
      rankCaption: 'Position within regional peer group',
      metrics: [],
      dataNote:
        'Performance figures will be published after the plant’s first full year of operation.',
    },
    roleSummary:
      'During construction Lumenvale represents the owner on design reviews, quality inspections and commissioning. Operations and maintenance start at energisation.',
    scope: [
      {
        group: 'Construction',
        items: items('Design and specification review', 'Quality inspections', 'Schedule and budget tracking'),
      },
      {
        group: 'Commissioning',
        items: items('Witness testing', 'Performance acceptance test', 'Handover documentation'),
      },
      {
        group: 'Operations',
        items: items('O&M from energisation', 'Grazing management plan', 'Monitoring set-up'),
      },
    ],
    description: paragraphs(
      'Thistledown Solar is a 9.8 MWp agrivoltaic plant under construction on working farmland in Kings County. Rows are spaced wider and mounted higher than usual so the land stays in agricultural use.',
    ),
    highlights: [
      { label: 'Layout', value: 'Raised trackers, wide row spacing' },
      { label: 'Land use', value: 'Grazing and forage crops' },
    ],
    systems: [],
    seo: {
      title: 'Thistledown Solar',
      description:
        'A 9.8 MWp agrivoltaic solar plant under construction in Kings County, California, with Lumenvale as owner’s engineer.',
    },
  },
]

export const team: RequiredDataFromCollectionSlug<'team'>[] = [
  {
    slug: 'elena-marsh',
    order: 1,
    name: 'Elena Marsh',
    title: 'Managing Director',
    bio: paragraphs(
      'Elena spent twelve years in utility-scale development and asset management before founding Lumenvale, most recently running a 600 MW portfolio for an infrastructure fund.',
      'She is responsible for owner relationships, acquisitions and the company’s commercial direction.',
    ),
    email: `elena.marsh@${DOMAIN}`,
  },
  {
    slug: 'tomas-reyes',
    order: 2,
    name: 'Tomás Reyes',
    title: 'Head of Operations',
    bio: paragraphs(
      'Tomás started as a field technician and has since commissioned or maintained more than a gigawatt of solar across California and Nevada.',
      'He leads the field crews, the control room and the company’s health and safety programme.',
    ),
  },
  {
    slug: 'priya-natarajan',
    order: 3,
    name: 'Priya Natarajan',
    title: 'Director, Performance Engineering',
    bio: paragraphs(
      'Priya is an electrical engineer who built the performance models and peer-group benchmarks behind Lumenvale’s monthly reporting.',
      'She leads technical due diligence on acquisitions and sets the scope of every repowering.',
    ),
  },
]

export const jobs: RequiredDataFromCollectionSlug<'jobs'>[] = [
  {
    slug: 'pv-field-technician-kern-county',
    title: 'PV Field Technician',
    plant: 'Copperwash Solar',
    location: 'Kern County, CA',
    type: 'Full-time',
    department: 'Operations',
    summary:
      'Preventive and corrective maintenance on a 48.6 MWp tracker plant, as part of a three-person crew with an on-call rotation.',
    responsibilities: items(
      'Carry out scheduled maintenance on inverters, trackers and combiner boxes',
      'Respond to control room call-outs and restore failed equipment',
      'Record every job with photographs and readings',
      'Follow lock-out and high-voltage safety procedures',
    ),
    requirements: items(
      'Two years of electrical field experience, solar preferred',
      'Valid driving licence and willingness to work outdoors in summer heat',
      'NFPA 70E training, or willingness to complete it',
    ),
  },
  {
    slug: 'performance-analyst',
    title: 'Performance Analyst',
    plant: 'Corporate',
    location: 'Bakersfield, CA',
    type: 'Full-time',
    department: 'Performance Engineering',
    summary:
      'Turn plant data into the monthly performance reports and root-cause analyses that owners and lenders rely on.',
    responsibilities: items(
      'Prepare monthly performance packs for each plant',
      'Investigate losses and quantify their cost',
      'Maintain the peer-group benchmark dataset',
      'Support due diligence on acquisitions',
    ),
    requirements: items(
      'Degree in engineering, physics or a related field',
      'Confident with Python or SQL and large time-series datasets',
      'Clear written English: the reports are read by non-engineers',
    ),
  },
]
