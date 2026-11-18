// MOCK DATA — demo placeholders for the client presentation.
// NOTHING here is real yet. Replace every value with real details
// before launch: team names, email, phone, social handles, prices,
// testimonials and project stories are all invented for the demo.

export const site = {
  name: 'Painter',
  tagline: 'We Paint Spaces. You Live Better.',
  url: 'https://painter-static.pages.dev',
  description:
    'Painter is a professional painting company — interior, exterior and commercial painting with quality finishes, vibrant colors and flawless results.',
  year: 2026,
};

export const contact = {
  email: 'hello@painter.com',
  phoneDisplay: '+1 234 567 8900',
  phoneHref: 'tel:+12345678900',
  hours: 'Mon–Sat, 8am–6pm',
  location: '123 Color Street, Paintville, CA 12345',
  locationShort: 'Paintville, CA',
};

export const socials = [
  { label: 'Facebook', href: '#' },
  { label: 'Instagram', href: '#' },
  { label: 'X', href: '#' },
  { label: 'LinkedIn', href: '#' },
];

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services/' },
  { label: 'Projects', href: '/projects/' },
  { label: 'Pricing', href: '/pricing/' },
  { label: 'Reviews', href: '/reviews/' },
  { label: 'Contact', href: '/contact/' },
];

export const moreLinks = [
  { label: 'About Us', href: '/about/' },
  { label: 'Our Process', href: '/process/' },
  { label: 'Color Visualizer', href: '/colors/' },
  { label: 'Service Areas', href: '/areas/' },
  { label: 'Our Guarantee', href: '/guarantee/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'FAQ', href: '/faq/' },
  { label: 'Book a Consultation', href: '/book/' },
];

export const services = [
  {
    slug: 'interior-painting',
    title: 'Interior Painting',
    short: 'Refresh your interiors with smooth, clean, and beautiful finishes.',
    description:
      'From a single accent wall to a whole-home refresh, our interior painting brings new life to the rooms you live in. We protect your floors and furniture, prep every surface properly, and leave crisp lines and a flawless, even finish — with low-odour, eco-friendly paints that are safe for kids and pets.',
    image: '/images/service-interior.jpg',
    icon: 'roller',
    priceFrom: 'From $249 / room',
    includes: [
      'Free color consultation',
      'Furniture & floor protection',
      'Wall repair, sanding & priming',
      'Two coats of premium paint',
      'Crisp lines, zero drips',
      'Same-day cleanup & walkthrough',
    ],
  },
  {
    slug: 'exterior-painting',
    title: 'Exterior Painting',
    short: 'Weather-resistant paints that protect and enhance exteriors.',
    description:
      'Your home\'s exterior takes a beating from sun, rain and wind. We use weather-resistant, fade-proof coatings and meticulous prep — pressure washing, scraping, caulking and priming — so the finish protects your home and keeps its curb appeal for years.',
    image: '/images/service-exterior.jpg',
    icon: 'home',
    priceFrom: 'From $1,499 / home',
    includes: [
      'Pressure washing & scraping',
      'Caulking, sealing & priming',
      'Weather-resistant coatings',
      'Siding, trim, doors & decks',
      'Ladder & lift work included',
      '5-year workmanship warranty',
    ],
  },
  {
    slug: 'commercial-painting',
    title: 'Commercial Painting',
    short: 'Professional solutions for offices, shops, and large spaces.',
    description:
      'Offices, retail shops, restaurants and warehouses — we paint commercial spaces with minimal disruption to your business. Flexible scheduling, including nights and weekends, a dedicated project manager, and a finish that makes the right impression on every customer who walks in.',
    image: '/images/service-commercial.jpg',
    icon: 'building',
    priceFrom: 'Custom quote',
    includes: [
      'After-hours & weekend work',
      'Dedicated project manager',
      'Minimal business disruption',
      'High-durability coatings',
      'Safety-compliant crews',
      'Scheduled maintenance plans',
    ],
  },
  {
    slug: 'cabinet-painting',
    title: 'Cabinet Painting',
    short: 'Factory-smooth cabinet finishes at a fraction of replacement cost.',
    description:
      'New cabinets cost a fortune — a professional cabinet repaint gives you the same transformation for far less. We degrease, sand, prime and spray every door and drawer for a hard-wearing, factory-smooth finish in any color, with your kitchen usable again in days, not weeks.',
    image: '/images/service-cabinet.jpg',
    icon: 'brush',
    priceFrom: 'From $899 / kitchen',
    includes: [
      'Degrease, sand & prime',
      'Sprayed factory-smooth finish',
      'Hard-wearing enamel coatings',
      'New handles & soft-close fitting',
      'Doors sprayed off-site, zero dust',
      '5-year workmanship warranty',
    ],
  },
  {
    slug: 'color-consultation',
    title: 'Color Consultation',
    short: 'Expert guidance to find the palette your space deserves.',
    description:
      'Choosing a color is the hardest part of any paint project. Our consultants study your light, furniture and style, then build a palette that feels right — with large swatches tested on your own walls, so there are no surprises after the first coat.',
    image: '/images/service-consultation.jpg',
    icon: 'palette',
    priceFrom: 'Free with any project',
    includes: [
      'In-home color assessment',
      'Curated palette & mood board',
      'Large wall swatch tests',
      'Finish & sheen guidance',
      'Whole-home color flow plan',
      'Digital preview of your rooms',
    ],
  },
];

export const features = [
  {
    title: 'On-Time Guarantee',
    text: 'We value your time & schedule.',
    icon: 'clock',
  },
  {
    title: 'Transparent Pricing',
    text: 'No hidden costs. Ever.',
    icon: 'tag',
  },
  {
    title: 'Premium Quality',
    text: 'Top-grade paints for lasting beauty.',
    icon: 'sparkles',
  },
  {
    title: '100% Satisfaction',
    text: "We don't finish until you're happy.",
    icon: 'heart',
  },
];

export const stats = [
  { value: 500, suffix: '+', label: 'Projects Completed', icon: 'users' },
  { value: 98, suffix: '%', label: 'Happy Customers', icon: 'smile' },
  { value: 10, suffix: '+', label: 'Years of Experience', icon: 'trophy' },
  { value: 25, suffix: '+', label: 'Cities Served', icon: 'pin' },
];

export const whyChooseUs = [
  'Skilled & Experienced Painters',
  'High-Quality & Eco-Friendly Paints',
  'Neat, Clean & Hassle-Free Service',
  'On-Time Project Completion',
];

export const processSteps = [
  {
    title: 'Free Consultation & Quote',
    text: 'Tell us about your space. We visit, measure, discuss colors and give you a clear, fixed quote — no obligation, no hidden costs.',
  },
  {
    title: 'Color & Prep',
    text: 'Pick your palette with our guidance. Then we protect floors and furniture, repair, sand and prime every surface.',
  },
  {
    title: 'Painting Day',
    text: 'Our crew paints with premium, eco-friendly paints — neat, careful, and on schedule, with daily progress updates.',
  },
  {
    title: 'Final Walkthrough',
    text: 'We inspect every wall together, touch up anything that is not perfect, clean up completely, and hand over your new space.',
  },
];

export const projects = [
  {
    slug: 'sunny-family-living-room',
    title: 'Sunny Family Living Room',
    category: 'Interior',
    location: 'Paintville, CA',
    image: '/images/service-interior.jpg',
    blurb: 'A warm mustard refresh with crisp white trim that turned a dark living room into the brightest room in the house.',
    duration: '3 days',
    palette: [
      { name: 'Sunshine', hex: '#FFC61A' },
      { name: 'Warm White', hex: '#FAF6EE' },
      { name: 'Soft Charcoal', hex: '#3A3F44' },
    ],
    challenge:
      'A north-facing living room that always felt dark and cold, with scuffed builder-grade paint and yellowing trim the family had lived with for eight years.',
    solution:
      'We repaired the wall dings, sanded and primed everything, then rolled two coats of warm mustard on the feature wall with crisp white trim. Low-odour paint meant the family slept at home every night.',
    result: 'The room now reads twice as bright, and the homeowners say it is where everyone gathers — even on grey days.',
    scope: ['Feature wall + 3 walls', 'Trim, skirting & doors', 'Wall repairs & priming', 'Zero-VOC premium paint'],
  },
  {
    slug: 'modern-villa-exterior',
    title: 'Modern Villa Exterior',
    category: 'Exterior',
    location: 'Maplewood, CA',
    image: '/images/service-exterior.jpg',
    blurb: 'Full exterior repaint in weather-resistant white — siding, trim and garage doors, finished in six days.',
    duration: '6 days',
    palette: [
      { name: 'Cloud White', hex: '#F2F3F0' },
      { name: 'Slate Trim', hex: '#4A5560' },
      { name: 'Door Navy', hex: '#1F3A5F' },
    ],
    challenge:
      'Peeling paint, sun-faded siding and hairline cracks around every window — the villa looked ten years older than it was, and the owners worried about water damage.',
    solution:
      'Full pressure wash, scraping and caulking, a bonding primer, then two coats of weather-resistant acrylic. Siding, trim, shutters and garage doors, all masked and sprayed for an even factory finish.',
    result: 'Curb appeal transformed in under a week — the owners\' neighbours asked for our number before the scaffolding came down.',
    scope: ['Siding & fascia', 'Trim, shutters & doors', 'Caulking & crack repair', 'Weather-resistant coating'],
  },
  {
    slug: 'innovo-tower-offices',
    title: 'Innovo Tower Offices',
    category: 'Commercial',
    location: 'Downtown, CA',
    image: '/images/service-commercial.jpg',
    blurb: 'Three floors of office space repainted over two weekends, with zero downtime for the client\'s team.',
    duration: '2 weekends',
    palette: [
      { name: 'Office White', hex: '#F7F7F5' },
      { name: 'Brand Navy', hex: '#1F3A5F' },
      { name: 'Accent Sun', hex: '#FFC61A' },
    ],
    challenge:
      'A 40-person office that could not close on weekdays. The old paint was marked and dated, and the brand colors were nowhere to be seen.',
    solution:
      'A dedicated project manager planned two weekend shifts: Friday 6pm to Sunday 6pm, with nightly handovers. Durable washable coatings in meeting rooms, brand-matched feature walls in the lobby and breakout areas.',
    result: 'Staff walked into a new office on Monday morning — twice. Zero lost work hours, and the client signed a yearly maintenance plan.',
    scope: ['3 floors, 40+ rooms', 'Weekend-only schedule', 'Brand-matched feature walls', 'Washable commercial coatings'],
  },
  {
    slug: 'calm-sage-bedroom',
    title: 'Calm Sage Bedroom',
    category: 'Interior',
    location: 'Paintville, CA',
    image: '/images/project-bedroom.jpg',
    blurb: 'A restful sage accent wall and soft neutrals, painted with zero-VOC paint for a healthier night\'s sleep.',
    duration: '2 days',
    palette: [
      { name: 'Calm Sage', hex: '#A8B8A0' },
      { name: 'Linen', hex: '#EFE9DC' },
      { name: 'Warm White', hex: '#FAF6EE' },
    ],
    challenge:
      'A bedroom that doubled as a home office and never felt restful, with a bold red wall the previous owners had left behind.',
    solution:
      'Two coats of stain-blocking primer tamed the red, then a sage accent wall with soft linen neutrals. Zero-VOC paint throughout, and the room was slept in the same night.',
    result: 'The owners report better sleep within the first week — and the sage wall is now the backdrop of every video call.',
    scope: ['Accent wall + 3 walls', 'Stain-blocking primer', 'Zero-VOC paint', 'Ceiling refresh'],
  },
  {
    slug: 'bright-kitchen-dining',
    title: 'Bright Kitchen & Dining',
    category: 'Interior',
    location: 'Oakdale, CA',
    image: '/images/project-kitchen.jpg',
    blurb: 'Cream walls and freshly painted cabinets that made a compact kitchen feel twice as big.',
    duration: '4 days',
    palette: [
      { name: 'Cream', hex: '#F5EFE0' },
      { name: 'Cabinet Sage', hex: '#9DB09A' },
      { name: 'Brass', hex: '#C9A227' },
    ],
    challenge:
      'A compact 1990s kitchen with orange-oak cabinets and cream walls gone grey. A full remodel was quoted at $28,000 the family did not want to spend.',
    solution:
      'Cabinets were degreased, sanded, primed and sprayed off-site in soft sage; walls got warm cream in a wipeable satin. New brass handles finished the look for a fraction of remodel cost.',
    result: 'The kitchen feels twice as big and ten years younger — for under a tenth of the remodel quote.',
    scope: ['Cabinet spray finish', 'Walls in wipeable satin', 'New hardware fitted', 'Backsplash touch-ups'],
  },
  {
    slug: 'navy-mustard-workspace',
    title: 'Navy & Mustard Workspace',
    category: 'Commercial',
    location: 'Riverside, CA',
    image: '/images/project-office.jpg',
    blurb: 'A bold navy feature wall and brand-matched accents for a creative studio that wanted to stand out.',
    duration: '3 days',
    palette: [
      { name: 'Studio Navy', hex: '#1F3A5F' },
      { name: 'Mustard Pop', hex: '#E0A800' },
      { name: 'Gallery White', hex: '#F7F7F5' },
    ],
    challenge:
      'A creative studio in a plain white box — clients walked in and saw nothing of the studio\'s personality.',
    solution:
      'A deep navy feature wall with razor-sharp edges, mustard accent zones, and gallery-white everywhere else. Painted after hours across three evenings so the studio never closed.',
    result: 'The studio now photographs beautifully for client pitches — and two walk-in clients cited the space itself as the reason they signed.',
    scope: ['Feature wall & zones', 'After-hours schedule', 'Brand-matched colors', 'Touch-up kit included'],
  },
];

export const pricingPlans = [
  {
    name: 'Room Refresh',
    price: '$249',
    unit: 'per room, from',
    blurb: 'One room, beautifully repainted — perfect for a quick refresh.',
    features: [
      'Up to 12 × 12 ft room',
      'Two coats of premium paint',
      'Basic wall prep & priming',
      'Furniture & floor protection',
      '1-day completion',
    ],
    featured: false,
  },
  {
    name: 'Whole Home',
    price: '$1,899',
    unit: 'from',
    blurb: 'Every room, one flawless finish — our most popular package.',
    features: [
      'All rooms & hallways',
      'Free color consultation',
      'Full prep, repair & priming',
      'Premium eco-friendly paint',
      '5-year workmanship warranty',
      'Dedicated project manager',
    ],
    featured: true,
  },
  {
    name: 'Commercial',
    price: 'Custom',
    unit: 'tailored quote',
    blurb: 'Offices, shops and large spaces — scheduled around your business.',
    features: [
      'After-hours & weekend work',
      'High-durability coatings',
      'Minimal disruption plan',
      'Safety-compliant crews',
      'Maintenance plans available',
    ],
    featured: false,
  },
];

export const testimonials = [
  {
    name: 'Sarah Mitchell',
    role: 'Homeowner, Paintville',
    avatar: '/images/avatar-1.jpg',
    quote:
      'They repainted our whole downstairs in three days and it looks incredible. Neat, polite, and the lines are razor sharp. I keep finding excuses to show people the walls.',
  },
  {
    name: 'David Okafor',
    role: 'Homeowner, Maplewood',
    avatar: '/images/avatar-2.jpg',
    quote:
      'The exterior of our house went from tired to brand new. The crew prepped everything properly and the finish has survived two winters without a single peel.',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Café Owner, Riverside',
    avatar: '/images/avatar-3.jpg',
    quote:
      'They painted our café overnight so we never closed a single day. Customers comment on the colors constantly — best money we have spent on the business.',
  },
  {
    name: 'James Carter',
    role: 'Property Manager, Oakdale',
    avatar: '/images/avatar-4.jpg',
    quote:
      'We use Painter for every turnover now. Fixed quotes, on time, every time, and the units rent faster with a fresh coat. Genuinely hassle-free.',
  },
  {
    name: 'Rachel Kim',
    role: 'Homeowner, Brookfield',
    avatar: '/images/avatar-5.jpg',
    quote:
      'Our kitchen cabinets went from dated oak to soft sage and I still cannot believe it is the same kitchen. The spray finish is flawless — guests think we replaced them.',
  },
  {
    name: 'Tom Alvarez',
    role: 'Restaurant Owner, Cedar Falls',
    avatar: '',
    initials: 'TA',
    quote:
      'They repainted our dining room between lunch and dinner service, twice, and not one guest ever saw a drop cloth. That is professionalism you cannot fake.',
  },
];

export const faqs = [
  {
    q: 'How much does painting cost?',
    a: 'Every project is different, so we give a free, fixed quote after a quick visit or video walkthrough. As a guide, a single room starts at $249 and a whole home starts at $1,899. The quote you approve is the price you pay — no hidden costs.',
  },
  {
    q: 'How long does a project take?',
    a: 'A single room is usually done in a day. A whole home takes 3–5 days, and exteriors 4–7 days depending on size and weather. Your quote includes a schedule, and we stick to it.',
  },
  {
    q: 'Do I need to move my furniture?',
    a: 'No. We move and cover furniture and floors before we start, and put everything back when we finish. You just need to clear small fragile items and wall hangings.',
  },
  {
    q: 'Are your paints safe for kids and pets?',
    a: 'Yes. We use premium low-odour and zero-VOC paints as standard, and eco-friendly options are available on every project. Rooms are safe to use the same evening.',
  },
  {
    q: 'Do you offer a warranty?',
    a: 'Every project includes a 5-year workmanship warranty covering peeling, blistering and flaking. If anything goes wrong, we come back and fix it free.',
  },
  {
    q: 'Which areas do you serve?',
    a: 'We are based in Paintville, CA and serve 25+ cities in the surrounding area. If you are further away, ask — for larger projects we regularly travel.',
  },
  {
    q: 'What paint brands do you use?',
    a: 'We work with premium lines from the major manufacturers and always recommend low-odour, zero-VOC options for interiors. Your quote names the exact products, so you know what is going on your walls — no mystery paint.',
  },
  {
    q: 'Do you offer payment plans?',
    a: 'Yes. Larger projects can be split into a deposit, a mid-project payment and a final payment on walkthrough approval. We accept cards, bank transfer and checks. No payment is due until you approve the finished work.',
  },
  {
    q: 'How should I prepare for painting day?',
    a: 'Just clear small fragile items, take down wall hangings, and make sure we can park close by. We handle everything else: moving and covering furniture, protecting floors, and putting it all back when we finish.',
  },
  {
    q: 'Matte, eggshell or satin — which finish should I choose?',
    a: 'Matte hides wall flaws and looks velvety in bedrooms and living rooms. Eggshell adds a soft glow and wipes clean — great for hallways and kids\' rooms. Satin is the toughest and best for kitchens, bathrooms and trim. Your color consultation covers this for every room.',
  },
];

export const team = [
  {
    name: 'Mike Turner',
    role: 'Founder & Master Painter',
    avatar: '/images/avatar-2.jpg',
    bio: 'Mike started painting at 17 and has led 500+ projects. He still inspects every job personally before handover.',
  },
  {
    name: 'Anna Collins',
    role: 'Color Consultant',
    avatar: '/images/avatar-1.jpg',
    bio: 'Anna has an eye for light and color. She has built palettes for more than 300 homes — and never repeated one.',
  },
  {
    name: 'Leo Martinez',
    role: 'Crew Lead, Exteriors',
    avatar: '/images/avatar-4.jpg',
    bio: 'Leo runs the exterior crews with military precision. Ladders, lifts, weather windows — he plans them all.',
  },
];

export const areas = [
  { town: 'Paintville', distance: 'Home base', jobs: 240, note: 'Our hometown — same-week visits, all services.' },
  { town: 'Maplewood', distance: '6 miles', jobs: 85, note: 'Exteriors and whole-home repaints are our most-booked jobs here.' },
  { town: 'Oakdale', distance: '9 miles', jobs: 64, note: 'Kitchen cabinets and rental turnovers, weekly crews.' },
  { town: 'Riverside', distance: '12 miles', jobs: 58, note: 'Cafés, studios and storefronts along the riverfront.' },
  { town: 'Brookfield', distance: '14 miles', jobs: 41, note: 'Family homes — bedrooms, nurseries and living rooms.' },
  { town: 'Cedar Falls', distance: '18 miles', jobs: 33, note: 'Restaurants and retail, painted after hours.' },
  { town: 'Sunnyvale', distance: '21 miles', jobs: 27, note: 'New-build touch-ups and first-home repaints.' },
  { town: 'Hillcrest', distance: '24 miles', jobs: 19, note: 'Larger projects and exteriors; free quotes still apply.' },
];

export const blogPosts = [
  {
    slug: 'paint-color-trends-2026',
    title: '7 Paint Color Trends That Will Define 2026',
    category: 'Color Trends',
    image: '/images/blog-color-trends.jpg',
    date: '2026-11-10',
    readTime: 6,
    author: 'Anna Collins',
    authorRole: 'Color Consultant',
    excerpt:
      'Warm terracottas, calming sages and one very bold navy — here is what homeowners are actually asking for this year, and how to use each trend without dating your home.',
    sections: [
      {
        heading: 'Warm is back — and it is staying',
        paragraphs: [
          'After a decade of cool greys, homeowners are choosing colors that feel like sunlight. Terracotta, warm mustard and honeyed neutrals lead every palette we build this year. They flatter wood floors, hide everyday marks, and make north-facing rooms feel warmer without touching the thermostat.',
          'The trick is balance: one warm hero wall, quiet neutrals around it. A whole house in terracotta overwhelms; one terracotta wall behind a sofa sings.',
        ],
      },
      {
        heading: 'Sage, but softer',
        paragraphs: [
          'Sage green remains the most-requested bedroom color we see, but the 2026 version is softer and greyer than the bold sages of a few years ago. It pairs beautifully with cream trim and brass, and it is forgiving in rooms with mixed light.',
          'If you love sage, test it on the wall you see first thing in the morning — that is the light you will live with.',
        ],
      },
      {
        heading: 'The one bold move worth making',
        paragraphs: [
          'Deep navy is the accent color of the year for studies, dining rooms and media walls. It makes art pop, hides TV glare, and photographs beautifully. Keep the ceiling white and the trim crisp, and navy reads expensive, never gloomy.',
          'Not sure where to start? Book a free color consultation — we bring large swatches and test them on your own walls, in your own light, before a single can is opened.',
        ],
      },
    ],
  },
  {
    slug: 'how-we-prep-walls',
    title: 'Why Prep Work Is 80% of a Perfect Paint Job',
    category: 'Process',
    image: '/images/blog-prep-guide.jpg',
    date: '2026-10-28',
    readTime: 5,
    author: 'Mike Turner',
    authorRole: 'Founder & Master Painter',
    excerpt:
      'Anyone can roll paint on a wall. The difference between a finish that lasts two years and one that lasts ten is everything that happens before the first coat.',
    sections: [
      {
        heading: 'What good prep actually includes',
        paragraphs: [
          'Every wall we paint gets the same treatment: a wash to remove dust and grease, a scrape of anything loose, filler for dings and hairline cracks, a full sand, a wipe-down, and a primer matched to the surface. Only then does color go on.',
          'Skip any of those steps and the paint will tell on you — peeling within a year, flashing where patches show through, or a finish that looks fine on day one and tired by month six.',
        ],
      },
      {
        heading: 'Why cheap quotes skip it',
        paragraphs: [
          'Prep is invisible in a finished photo, so it is the first thing a low quote cuts. That is why two quotes for the "same" job can differ by hundreds of dollars: one includes two days of prep, the other includes a quick wipe and a prayer.',
          'Our quotes list prep line by line. If another quote does not, ask what is included — the answer tells you everything about the finish you will get.',
        ],
      },
      {
        heading: 'What you can do before we arrive',
        paragraphs: [
          'Clear small fragile items and take down wall hangings. That is genuinely all. We move and cover the furniture, protect the floors, and put everything back. Your job is to pick the color — ours is everything else.',
        ],
      },
    ],
  },
  {
    slug: 'exterior-painting-season-guide',
    title: 'The Best Time of Year to Paint Your Home\'s Exterior',
    category: 'Exterior',
    image: '/images/service-exterior.jpg',
    date: '2026-10-12',
    readTime: 5,
    author: 'Leo Martinez',
    authorRole: 'Crew Lead, Exteriors',
    excerpt:
      'Paint in the wrong week and even the best coating can fail. Here is how temperature, humidity and sun decide your exterior schedule — and the booking window smart homeowners grab first.',
    sections: [
      {
        heading: 'The sweet spot',
        paragraphs: [
          'Most exterior coatings want air temperatures between 50°F and 85°F, humidity below 70%, and no rain for 24 hours after each coat. In our area that usually means late spring and early fall — mild days, cool nights, predictable skies.',
          'Summer works too, if crews chase the shade: we paint the east walls in the morning and the west walls in the afternoon, so no coat bakes in direct sun while it cures.',
        ],
      },
      {
        heading: 'What weather does to a rushed job',
        paragraphs: [
          'Paint applied before rain can wash, blister or lose adhesion. Paint applied in a heatwave skins over before it levels, leaving roller marks that never go away. A good crew watches the forecast like a farmer — and will tell you honestly when to wait a day.',
          'We build one weather buffer day into every exterior schedule. It costs nothing and it saves finishes.',
        ],
      },
      {
        heading: 'Book early, paint calmly',
        paragraphs: [
          'The best weeks book out first — usually 4–6 weeks ahead in spring. If your exterior is peeling now, get the quote done in winter and hold a spring slot. Your house (and your summer) will thank you.',
        ],
      },
    ],
  },
  {
    slug: 'cabinet-paint-vs-replace',
    title: 'Paint or Replace? The Honest Math on Kitchen Cabinets',
    category: 'Cabinets',
    image: '/images/service-cabinet.jpg',
    date: '2026-09-30',
    readTime: 7,
    author: 'Anna Collins',
    authorRole: 'Color Consultant',
    excerpt:
      'A new kitchen runs $20,000 and up. A professional cabinet repaint delivers the same "new kitchen" feeling for a tenth of that — if the boxes are sound. Here is how to decide.',
    sections: [
      {
        heading: 'When painting wins',
        paragraphs: [
          'If your cabinet boxes are solid, the layout works, and you like the door style, painting is the smart move. A sprayed enamel finish looks factory-new, lasts for years with normal use, and your kitchen is back in action within days.',
          'Our process: doors and drawers come off and are sprayed off-site for a dust-free finish, while boxes are finished in place. New handles and soft-close hinges complete the transformation.',
        ],
      },
      {
        heading: 'When replacement is right',
        paragraphs: [
          'Water-damaged boxes, warped doors, or a layout that fights you every day — paint cannot fix those. If the bones are bad, we will say so honestly and help you plan a replacement instead of selling you a repaint that disappoints.',
          'A good rule: if you would keep the kitchen exactly as it is but for the color, paint it. If you would move walls and plumbing anyway, replace it.',
        ],
      },
      {
        heading: 'The numbers',
        paragraphs: [
          'Typical cabinet repaint: $899–$2,400 depending on kitchen size. Typical replacement: $8,000–$25,000 before countertops. The repaint pays for itself the first time a guest asks who made your "new" kitchen.',
          'Curious what your kitchen would cost? Try the instant estimate on our quote page — it takes about a minute.',
        ],
      },
    ],
  },
];

export const palettes = [
  { name: 'Sunny Welcome', mood: 'Cheerful & bright', rooms: 'Living rooms & entryways', colors: ['#FFC61A', '#FFF6D6', '#FFFFFF', '#0C1526'] },
  { name: 'Calm Sage', mood: 'Restful & soft', rooms: 'Bedrooms & reading nooks', colors: ['#A8B8A0', '#E8EDE6', '#F5F1E8', '#3D4A3A'] },
  { name: 'Coastal Breeze', mood: 'Fresh & airy', rooms: 'Bathrooms & kitchens', colors: ['#7FB3C8', '#EAF3F6', '#FFFFFF', '#2F5D6E'] },
  { name: 'Warm Terracotta', mood: 'Earthy & rich', rooms: 'Dining rooms & dens', colors: ['#C96F4A', '#F3E2D8', '#FFF8F0', '#5A3A2E'] },
  { name: 'Bold Navy', mood: 'Dramatic & smart', rooms: 'Studies & media walls', colors: ['#1F3A5F', '#DCE5EF', '#FFC61A', '#0C1526'] },
  { name: 'Soft Blush', mood: 'Gentle & warm', rooms: 'Nurseries & bedrooms', colors: ['#E8B4B8', '#F9EDEF', '#FFFFFF', '#6E4A4E'] },
];

export const paintColors = [
  { name: 'Sunshine', hex: '#FFC61A' },
  { name: 'Terracotta', hex: '#C96F4A' },
  { name: 'Calm Sage', hex: '#A8B8A0' },
  { name: 'Deep Navy', hex: '#1F3A5F' },
  { name: 'Soft Blush', hex: '#E8B4B8' },
  { name: 'Sky Blue', hex: '#7FB3C8' },
  { name: 'Warm Cream', hex: '#F5EFE0' },
  { name: 'Charcoal', hex: '#3A3F44' },
  { name: 'Fresh Mint', hex: '#B8D4C0' },
  { name: 'Coral Pop', hex: '#F08070' },
  { name: 'Soft Lavender', hex: '#B8A9D9' },
  { name: 'Olive Grove', hex: '#8A8B5C' },
];

export const processDetail = [
  {
    title: 'Book a Free Visit',
    text: 'Call, message, or book online. We visit at a time that suits you, measure up, talk through colors and finishes, and leave you a fixed written quote — usually the same day.',
    details: ['Free, no-obligation quotes', 'Evening & weekend visits', 'Fixed price in writing'],
  },
  {
    title: 'Prep Like It Matters',
    text: 'The step cheap quotes skip. We wash, scrape, fill, sand and prime every surface, then mask and protect your floors, furniture and fixtures before a single drop of paint.',
    details: ['Wash, scrape & fill', 'Sand & prime', 'Floors & furniture protected'],
  },
  {
    title: 'Paint Day',
    text: 'Our uniformed crew paints with premium, low-odour paints — neat, careful, and on the schedule we promised. Most rooms are done in a day; whole homes in under a week.',
    details: ['Premium eco-friendly paints', 'Uniformed, insured crew', 'Daily progress updates'],
  },
  {
    title: 'Check In As We Go',
    text: 'You see the finish forming and can ask for tweaks while we are still on site — a shade deeper here, a line sharper there. No surprises at the end.',
    details: ['Walk the job with the crew lead', 'Same-day tweaks', 'Photos at each stage'],
  },
  {
    title: 'Walkthrough & Warranty',
    text: 'We inspect every wall together, touch up anything that is not perfect, clean up completely, and hand over your space with a 5-year workmanship warranty in writing.',
    details: ['Joint final inspection', 'Full clean-up & furniture back', '5-year warranty, in writing'],
  },
];

export const protectionList = [
  'Canvas drop cloths on all floors',
  'Furniture moved & wrapped',
  'Fixtures, switches & handles masked',
  'Daily vacuum & tidy-up',
  'Shoes covers indoors, always',
  'Pets & plants kept paint-free',
];

export const guarantees = [
  {
    icon: 'shield',
    title: '5-Year Workmanship Warranty',
    text: 'Peeling, blistering or flaking? We come back and fix it free — for five full years, in writing, on every project.',
  },
  {
    icon: 'check',
    title: 'Fixed Quotes, No Surprises',
    text: 'The price we quote is the price you pay. If we find something unexpected mid-job, we agree any change with you before doing it.',
  },
  {
    icon: 'clock',
    title: 'On-Time Arrival',
    text: 'We arrive when we say we will, and finish on the schedule in your quote — or we tell you the moment anything changes.',
  },
  {
    icon: 'heart',
    title: 'Color Love Guarantee',
    text: 'Hate the color once it is up? Within 30 days we repaint one wall in a new shade free — because the right color matters more than being right.',
  },
  {
    icon: 'sparkles',
    title: 'Clean-Up Promise',
    text: 'We leave every room cleaner than we found it: furniture back, floors vacuumed, rubbish gone. You just enjoy the new walls.',
  },
  {
    icon: 'users',
    title: 'Licensed & Insured Crew',
    text: 'Uniformed, background-checked painters, fully insured, with a named crew lead on every job. Your home is in safe hands.',
  },
];
