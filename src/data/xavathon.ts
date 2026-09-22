/* ---------------------------------------------------------------
   All copy for the Awards, Partners, FAQ and Contact sections.
   Edit here — the components read from this file only.
   Items marked `provisional: true` render with a small "to be
   confirmed" tag, so the page stays live while details are locked in
   after the 21 September meeting.
--------------------------------------------------------------- */

export const podium = [
  { place: "2nd", race: "Open podium", note: "Men’s & Women’s, each distance", height: "h-24 sm:h-28", metal: "#BCCBCB" },
  { place: "1st", race: "Overall winner", note: "Men’s & Women’s, each distance", height: "h-32 sm:h-40", metal: "#D9A43C" },
  { place: "3rd", race: "Open podium", note: "Men’s & Women’s, each distance", height: "h-20 sm:h-24", metal: "#B07C4B" },
];

export const raceAwards = [
  {
    distance: "10 KM",
    label: "Competitive Run",
    prize: "Cash prize, trophy & winner’s medal",
    lines: ["Top 3 men", "Top 3 women", "Fastest Xaverian, men & women"],
    provisional: true,
  },
  {
    distance: "5 KM",
    label: "Challenge Run",
    prize: "Trophy & winner’s medal",
    lines: ["Top 3 men", "Top 3 women", "Fastest school entrant"],
    provisional: true,
  },
  {
    distance: "3 KM",
    label: "Fun Run",
    prize: "Finisher medal for everyone",
    lines: ["No competitive ranking", "Timed for personal records", "Open to families"],
    provisional: false,
  },
];

export const ageGroups = [
  { band: "Under 18", note: "With guardian consent" },
  { band: "18–29", note: "Open" },
  { band: "30–39", note: "Open" },
  { band: "40–49", note: "Veteran" },
  { band: "50–59", note: "Veteran" },
  { band: "60 & above", note: "Masters" },
];

export const specialAwards = [
  {
    name: "Greenest Footprint",
    who: "One runner, one team",
    what: "For the participant and contingent who run the cleanest race — zero litter, reusable hydration, no single-use plastic at any station.",
  },
  {
    name: "Xaverian Spirit",
    who: "Nominated on race day",
    what: "For the runner who stops, waits, pulls someone else across the line. Chosen by marshals along the course.",
  },
  {
    name: "Largest Contingent",
    who: "Schools, colleges, corporates",
    what: "Awarded to the institution that brings the most registered finishers to the start line.",
  },
  {
    name: "First Finish",
    who: "First-time runners",
    what: "For runners completing their first ever organised race, across all three distances.",
  },
];

export const everyFinisher = [
  "Finisher medal",
  "Downloadable e-certificate",
  "Timing chip result",
  "Event T-shirt & bib",
  "Refreshments at the finish",
];

/* --------------------------- Partners --------------------------- */

export type Tier = {
  tier: string;
  blurb: string;
  slots: number;
  weight: "headline" | "major" | "standard";
  partners: { name: string; logo?: string }[];
};

export const tiers: Tier[] = [
  {
    tier: "Title Partner",
    blurb: "Naming rights across the event — Xavathon 2027 presented by your brand.",
    slots: 1,
    weight: "headline",
    partners: [],
  },
  {
    tier: "Powered By",
    blurb: "Co-branded on the start arch, finish gantry and every bib.",
    slots: 2,
    weight: "major",
    partners: [],
  },
  {
    tier: "Sustainability Partner",
    blurb: "Waste segregation, tree plantation and the zero-plastic course.",
    slots: 1,
    weight: "major",
    partners: [],
  },
  { tier: "Hydration Partner", blurb: "Water and electrolytes across six course stations.", slots: 1, weight: "standard", partners: [] },
  { tier: "Medical Partner", blurb: "Ambulances, physiotherapy and the medical tent.", slots: 1, weight: "standard", partners: [] },
  { tier: "Sports Partner", blurb: "Timing chips, race kit and warm-up zone.", slots: 2, weight: "standard", partners: [] },
  { tier: "Media Partner", blurb: "Print, radio and digital coverage before and on race day.", slots: 2, weight: "standard", partners: [] },
  { tier: "Community Partner", blurb: "NGOs and running clubs mobilising runners across Kolkata.", slots: 3, weight: "standard", partners: [] },
];

export const supportingPartners = [
  "Your brand here",
  "Slot open",
  "Your brand here",
  "Slot open",
  "Your brand here",
  "Slot open",
];

export const partnerBenefits = [
  { head: "On the course", body: "Banners at the start arch, finish gantry, hydration points and the warm-up zone." },
  { head: "On the runner", body: "Logo placement on 3,000+ event T-shirts and race bibs." },
  { head: "Online", body: "Social campaigns, website listing and post-event coverage to the Xaverian network." },
  { head: "On paper", body: "Tax benefit under Section 80G of the Income Tax Act, 1961." },
];

/* --------------------------- Charity ---------------------------- */

export const charity = {
  head: "Running for a cause",
  intro:
    "Xavathon is not run for its own sake. A share of every entry fee, and every rupee raised beyond it, is set aside for causes the Organising Committee selects each year — with preference for work already active in and around Kolkata.",
  causes: [
    {
      name: "Education for underserved children",
      body: "Supporting school supplies, tuition support and scholarships for children from low-income households in and around Kolkata.",
    },
    {
      name: "Environmental restoration",
      body: "Tree plantation drives and clean-up initiatives that carry the race's own zero-waste standard beyond race day.",
    },
    {
      name: "Community health & wellness",
      body: "Health camps and awareness drives run in partnership with our Medical Partner, reaching neighbourhoods along the course.",
    },
  ],
  howToGive: [
    "Round up your registration fee to the nearest hundred at checkout.",
    "Register as a Community Partner NGO and mobilise your own runners.",
    "Make a direct contribution — write in for details and 80G receipts.",
  ],
  note: "Beneficiaries for the 2027 edition are confirmed by the Organising Committee and published on this page ahead of race day.",
};

/* ------------------------ Members / Committee -------------------- */

export type CommitteeMember = { name: string; designation: string; image: string };

export const organisingCommittee: CommitteeMember[] = [
  { name: "To be confirmed", designation: "Faculty Convenor", image: "/images/committee/placeholder.png" },
  { name: "To be confirmed", designation: "Student Convenor", image: "/images/committee/placeholder.png" },
  { name: "To be confirmed", designation: "Secretary", image: "/images/committee/placeholder.png" },
];

export const workingCommittee: CommitteeMember[] = [
  { name: "To be confirmed", designation: "Operations & Logistics", image: "/images/committee/placeholder.png" },
  { name: "To be confirmed", designation: "Registration & Technology", image: "/images/committee/placeholder.png" },
  { name: "To be confirmed", designation: "Sponsorship & Partnerships", image: "/images/committee/placeholder.png" },
  { name: "To be confirmed", designation: "Media & Publicity", image: "/images/committee/placeholder.png" },
  { name: "To be confirmed", designation: "Medical & Safety", image: "/images/committee/placeholder.png" },
  { name: "To be confirmed", designation: "Green Initiatives", image: "/images/committee/placeholder.png" },
  { name: "To be confirmed", designation: "Hospitality", image: "/images/committee/placeholder.png" },
  { name: "To be confirmed", designation: "Volunteer Coordination", image: "/images/committee/placeholder.png" },
  { name: "To be confirmed", designation: "Design & Creatives", image: "/images/committee/placeholder.png" },
];

export const otherMembers: CommitteeMember[] = Array.from({ length: 10 }, () => ({
  name: "To be confirmed",
  designation: "Committee Member",
  image: "/images/committee/placeholder.png",
}));
/* ----------------------------- FAQ ----------------------------- */

export const faqGroups = [
  {
    group: "Entry & registration",
    items: [
      {
        q: "Who can participate?",
        a: "Everyone. Students, alumni, faculty, families, running clubs and citizens of Kolkata are all welcome. The 3 KM Fun Run needs no running background at all.",
      },
      {
        q: "What are the age limits?",
        a: "Runners under 18 need a guardian’s consent form at bib collection. The 10 KM Competitive Run has a minimum age of 16 on race day. There is no upper age limit — our Masters category starts at 60.",
        provisional: true,
      },
      {
        q: "Can I register as a group?",
        a: "Yes. Schools, colleges, corporates and running clubs can register a contingent in one go, with a single payment and bulk bib collection. Contingents of ten or more are eligible for the Largest Contingent award.",
      },
      {
        q: "What is included in registration?",
        a: "An event T-shirt, race bib with timing chip, finisher medal, e-certificate, hydration on course and refreshments at the finish.",
      },
      {
        q: "Can I transfer my registration to someone else?",
        a: "Bibs are non-transferable. Running on another person’s bib means both entries are disqualified and the timing result is void — it is a safety measure, since our medical team works from your registration details.",
      },
      {
        q: "Is there a refund if I can’t run?",
        a: "Registration fees are non-refundable, as the amount is committed to race kit and on-ground costs well before race day. If the event itself is cancelled by the organisers, the full fee is returned.",
        provisional: true,
      },
    ],
  },
  {
    group: "On race day",
    items: [
      {
        q: "Where do I collect my bib?",
        a: "At the bib collection desk on the St. Xavier’s College campus, 30 Mother Teresa Sarani, over the two days before the race. Carry a photo ID and your registration confirmation. Bibs are not handed out at the start line.",
        provisional: true,
      },
      {
        q: "What happens if it rains?",
        a: "The race goes ahead in light rain. In heavy rain or a weather advisory, the flag-off is held back and a decision is announced over the public address system and our social channels. Runner safety decides the call, not the schedule.",
      },
      {
        q: "Where can I park?",
        a: "Parking near Park Street is limited on race morning and roads around the course close early. Take the Metro to Park Street station or arrange a drop-off. Designated parking, where available, will be marked on the route map.",
        provisional: true,
      },
      {
        q: "Is there a bag drop?",
        a: "Yes, a marshalled bag counter runs beside the start area from reporting time until an hour after the last finisher. Leave valuables at home — the counter is staffed but not insured.",
      },
    ],
  },
  {
    group: "After the finish",
    items: [
      {
        q: "Are certificates provided?",
        a: "Every finisher gets a downloadable e-certificate with their chip time, linked to the bib number.",
      },
      {
        q: "When will results be released?",
        a: "Provisional results go up on this site on race day evening. Final results follow once timing data is verified and any queries are settled.",
        provisional: true,
      },
      {
        q: "What makes Xavathon a green race?",
        a: "No single-use plastic at hydration points, segregated waste at every station, paperless registration, and a course cleared by volunteers within the hour. The Greenest Footprint award goes to the runners who make that easy.",
      },
    ],
  },
];

/* --------------------------- Contact --------------------------- */

export const contacts = [
  { name: "Mr. Sanjib Koner", role: "Partnerships", phone: "+91 94340 08966" },
  { name: "Aarushi Singh", role: "Sponsorship desk", phone: "+91 82405 89758" },
  { name: "Swastika Puri", role: "Sponsorship desk", phone: "+91 98755 66381" },
  { name: "Samyak Dutta", role: "Sponsorship desk", phone: "+91 97485 71122" },
  { name: "Mudit Surana", role: "Sponsorship desk", phone: "+91 90072 69461" },
];

export const eventEmail = "xavathon@sxccal.edu";
export const eventAddress = "St. Xavier’s College (Autonomous), Kolkata\n30, Mother Teresa Sarani (Park Street), Kolkata 700016";

/* ===============================================================
   EVENT CONSTANTS
   Everything dated or priced below is provisional until the
   Organising Committee signs off. Change it here, once.
=============================================================== */

export const event = {
  name: "Xavathon 2027",
  edition: "2nd Edition",
  tagline: "Towards Greener Footprints",
  /* TO CONFIRM — the countdown and every date on the site read from this */
  date: "2027-02-14T05:30:00+05:30",
  dateLabel: "Sunday, 14 February 2027",
  dateShort: "14 Feb 2027",
  venue: "St. Xavier’s College (Autonomous), Kolkata",
  venueShort: "Park Street, Kolkata",
  flagOff: "5:30 AM onwards",
  expected: "3,000+",
  provisional: true,
};

/* Races, Route Maps and Awards & Categories now live on one merged
   page (/races) so the hamburger carries a single entry for all of it. */
export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Races, Routes & Awards", href: "/races" },
  { label: "Event Day", href: "/event-day" },
  { label: "Participant Guide", href: "/participant-guide" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "Gallery", href: "/gallery" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact Us", href: "/contact" },
];

/* The registration form itself lives off-site. Swap this for the
   real link when the payment gateway is live. */
export const registerUrl = "#register";

/* --------------------------- Home ---------------------------- */

export const homeIntro = {
  lead: "A mini marathon run by students, for the city.",
  body: "Xavathon began in 2026 as a single morning when Park Street belonged to runners rather than traffic. It returns in 2027 over three distances, with one condition attached: the course has to be cleaner when we leave it than when we arrived.",
};

export const whyXavathon = [
  {
    head: "Run where the city wakes up",
    body: "A closed course through central Kolkata at first light, marshalled end to end, with the college gate as both start and finish.",
  },
  {
    head: "Three distances, one start line",
    body: "A timed 10 KM for club runners, a 5 KM for people building up, and a 3 KM anyone can walk. Nobody is sorted into a lesser race.",
  },
  {
    head: "Nothing left behind",
    body: "No single-use plastic on course, segregated waste at every station, and volunteers who clear the route within the hour of the last finisher.",
  },
  {
    head: "Money that stays local",
    body: "Proceeds fund the college’s outreach programmes — school support, community health drives and the campus green fund.",
  },
];

export const greenInitiatives = [
  { head: "Zero single-use plastic", body: "Steel and paper cups at all six hydration points, refill stations instead of bottles." },
  { head: "Segregated waste", body: "Wet, dry and recyclable bins at every station, staffed by trained volunteers." },
  { head: "Paperless entry", body: "Digital registration, digital bib confirmation, digital certificates." },
  { head: "A tree per hundred runners", body: "Saplings planted across the city in the fortnight after race day, with our sustainability partner." },
  { head: "Kit that lasts", body: "Event T-shirts in recycled fabric, bibs printed on recyclable stock." },
  { head: "Course cleared in an hour", body: "A sweep team walks the full 10 KM behind the last runner and leaves the road clean." },
];

export const stats = [
  { figure: "3,000+", label: "runners expected" },
  { figure: "3", label: "distances" },
  { figure: "6", label: "hydration points" },
  { figure: "0", label: "single-use plastic" },
];

export const previousEdition = {
  head: "Xavathon 2026, the first time out",
  body: "The first edition flagged off from the college gate with runners from forty schools and colleges, twenty corporate contingents and a Sunday crowd that stayed to the last finisher. It set the shape of everything here.",
  points: [
    { figure: "1,800", label: "finishers across two distances" },
    { figure: "220", label: "student volunteers on course" },
    { figure: "41", label: "institutions represented" },
  ],
};

/* --------------------------- About ---------------------------- */

export const principalMessage = {
  name: "Rev. Dr. Dominic Savio, SJ",
  role: "Principal",
  placeholder: false,
  greeting:
    "Athletics is not merely the measurement of seconds, but the measure of our moral responsibility to the ground beneath our feet.",
  body: [
    "It is with immense pride and enthusiasm that I welcome you to the <strong>2nd Edition of Xavathon – Towards Greener Footprints</strong>, the Mini Marathon organized by <strong>St. Xavier’s College (Autonomous), Kolkata</strong>.",
    "What began with our first edition in January 2026 has grown into a meaningful movement—one that brings together the spirit of sport, the pursuit of well-being, and our collective responsibility towards the environment. <strong>Xavathon 2027 carries this spirit forward with renewed purpose, greater participation, and a joyful ambition to make every step count.</strong>",
    "The theme, <strong>“Towards Greener Footprints,”</strong> invites us to look beyond the finish line. A footprint is more than a mark we leave behind; it is a reflection of the impact we create through our choices and actions. Xavathon reminds us that while our individual steps may seem small, together they can lead us towards a cleaner, healthier, and more sustainable future for generations to come.",
    "At <strong>St. Xavier’s College (Autonomous), Kolkata</strong>, we believe that education extends far beyond the boundaries of a classroom. It is about nurturing individuals who are conscious of their responsibilities, compassionate towards society, and committed to shaping a better tomorrow. Xavathon reflects this philosophy by transforming a sporting endeavour into a celebration of <strong>community, sustainability, resilience, and responsible citizenship</strong>.",
    "May Xavathon 2027 inspire us to <strong>run farther, live healthier, think greener, and leave behind footprints that future generations will be proud to follow.</strong>",
  ],
};

export const whatIsXavathon = [
  "Xavathon is the annual mini marathon of St. Xavier’s College (Autonomous), Kolkata — organised by students, run on a closed course through the centre of the city, and open to everybody who can get to the start line.",
  "It is deliberately not an elite race. The 10 KM is chip-timed and competitive for those who want it; the 5 KM and 3 KM exist so that a first-time runner, a school team and a family with a pram all have a distance that fits. The same medal design goes round every finisher’s neck.",
];

export const objectives = [
  { head: "Get the city moving", body: "Make an organised run something an ordinary Kolkatan can enter without a club, a coach or a history of running." },
  { head: "Prove a race can be clean", body: "Run an event of three thousand people that produces almost no waste, and publish what it did produce." },
  { head: "Put students in charge", body: "Every function — course, registration, medical liaison, sponsorship, communications — is led by a student team with staff oversight." },
  { head: "Fund what the college does next", body: "Direct the surplus into outreach: school support, community health, and the campus green fund." },
];

export const whyCollegeRun = {
  head: "Why a college-organised marathon?",
  body: [
    "Because the people who will live longest with the city’s air are the ones organising this. A commercial race hires a crew. Xavathon builds one out of undergraduates who have to negotiate with the police, count out three thousand bibs and stand on a junction at four in the morning.",
    "It is slower, and it is harder, and it is the point. Students who have run a road race for three thousand people can run most things.",
  ],
};

export const impact = [
  { figure: "220+", label: "students in the organising and volunteer crew" },
  { figure: "40+", label: "schools, colleges and companies mobilised" },
  { figure: "100%", label: "of the surplus into college outreach programmes" },
];

export const aboutCollege = [
  "St. Xavier’s College (Autonomous), Kolkata was founded in 1860 by the Society of Jesus on Park Street, and has taught in this city for over a century and a half. It was granted autonomy in 2006 and university status in 2017.",
  "Xavathon runs from its gate at 30, Mother Teresa Sarani — the road the college has faced since the beginning.",
];

/* --------------------------- Races ---------------------------- */

export type Race = {
  slug: string;
  distance: string;
  name: string;
  summary: string;
  fee: string;
  feeGroup: string;
  eligibility: string;
  minAge: string;
  ageNote: string;
  flagOff: string;
  cutoff: string;
  route: string;
  timed: boolean;
  receives: string[];
  awards: string[];
  rules: string[];
  requirements: string[];
  provisional?: boolean;
};

export const races: Race[] = [
  {
    slug: "3k",
    distance: "3 KM",
    name: "Fun Run",
    summary: "Walk it, jog it, push a pram round it. No ranking, no pressure, and a medal at the end all the same.",
    fee: "₹400",
    feeGroup: "₹350 per head for contingents of ten or more",
    eligibility: "Open to all ages. Under-18s need a guardian’s consent form at bib collection.",
    minAge: "No minimum",
    ageNote: "Children under 12 must run with an accompanying adult who is also registered.",
    flagOff: "7:00 AM",
    cutoff: "60 minutes",
    route: "College gate → Park Street → Camac Street → back along Park Street to the gate.",
    timed: false,
    receives: ["Event T-shirt", "Race bib with timing chip", "Finisher medal", "E-certificate", "Hydration on course", "Refreshments at the finish"],
    awards: ["Finisher medal for everyone", "Timed for your own record", "First Finish award for first-time runners"],
    rules: [
      "Walking is fine over the whole distance.",
      "Stay inside the coned lane and follow marshal instructions at every junction.",
      "Headphones are discouraged — you need to hear the marshals.",
      "Prams and wheelchairs start at the back of the pen, for everyone’s safety.",
    ],
    requirements: ["Bib pinned to the front, visible at all times", "Photo ID", "Guardian consent form if under 18", "Comfortable shoes — no sandals or flip-flops"],
    provisional: true,
  },
  {
    slug: "5k",
    distance: "5 KM",
    name: "Challenge Run",
    summary: "The step up. Far enough to need a plan, short enough that six weeks of training will get you round comfortably.",
    fee: "₹600",
    feeGroup: "₹525 per head for contingents of ten or more",
    eligibility: "Open to runners aged 12 and above on race day.",
    minAge: "12 years",
    ageNote: "Age-group categories apply, for men and women separately.",
    flagOff: "6:15 AM",
    cutoff: "75 minutes",
    route: "College gate → Park Street → AJC Bose Road flyover approach → Lower Circular Road → back to the gate.",
    timed: true,
    receives: ["Event T-shirt", "Race bib with timing chip", "Finisher medal", "E-certificate with chip time", "Hydration on course", "Refreshments at the finish"],
    awards: ["Top 3 men and top 3 women — trophy and winner’s medal", "Age-group podiums", "Fastest school entrant"],
    rules: [
      "Chip time decides all results. Start where your pen is assigned.",
      "Cutting the course at any point means disqualification.",
      "Bibs are personal and non-transferable.",
      "Retire at a marshal point if you feel unwell — do not step off the course unseen.",
    ],
    requirements: ["Bib pinned to the front", "Photo ID at bib collection", "Guardian consent form if under 18", "Running shoes"],
    provisional: true,
  },
  {
    slug: "10k",
    distance: "10 KM",
    name: "Competitive Run",
    summary: "The timed race. Club runners, college athletes and anyone chasing a personal best over a flat, closed city course.",
    fee: "₹900",
    feeGroup: "₹800 per head for contingents of ten or more",
    eligibility: "Runners aged 16 and above on race day, with a declaration of fitness at registration.",
    minAge: "16 years",
    ageNote: "Age-group categories apply, for men and women separately. Masters starts at 60.",
    flagOff: "5:30 AM",
    cutoff: "100 minutes",
    route: "Two laps of the city loop — Park Street, Chowringhee, Maidan edge, Cathedral Road and back.",
    timed: true,
    receives: ["Event T-shirt", "Race bib with timing chip", "Finisher medal", "E-certificate with chip time", "Hydration at six points", "Refreshments at the finish"],
    awards: ["Cash prize, trophy and winner’s medal for the top 3 men and top 3 women", "Age-group podiums", "Fastest Xaverian, men and women"],
    rules: [
      "Chip time decides all results, and the timing mat at the start is the only valid start.",
      "Pacers run to published times and wear marked bibs — following one is allowed, drafting off a vehicle is not.",
      "Runners still on course at the cutoff are moved to the footpath and recorded as a finish outside time.",
      "Any runner refusing medical assistance when directed by the race doctor is withdrawn.",
    ],
    requirements: ["Bib pinned to the front", "Photo ID at bib collection", "Fitness declaration signed at registration", "Running shoes", "Report by 4:45 AM"],
    provisional: true,
  },
];

/* -------------------------- Route map -------------------------- */

export const routeNote =
  "Course maps below are indicative. Final routes are set with Kolkata Traffic Police and published here once the road closure order is issued.";

export const routeFacilities = [
  { name: "Hydration", note: "Six points on the 10 KM, three on the 5 KM, one on the 3 KM", key: "water" },
  { name: "Medical", note: "Three stations plus two roving ambulances and cycle medics", key: "medical" },
  { name: "Toilets", note: "At the start area, the halfway point and the finish", key: "toilet" },
  { name: "Support", note: "Marshal posts at every junction, sweep vehicle behind the last runner", key: "support" },
];

export type RouteStop = { km: string; name: string; facilities: string[]; note?: string };

export const routeMaps: { slug: string; distance: string; name: string; start: string; finish: string; elevation: string; landmarks: string[]; stops: RouteStop[] }[] = [
  {
    slug: "3k",
    distance: "3 KM",
    name: "Fun Run",
    start: "College gate, 30 Mother Teresa Sarani",
    finish: "College gate",
    elevation: "Flat throughout. No gradient worth the name.",
    landmarks: ["St. Xavier’s College gate", "Park Street crossing", "Camac Street turn", "Return leg on Park Street"],
    stops: [
      { km: "0.0", name: "Start — college gate", facilities: ["toilet", "medical", "support"] },
      { km: "1.5", name: "Camac Street turnaround", facilities: ["water", "support"], note: "The only turn on the course — marshalled on both sides." },
      { km: "3.0", name: "Finish — college gate", facilities: ["water", "medical", "toilet", "support"] },
    ],
  },
  {
    slug: "5k",
    distance: "5 KM",
    name: "Challenge Run",
    start: "College gate, 30 Mother Teresa Sarani",
    finish: "College gate",
    elevation: "Flat, with one short rise on the flyover approach at 3 KM.",
    landmarks: ["College gate", "Park Street", "AJC Bose Road approach", "Lower Circular Road", "Return on Park Street"],
    stops: [
      { km: "0.0", name: "Start — college gate", facilities: ["toilet", "medical", "support"] },
      { km: "1.8", name: "Park Street east", facilities: ["water", "support"] },
      { km: "3.2", name: "Flyover approach", facilities: ["water", "medical", "support"], note: "The one rise on the course. Medics posted at the top." },
      { km: "4.4", name: "Lower Circular Road", facilities: ["water", "support"] },
      { km: "5.0", name: "Finish — college gate", facilities: ["water", "medical", "toilet", "support"] },
    ],
  },
  {
    slug: "10k",
    distance: "10 KM",
    name: "Competitive Run",
    start: "College gate, 30 Mother Teresa Sarani",
    finish: "College gate",
    elevation: "Flat. Total gain under 20 metres across both laps.",
    landmarks: ["College gate", "Chowringhee", "Maidan edge", "Cathedral Road", "Victoria Memorial approach", "Park Street"],
    stops: [
      { km: "0.0", name: "Start — college gate", facilities: ["toilet", "medical", "support"] },
      { km: "2.0", name: "Chowringhee", facilities: ["water", "support"] },
      { km: "3.5", name: "Maidan edge", facilities: ["water", "medical", "support"] },
      { km: "5.0", name: "Lap point — college gate", facilities: ["water", "toilet", "medical", "support"], note: "Split timing mat. Lap one closes here." },
      { km: "7.0", name: "Cathedral Road", facilities: ["water", "support"] },
      { km: "8.5", name: "Victoria approach", facilities: ["water", "medical", "support"] },
      { km: "10.0", name: "Finish — college gate", facilities: ["water", "medical", "toilet", "support"] },
    ],
  },
];

/* ------------------------ Registration ------------------------ */

export const regWindows = [
  { name: "Early entry", window: "Opens 1 November 2026", note: "Lowest fee, first pick of T-shirt sizes", state: "open" },
  { name: "Standard entry", window: "1 December 2026 – 31 January 2027", note: "Full fee, sizes subject to stock", state: "next" },
  { name: "Late entry", window: "1 – 7 February 2027", note: "Fee plus ₹100, no size guarantee", state: "last" },
  { name: "Entries close", window: "7 February 2027, 11:59 PM", note: "No entries on race day, no exceptions", state: "closed" },
];

export const regTypes = [
  {
    name: "Individual",
    who: "One runner, one bib",
    how: "Register online, pay by card, UPI or net banking, and collect your bib on either of the two collection days.",
    points: ["Instant digital confirmation", "Choose your T-shirt size at checkout", "Bib number issued a week before race day"],
  },
  {
    name: "Group",
    who: "Ten or more runners, any mix of distances",
    how: "One coordinator registers the whole group, pays once, and collects all bibs together in a single visit.",
    points: ["Discounted fee per head", "Bulk bib collection with one authorisation letter", "Eligible for the Largest Contingent award"],
  },
  {
    name: "Corporate & institutional",
    who: "Companies, schools and colleges",
    how: "Write to the team for a contingent form, an invoice in the organisation’s name and a dedicated collection slot.",
    points: ["Invoice and GST details on request", "Organisation name on the contingent board", "Optional branded pen at the start area"],
  },
];

export const paymentInfo = [
  "Online payment by UPI, debit or credit card and net banking, through the registration gateway.",
  "Corporate and institutional entries may pay by Account Payee cheque in favour of “St. Xavier’s College”.",
  "Your registration is confirmed only when the payment gateway returns a success receipt — keep it until bib collection.",
  "All amounts are inclusive of gateway charges. No cash is collected at any point.",
];

export const terms = [
  "Runners enter at their own risk and declare themselves medically fit to run the distance entered.",
  "The organisers may stop, delay or reroute the race for weather, security or civic reasons, and will announce any such decision publicly.",
  "Bibs are personal. Running on another runner’s bib disqualifies both entries and voids the timing result.",
  "Photographs and video taken on course may be used by the organisers in event coverage and future promotion.",
  "The decision of the Organising Committee on results, categories and disqualifications is final.",
];

export const refundPolicy = {
  head: "If you can’t run",
  body: "Registration fees are non-refundable and non-transferable. The money is committed to race kit, timing, medical cover and permissions well before race day, most of it spent whether you start or not. If the organisers cancel the event outright, the full fee is returned to the account it came from within thirty working days.",
  provisional: true,
};

/* -------------------------- Event day -------------------------- */

export const timeline = [
  { time: "4:15 AM", head: "Gates open", body: "Start area, bag counter and toilets open. Come in through the Mother Teresa Sarani gate only.", tag: "Everyone" },
  { time: "4:45 AM", head: "10 KM reporting closes", body: "Be inside your pen. Pens are assigned by expected finish time and printed on your bib.", tag: "10 KM" },
  { time: "5:05 AM", head: "Warm-up", body: "Led warm-up at the start area — fifteen minutes, worth doing even if you never warm up.", tag: "10 KM" },
  { time: "5:30 AM", head: "10 KM flag-off", body: "Chip timing starts at the mat, not the gun. Cross it at your own pace.", tag: "10 KM" },
  { time: "6:15 AM", head: "5 KM flag-off", body: "Second wave away. Reporting for this wave closes at 5:50 AM.", tag: "5 KM" },
  { time: "7:00 AM", head: "3 KM flag-off", body: "The big, slow, cheerful one. Families and school groups start at the back.", tag: "3 KM" },
  { time: "7:10 AM", head: "First 10 KM finishers", body: "Finish gantry live from the first runner to the last. Medal, water and a banana as you come through.", tag: "All" },
  { time: "8:30 AM", head: "Course closes", body: "Sweep vehicle behind the last runner. Roads reopen behind it, lane by lane.", tag: "All" },
  { time: "9:00 AM", head: "Prize distribution", body: "Podiums, age groups and the special awards, on the stage beside the finish.", tag: "All" },
  { time: "10:00 AM", head: "Site clear", body: "Volunteers finish the sweep. The road should look like nothing happened.", tag: "Crew" },
];

export const raceDayNotes = [
  { head: "Hydration", body: "Water and electrolytes at every marked point, in steel or paper cups. Slow to a walk through the station — it keeps the floor dry and the queue moving." },
  { head: "Medical", body: "Three static stations, two ambulances and cycle medics on the loop. Raise an arm or stop at a marshal post; do not leave the course unseen." },
  { head: "At the finish", body: "Chip is read at the mat, medal goes on at the gantry, then refreshments and the results board under the marquee." },
  { head: "Certificates", body: "E-certificates go live against your bib number the same evening. Nothing to collect in person." },
];

/* ---------------------- Participant guide ---------------------- */

export const bibInfo = [
  "Your bib carries your number, your distance, your pen and your timing chip. It is your entry, your result and your medical record on the day.",
  "Pin it to the front of your shirt, flat and unfolded, all four corners. A folded bib does not read at the mat.",
  "Write your emergency contact and any medical condition on the reverse. The medical team looks there first.",
];

export const bring = ["Race bib, already pinned", "Photo ID", "Guardian consent form, if under 18", "A filled water bottle for before the start", "Cash or a phone for the journey home"];
export const wear = ["Running shoes you have already run in", "Light, breathable clothing — February mornings here are cool at five and warm by seven", "A thin layer you can hand to the bag counter", "Sunscreen if you expect to be out past seven"];
export const leaveHome = ["Valuables and jewellery", "Glass bottles", "Pets", "Bicycles, skates and scooters", "Single-use plastic of any kind"];

export const checklist = [
  "Bib pinned the night before",
  "Emergency contact written on the back",
  "Kit laid out, shoes by the door",
  "Alarm for 3:30 AM, and a second alarm",
  "Travel plan fixed — roads close early",
  "Breakfast light, two hours before the flag-off",
  "Bag packed for the counter, valuables left at home",
];

export const etiquette = [
  { do: "Start in your assigned pen", dont: "Push forward to a faster pen for the photo" },
  { do: "Overtake on the right, and look before you move", dont: "Cut across the lane without checking" },
  { do: "Move to the side before you stop or walk", dont: "Stop dead in the middle of the road" },
  { do: "Drop cups in the bins at the station", dont: "Throw a cup on the road ten metres later" },
  { do: "Call a marshal if someone is in trouble", dont: "Assume someone behind you will handle it" },
  { do: "Thank the volunteers — they got up before you did", dont: "Argue with a marshal on the course" },
];

export const hydrationGuidance = [
  "Drink normally the day before. Loading up on water an hour before the start does more harm than good.",
  "Take something at every station on the 10 KM, even a mouthful. Waiting until you feel thirsty is already late.",
  "Electrolytes over plain water if you are out past forty-five minutes.",
  "Walk through the station. Drinking at speed puts most of the cup on your shirt.",
];

export const safety = [
  "Do not run if you are ill, feverish or recovering from an injury. The race comes round again.",
  "If you feel dizzy, chest-tight or unusually breathless, stop and raise an arm. A marshal will reach you.",
  "Headphones are discouraged on all distances. You cannot hear an ambulance behind you.",
  "Cutting the course, crossing a barricade or entering a live traffic lane means immediate withdrawal.",
];

export const transport = [
  { head: "Metro", body: "Park Street station is a four-minute walk from the start. First trains run early on race morning — check timings the week before." },
  { head: "Road closures", body: "Roads around the course close from 3:30 AM. Anything dropping you off must approach from the east and stop short of the barricades." },
  { head: "Parking", body: "Very limited and not reserved for runners. Park further out and walk in, or take the Metro. Designated bays, where available, are marked on the route map.", provisional: true },
  { head: "Getting home", body: "Roads reopen lane by lane behind the sweep vehicle from about 8:30 AM. Expect the area to stay slow until ten." },
];

export const facilitiesGuide = [
  { head: "Bag drop", body: "Marshalled counter beside the start area, open from gates until an hour after the last finisher. Tag your bag with your bib number. Staffed, but not insured — leave valuables at home." },
  { head: "Changing", body: "Changing rooms and toilets inside the campus, signposted from the start area. Showers are not available." },
  { head: "Water before the start", body: "Refill station at the start area. Bring a bottle and fill it — there are no sealed bottles anywhere on site." },
];

export const emergencyOnDay = [
  { name: "Race control", detail: "Marquee beside the finish gantry, staffed from 4:00 AM" },
  { name: "Medical tent", detail: "Adjacent to race control, doctor on duty throughout" },
  { name: "Lost and found", detail: "Bag counter, until an hour after the last finisher" },
];

/* --------------------------- Gallery --------------------------- */

export type Album = { title: string; year: string; count: number; blurb: string; comingSoon?: boolean };

export const albums: Album[] = [
  { title: "Race day", year: "2026", count: 48, blurb: "Flag-off at first light, the gantry, and the road full of people who normally have to dodge cars on it." },
  { title: "Runners", year: "2026", count: 62, blurb: "Club runners at the front, school groups in the middle, and a lot of families at the back taking their time." },
  { title: "Volunteers", year: "2026", count: 35, blurb: "The 220 students who stood on junctions in the dark so that everyone else could run down the middle of Park Street." },
  { title: "Behind the scenes", year: "2026", count: 27, blurb: "Bib counting, barricade runs, the 3 AM briefing and the sweep team clearing the course." },
  { title: "Awards", year: "2026", count: 24, blurb: "Podiums, age-group winners, and the first Greenest Footprint award." },
  { title: "Campus", year: "2026", count: 18, blurb: "The gate, the quadrangle and the start pen on a morning the college was louder than usual." },
  { title: "Xavathon 2027", year: "2027", count: 0, blurb: "Photographs go up here through race week and the days after.", comingSoon: true },
];