import { NavCategory, Review } from './types';

export const megaMenuData: NavCategory[] = [
  {
    id: 'living-room',
    name: 'Living Room',
    links: ['Sofas & Sectionals', 'Coffee Tables', 'TV Units', 'Lounge Chairs', 'Console Tables', 'Rugs'],
    featuredImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=800&auto=format&fit=crop',
    products: [
      { name: 'Milano Sectional Sofa', image: 'https://images.unsplash.com/photo-1540574163026-643ea20d25b5?q=80&w=400&auto=format&fit=crop' },
      { name: 'Venice Coffee Table', image: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=400&auto=format&fit=crop' },
      { name: 'Aura Lounge Chair', image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=400&auto=format&fit=crop' },
      { name: 'Stella TV Unit', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=400&auto=format&fit=crop' },
      { name: 'Lumina Console', image: 'https://images.unsplash.com/photo-1499933374294-4584851497cc?q=80&w=400&auto=format&fit=crop' },
      { name: 'Eclipse Rug', image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=400&auto=format&fit=crop' },
      { name: 'Oasis Sofa', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=400&auto=format&fit=crop' },
      { name: 'Cove Armchair', image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=400&auto=format&fit=crop' },
      { name: 'Zenith Side Table', image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?q=80&w=400&auto=format&fit=crop' },
      { name: 'Natura Planter', image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=400&auto=format&fit=crop' },
      { name: 'Modena Bookcase', image: 'https://images.unsplash.com/photo-1594904351111-a072f80b1a71?q=80&w=400&auto=format&fit=crop' },
      { name: 'Venezia Ottoman', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=400&auto=format&fit=crop' }
    ]
  },
  {
    id: 'bedroom',
    name: 'Bedroom',
    links: ['Beds', 'Wardrobes', 'Nightstands', 'Dressers', 'Mattresses', 'Benches'],
    featuredImage: 'https://images.unsplash.com/photo-1505693314120-0d443867091b?q=80&w=800&auto=format&fit=crop',
    products: [
      { name: 'Serenity King Bed', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=400&auto=format&fit=crop' },
      { name: 'Modena Wardrobe', image: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=400&auto=format&fit=crop' },
      { name: 'Luna Nightstand', image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?q=80&w=400&auto=format&fit=crop' },
      { name: 'Aria Dresser', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=400&auto=format&fit=crop' },
      { name: 'Cloud Mattress', image: 'https://images.unsplash.com/photo-1541123356219-284ebe98ae3b?q=80&w=400&auto=format&fit=crop' },
      { name: 'Verona Bench', image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=400&auto=format&fit=crop' },
      { name: 'Haven Bed Frame', image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=400&auto=format&fit=crop' }
    ]
  },
  {
    id: 'dining',
    name: 'Dining',
    links: ['Dining Tables', 'Dining Chairs', 'Bar Stools', 'Sideboards', 'Cabinets'],
    featuredImage: 'https://images.unsplash.com/photo-1616046229478-9901c5536b45?q=80&w=800&auto=format&fit=crop',
    products: [
      { name: 'Siena Dining Table', image: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?q=80&w=400&auto=format&fit=crop' },
      { name: 'Como Chair', image: 'https://images.unsplash.com/photo-1503602642458-232111445657?q=80&w=400&auto=format&fit=crop' },
      { name: 'Vetro Sideboard', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=400&auto=format&fit=crop' },
      { name: 'Alto Bar Stool', image: 'https://images.unsplash.com/photo-1506898667547-42e22a46e125?q=80&w=400&auto=format&fit=crop' },
      { name: 'Nova Cabinet', image: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?q=80&w=400&auto=format&fit=crop' },
      { name: 'Tuscan Table', image: 'https://images.unsplash.com/photo-1604578762246-41134e37f9cc?q=80&w=400&auto=format&fit=crop' },
      { name: 'Lucca Chair', image: 'https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?q=80&w=400&auto=format&fit=crop' }
    ]
  },
  {
    id: 'modular-kitchen',
    name: 'Modular Kitchen',
    links: ['L-Shaped', 'U-Shaped', 'Island Kitchens', 'Straight Kitchens', 'Parallel Kitchens'],
    featuredImage: 'https://images.unsplash.com/photo-1556912172-45b7ee981454?q=80&w=800&auto=format&fit=crop',
    products: [
      { name: 'Milano Island', image: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?q=80&w=400&auto=format&fit=crop' },
      { name: 'Venezia U-Shape', image: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=400&auto=format&fit=crop' },
      { name: 'Roma L-Shape', image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=400&auto=format&fit=crop' },
      { name: 'Napoli Parallel', image: 'https://images.unsplash.com/photo-1556912998-c57cc6b63ce7?q=80&w=400&auto=format&fit=crop' },
      { name: 'Torino Straight', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=400&auto=format&fit=crop' },
      { name: 'Firenze Island', image: 'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?q=80&w=400&auto=format&fit=crop' },
      { name: 'Genoa Smart', image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=400&auto=format&fit=crop' }
    ]
  },
  {
    id: 'office',
    name: 'Office Furniture',
    links: ['Executive Desks', 'Ergonomic Chairs', 'Meeting Tables', 'Bookshelves', 'Storage Units'],
    featuredImage: 'https://images.unsplash.com/photo-1524758658008-14c1d54fa0f1?q=80&w=800&auto=format&fit=crop',
    products: [
      { name: 'CEO Executive Desk', image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?q=80&w=400&auto=format&fit=crop' },
      { name: 'Aero Ergo Chair', image: 'https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?q=80&w=400&auto=format&fit=crop' },
      { name: 'Nexus Meeting Table', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=400&auto=format&fit=crop' },
      { name: 'Library Shelf', image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=400&auto=format&fit=crop' },
      { name: 'Zenith Workstation', image: 'https://images.unsplash.com/photo-1524758658008-14c1d54fa0f1?q=80&w=400&auto=format&fit=crop' },
      { name: 'Focus Chair', image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?q=80&w=400&auto=format&fit=crop' },
      { name: 'Vault Cabinet', image: 'https://images.unsplash.com/photo-1558997519-83ea9252edf8?q=80&w=400&auto=format&fit=crop' }
    ]
  },
  {
    id: 'outdoor',
    name: 'Outdoor Furniture',
    links: ['Patio Sets', 'Loungers', 'Outdoor Dining', 'Benches'],
    featuredImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
    products: [
      { name: 'Bali Lounger', image: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?q=80&w=400&auto=format&fit=crop' },
      { name: 'Capri Dining', image: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?q=80&w=400&auto=format&fit=crop' },
      { name: 'Ibiza Sofa', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=400&auto=format&fit=crop' }
    ]
  },
  {
    id: 'custom',
    name: 'Custom Furniture',
    links: ['Bespoke Wardrobes', 'Built-in Units', 'Custom Sofas', 'Temple Units'],
    featuredImage: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=800&auto=format&fit=crop',
    products: [
      { name: 'Carved Temple', image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=400&auto=format&fit=crop' },
      { name: 'Fitted Library', image: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=400&auto=format&fit=crop' }
    ]
  }
];

export const reviews: Review[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    role: 'Homeowner',
    text: 'Raja Furniture completely transformed our living room. The Milano Sectional is not just furniture; it\'s a piece of art. The quality is exceptional and on par with top European brands.',
    rating: 5
  },
  {
    id: '2',
    name: 'Rahul Verma',
    role: 'Interior Designer',
    text: 'As an architect, I demand perfection. Raja Furniture delivers every time. Their modular kitchens are stunning, combining Italian aesthetics with flawless execution. A trusted partner.',
    rating: 5
  },
  {
    id: '3',
    name: 'Sneha Patel',
    role: 'Homeowner',
    text: 'We got our custom bedroom set manufactured here. The attention to detail, the warmth of the wood, and the premium finish exceeded all our expectations. Truly a luxury experience.',
    rating: 5
  }
];
