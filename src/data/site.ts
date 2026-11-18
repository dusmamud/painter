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
  { label: 'About Us', href: '/about/' },
  { label: 'Projects', href: '/projects/' },
  { label: 'Pricing', href: '/pricing/' },
  { label: 'Contact', href: '/contact/' },
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
    title: 'Sunny Family Living Room',
    category: 'Interior',
    location: 'Paintville, CA',
    image: '/images/service-interior.jpg',
    blurb: 'A warm mustard refresh with crisp white trim that turned a dark living room into the brightest room in the house.',
  },
  {
    title: 'Modern Villa Exterior',
    category: 'Exterior',
    location: 'Maplewood, CA',
    image: '/images/service-exterior.jpg',
    blurb: 'Full exterior repaint in weather-resistant white — siding, trim and garage doors, finished in six days.',
  },
  {
    title: 'Innovo Tower Offices',
    category: 'Commercial',
    location: 'Downtown, CA',
    image: '/images/service-commercial.jpg',
    blurb: 'Three floors of office space repainted over two weekends, with zero downtime for the client\'s team.',
  },
  {
    title: 'Calm Sage Bedroom',
    category: 'Interior',
    location: 'Paintville, CA',
    image: '/images/project-bedroom.jpg',
    blurb: 'A restful sage accent wall and soft neutrals, painted with zero-VOC paint for a healthier night\'s sleep.',
  },
  {
    title: 'Bright Kitchen & Dining',
    category: 'Interior',
    location: 'Oakdale, CA',
    image: '/images/project-kitchen.jpg',
    blurb: 'Cream walls and freshly painted cabinets that made a compact kitchen feel twice as big.',
  },
  {
    title: 'Navy & Mustard Workspace',
    category: 'Commercial',
    location: 'Riverside, CA',
    image: '/images/project-office.jpg',
    blurb: 'A bold navy feature wall and brand-matched accents for a creative studio that wanted to stand out.',
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
