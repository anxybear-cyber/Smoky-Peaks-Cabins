import { Cabin, BlogPost } from './types.ts';

const COMMON_ATTRACTIONS = [
  {
    name: "Great Smoky Mountains National Park",
    description: "A must-visit for nature lovers, offering hiking, wildlife viewing, and scenic drives.",
    distance: "~4 miles",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Dollywood & Splash Country",
    description: "Award-winning theme park and water park featuring world-class coasters and entertainment.",
    distance: "~10 miles",
    image: "https://images.unsplash.com/photo-1626266159981-d7790b968436?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Ripley's Aquarium of the Smokies",
    description: "Explore marine life with interactive exhibits and underwater tunnels.",
    distance: "~2.5 miles",
    image: "https://images.unsplash.com/photo-1534329532739-843f4b99cdd0?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Gatlinburg Parkway",
    description: "The heart of downtown offering local dining, shopping, and entertainment.",
    distance: "~2.0 miles",
    image: "https://images.unsplash.com/photo-1541296602537-83173595cc94?auto=format&fit=crop&q=80&w=800"
  }
];

export const CABINS: Cabin[] = [
  {
    "id": "angelheights",
    "name": "Angel Heights Cabin",
    "tagline": "Authentic Log Cabin with Mountain Views & Modern Comforts",
    "description": "Escape to the timeless charm of Angel Heights—your gateway to secluded Gatlinburg cabin rentals nestled in the heart of the Great Smoky Mountains. Just minutes from downtown Gatlinburg, our historic log cabin offers the perfect blend of privacy, comfort, and convenience for families, couples, and adventure seekers alike.",
    "mainFeatures": [
      "Private Hot Tub",
      "Cozy Fireplace",
      "Mountain Views",
      "Full Kitchen"
    ],
    "detailedSections": [
      {
        "title": "Thoughtfully Restored",
        "content": "This individually owned cabin is thoughtfully restored to preserve its rustic character while offering modern amenities. Experience the historic log cabin feel without sacrificing today's comforts."
      },
      {
        "title": "Cozy Living Areas",
        "content": "Unwind in spacious living areas featuring a cozy fireplace and a fully equipped kitchen, perfect for preparing family meals or romantic dinners."
      },
      {
        "title": "Secluded Outdoor Bliss",
        "content": "Enjoy scenic porches with breathtaking mountain views and a private hot tub. It is the ideal setting to relax, reconnect, and soak in the natural beauty of the Smokies."
      },
      {
        "title": "Minutes from the Parkway",
        "content": "Enjoy the best of both worlds—quiet mountain seclusion with quick access to Dollywood, Ripley’s attractions, and the National Park."
      }
    ],
    "attractions": COMMON_ATTRACTIONS,
    "defaultImages": [
      "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800"
    ],
    "bookingUrl": "https://www.airbnb.com/rooms/32512140"
  },
  {
    "id": "angelrise",
    "name": "Angel Rise Cabin",
    "tagline": "A Haven for Peace, Recharging, and Majestic Views",
    "description": "Angel Rise is a sanctuary from screens and schedules, perched high enough to offer a literal \"rise\" in perspective. Nestled in the quiet heights of Gatlinburg, this cabin is designed for those who seek to disconnect from the noise and reconnect with what matters most.",
    "mainFeatures": [
      "Mt. LeConte View",
      "Spa Bathrooms",
      "Leather Seating",
      "Fireplace"
    ],
    "detailedSections": [
      {
        "title": "The Open Great Room",
        "content": "Invites you to cook breakfast while chatting with someone curled up on the leather couch, enjoying the warmth of the fireplace. The expansive windows bring the forest directly into your living space."
      },
      {
        "title": "Spa Experience Bathrooms",
        "content": "Indulge in your personal spa experience with floor-to-ceiling tiled bathrooms. It is the perfect place to refresh and relax after a day of exploring the trails of the Smoky Mountains."
      },
      {
        "title": "Secluded Outdoor Bliss",
        "content": "Step onto the private wrap-around deck and soak in the hot tub while overlooking the majestic Mt. LeConte. It is an incomparable setting to relax, reconnect, and watch the clouds dance across the peaks."
      },
      {
        "title": "Close to Attractions",
        "content": "While tucked away in total seclusion, you are just a short drive from the Gatlinburg Parkway, Dollywood, and the National Park entrance, giving you the best of both worlds."
      }
    ],
    "attractions": COMMON_ATTRACTIONS,
    "defaultImages": [
      "https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1449156001437-3a16d1daae39?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=800"
    ],
    "bookingUrl": "https://www.airbnb.com/rooms/1244833517683424774"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: '10 Breathtaking Smoky Mountain Waterfalls Ranked',
    excerpt: 'From drive-by wonders to challenging 8-mile treks, discover the best waterfalls near Gatlinburg for every skill level.',
    content: `The Great Smoky Mountains are full of wonderful sights to behold, and some of the most popular natural features people come to the area to see are Smoky Mountain waterfalls! There are over 2,000 miles of streams in the Smokies, and along those streams, you can find dozens of gorgeous waterfalls.\n\nFor beginners, Laurel Falls is a must. The 2.6-mile round-trip trail is paved, making it accessible for most families. If you are looking for something more adventurous, Grotto Falls offers the unique experience of being able to walk directly behind the cascading water.\n\nRemember to always wear sturdy hiking boots and bring plenty of water, even for the shorter trails!`,
    date: 'January 15, 2025',
    category: 'Hiking',
    image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&q=80&w=1200',
    author: 'Sarah Peak'
  },
  {
    id: '2',
    title: 'The Ultimate Gatlinburg Packing List: Seasonal Essentials',
    excerpt: 'Mountain weather can change in a heartbeat. Make sure you have everything you need for a comfortable stay.',
    content: `Packing for a mountain getaway is an art form. In the Smokies, "layers" is the keyword. Even in the height of summer, evening temperatures can drop significantly once you reach the higher elevations.\n\nEssential items for every season include:\n- Waterproof jacket (rain comes often and fast)\n- Comfortable, broken-in hiking shoes\n- A daypack for trail snacks and water\n- Sunscreen and bug spray (even in the shade!)\n\nIn the winter, don't forget heavy wool socks and gloves. While our cabins are cozy and heated, you'll want that extra warmth when you're out on the deck staring at the snowy peaks.`,
    date: 'February 3, 2025',
    category: 'Travel Tips',
    image: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?auto=format&fit=crop&q=80&w=1200',
    author: 'Mark Ridge'
  },
  {
    id: '3',
    title: 'Hidden Gems: 5 Local Eateries You Won’t Find on the Main Strip',
    excerpt: 'Escape the tourist crowds and dine where the locals do. From authentic BBQ to mountain-style pancakes.',
    content: `While the Gatlinburg Parkway is full of famous names, some of the best food is found just a few minutes off the beaten path.\n\n1. Delaware Mansions: Great for a quiet breakfast.\n2. The Wild Plum Tea Room: Nestled in the Arts & Crafts community, this spot offers a magical, storybook atmosphere.\n3. Split Rail Eats: Fantastic comfort food with a modern twist.\n\nIf you're staying at Angel Heights, you're just a short drive from several of these favorites. We always recommend calling ahead for reservations at the Wild Plum, as they fill up weeks in advance!`,
    date: 'March 10, 2025',
    category: 'Dining',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1200',
    author: 'Emily Glen'
  },
  {
    id: '4',
    title: 'Bear Safety 101: Keeping Your Family and the Wildlife Safe',
    excerpt: 'Seeing a Black Bear is a highlight of any trip, but it is important to know how to interact responsibly.',
    content: `The Great Smoky Mountains National Park is one of the few places in the Eastern United States where black bears can be seen in their natural habitat. While they are beautiful to watch, they are wild animals and deserve our respect.\n\nRule number one: Never feed the bears. A fed bear is a dead bear, as they become habituated to humans and can become aggressive. Always store your food in bear-proof containers or inside the cabin.\n\nIf you encounter a bear on the trail, do not run. Back away slowly while facing the bear. Keep a distance of at least 50 yards at all times. By following these simple rules, we can ensure that humans and bears continue to thrive together in the Smokies.`,
    date: 'March 22, 2025',
    category: 'Nature',
    image: 'https://images.unsplash.com/photo-1530595467537-0b5996c41f2d?auto=format&fit=crop&q=80&w=1200',
    author: 'Forest Ranger Dave'
  }
];