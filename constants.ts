import { Cabin, BlogPost } from './types';

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
    id: 'angelheights',
    name: 'Angel Heights Cabin',
    tagline: 'Authentic Log Cabin with Mountain Views & Modern Comforts',
    description: 'Escape to the timeless charm of Angel Heights—your gateway to secluded Gatlinburg cabin rentals nestled in the heart of the Great Smoky Mountains. Just minutes from downtown Gatlinburg, our historic log cabin offers the perfect blend of privacy, comfort, and convenience for families, couples, and adventure seekers alike.',
    mainFeatures: ['Private Hot Tub', 'Cozy Fireplace', 'Mountain Views', 'Full Kitchen'],
    detailedSections: [
      {
        title: 'Thoughtfully Restored',
        content: 'This individually owned cabin is thoughtfully restored to preserve its rustic character while offering modern amenities. Experience the historic log cabin feel without sacrificing today\'s comforts.'
      },
      {
        title: 'Cozy Living Areas',
        content: 'Unwind in spacious living areas featuring a cozy fireplace and a fully equipped kitchen, perfect for preparing family meals or romantic dinners.'
      },
      {
        title: 'Secluded Outdoor Bliss',
        content: 'Enjoy scenic porches with breathtaking mountain views and a private hot tub. It is the ideal setting to relax, reconnect, and soak in the natural beauty of the Smokies.'
      },
      {
        title: 'Minutes from the Parkway',
        content: 'Enjoy the best of both worlds—quiet mountain seclusion with quick access to Dollywood, Ripley’s attractions, and the National Park.'
      }
    ],
    attractions: COMMON_ATTRACTIONS,
    defaultImages: [
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800'
    ],
    bookingUrl: 'https://www.airbnb.com/rooms/32512140'
  },
  {
    id: 'angelrise',
    name: 'Angel Rise Cabin',
    tagline: 'A Haven for Peace, Recharging, and Majestic Views',
    description: 'Angel Rise is a sanctuary from screens and schedules, perched high enough to offer a literal "rise" in perspective. Nestled in the quiet heights of Gatlinburg, this cabin is designed for those who seek to disconnect from the noise and reconnect with what matters most.',
    mainFeatures: ['Mt. LeConte View', 'Spa Bathrooms', 'Leather Seating', 'Fireplace'],
    detailedSections: [
      {
        title: 'The Open Great Room',
        content: 'Invites you to cook breakfast while chatting with someone curled up on the leather couch, enjoying the warmth of the fireplace. The expansive windows bring the forest directly into your living space.'
      },
      {
        title: 'Spa Experience Bathrooms',
        content: 'Indulge in your personal spa experience with floor-to-ceiling tiled bathrooms. It is the perfect place to refresh and relax after a day of exploring the trails of the Smoky Mountains.'
      },
      {
        title: 'Secluded Outdoor Bliss',
        content: 'Step onto the private wrap-around deck and soak in the hot tub while overlooking the majestic Mt. LeConte. It is an incomparable setting to relax, reconnect, and watch the clouds dance across the peaks.'
      },
      {
        title: 'Close to Attractions',
        content: 'While tucked away in total seclusion, you are just a short drive from the Gatlinburg Parkway, Dollywood, and the National Park entrance, giving you the best of both worlds.'
      }
    ],
    attractions: COMMON_ATTRACTIONS,
    defaultImages: [
      'https://images.unsplash.com/photo-1542718610-a1d656d1884c?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1449156001437-3a16d1daae39?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=800'
    ],
    bookingUrl: 'https://www.airbnb.com/rooms/1244833517683424774'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '9',
    title: '10 Breathtaking Smoky Mountain Waterfalls Ranked by Difficulty',
    excerpt: 'From drive-by wonders to challenging 8-mile treks, discover the best waterfalls near Gatlinburg for every skill level.',
    content: `The Great Smoky Mountains are full of wonderful sights to behold, and some of the most popular natural features people come to the area to see are Smoky Mountain waterfalls! To take in the beauty of the falls, you have to hike to most of them, and not everyone is an experienced hiker. But don’t worry, because most of the waterfalls are easily accessible, even if you don’t hike all the time!

**1. Place of a Thousand Drips – Easy**
To see the Place of a Thousand Drips, you don’t even have to leave the comfort of your car! This waterfall is made up of several narrow falls that combine into a larger one, and you can find it as you drive along the Roaring Fork Motor Trail towards Gatlinburg. The best time to view the falls is right after it rains, because there will be more water flowing!

**2. Cataract Falls – Easy**
A great waterfall anyone can hike to is Cataract Falls. This easy trail is 1.1 miles roundtrip, and the path is clearly laid out and simple to follow. People of all ages will enjoy this nature walk, especially when you come up on the 25-foot-tall falls!

**3. Laurel Falls – Easy**
One of the most popular easy hikes that has a massive waterfall at the end is Laurel Falls Trail. The trail can be pretty steep at times, but the path is paved, making it easier to navigate since you don’t have to worry about tree roots and rocks. This is a great beginner hike since it is 2.3 miles roundtrip. *Please note: Laurel Falls Trail is closed for rehabilitation through July 2026.*

**4. Fern Branch Falls – Easy**
Fern Branch Falls is another Smoky Mountain waterfall you don’t want to miss. To get to the waterfall, you’ll hike along Porters Creek Trail, which is considered easy with a roundtrip length of 4 miles. This trail is especially popular in the spring due to the abundance of wildflowers you can see along the path.

**5. Baskins Creek Falls – Easy to Moderate**
Baskins Creek Falls is arguably one of the most beautiful waterfalls in the national park. The trail itself is 3.1 miles roundtrip. The hike to the falls is fairly easy, but the last portion of the trail descends quite a bit, which is what makes it moderate on the hike back to the trailhead.

**6. Spruce Flats Falls – Moderate**
The 1.8-mile trail to get to this waterfall is considered moderate, and it’s technically not on the official park map. However, the trail is frequented by visitors who want to see the falls, so it is easy to follow. It stands at 30 feet tall and has 4 tiers spilling into a pool at the bottom.

**7. Abrams Falls – Moderate**
Abrams Falls is one of the most popular waterfalls, and the trailhead is actually located along the Cades Cove Loop. While it only stands at 25 feet tall, it definitely has the most impressive amount of water rushing over the rocks! The roundtrip length is 5 miles.

**8. Grotto Falls – Moderate**
This 40-foot-tall waterfall is one of the most popular ones because it’s the only waterfall you can walk behind. The trail is about 3 miles roundtrip. Plus, if you make it early enough on the right day, you could see llamas carrying supplies along the trail!

**9. Rainbow Falls – Moderate to Difficult**
Rainbow Falls is the tallest single-drop waterfall in the park, standing at 80 feet tall. The trail is 5 miles roundtrip and is considered moderate to difficult depending on your skill level. It gets its name from the rainbow effect you can see in the mist in the early afternoon.

**10. Ramsey Cascades – Difficult**
Ramsey Cascades is the most difficult Smoky Mountain waterfall to hike to, but the sight is absolutely worth the 8-mile roundtrip hike. It stands at 100 feet tall, with several small tiers pouring over rocks into a large pool.

**Stay Near Smoky Mountain Waterfalls**
All of these waterfalls are worth seeing when you’re in town. It doesn’t matter if you only see a few or you make plans to explore them all, you’ll have a great time! Many of our Smoky Peaks cabins are located close to the national park so you can easily visit these wonderful natural creations. Book your trip today!`,
    date: 'November 22, 2024',
    category: 'Hiking',
    image: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&q=80&w=1200',
    author: 'Sarah Peak'
  },
  {
    id: '8',
    title: 'Top 3 Things to Do in Smoky Mountains National Park for Kids',
    excerpt: 'The park is a family-friendly destination that kids will love! From Junior Rangers to Cades Cove biking adventures.',
    content: `Smoky Mountains National Park is not just a popular park for outdoor enthusiasts, avid hikers, and bird watchers, but a family-friendly destination that kids will love! The park offers a unique and exciting opportunity for children to learn more about the history of the region, explore some fun hiking trails, and perhaps even spot some wildlife! Here are the top 3 things to do in Smoky Mountains National Park for kids:

**1. Become a Junior Ranger**
If your kids ever dreamed about being a Forest Ranger, they can now make that a reality with the Junior Ranger program at Smoky Mountains National Park! Kids who are between the ages of 5 to 12 can participate in the program by picking up a Junior Ranger booklet for a nominal fee at any of the Visitor Centers or at the Cades Cove or Elkmont campgrounds. Once your child completes all of the activities in the booklet, stop back by a Visitor Center to talk to a ranger, and then they will receive their Junior Ranger badge! There are also special ranger-led programs throughout the year.

**2. Explore the Sugarlands Visitor Center**
While all of the visitor centers throughout the park offer maps and facilities, Sugarlands Visitor Center is especially interesting for kids! This center offers free admission to a 20-minute film about the park, as well as extensive natural history exhibits that your children will find intriguing. The Sugarlands Visitor Center is also a perfect starting point for several kid-friendly hikes, including the Gatlinburg Trail, Cataract Falls Trail, and the Fighting Creek Nature Trail.

**3. Ride Bikes Through Cades Cove**
If your child loves to spend time on their bike, they will especially love riding through Cades Cove! The Cades Cove Loop Road is an 11-mile, one-way road that provides a wonderful opportunity for wildlife viewing and touring 19th-century homesites, including a working grist mill. The best time to take kids for a bike ride is from early May to late September when the loop road is closed to motor vehicle traffic on specific mornings. Keep in mind that children ages 16 and under are required to wear a helmet.`,
    date: 'November 20, 2024',
    category: 'Family',
    image: 'https://images.unsplash.com/photo-1501554702351-13357ad2c98d?auto=format&fit=crop&q=80&w=1200',
    author: 'Sarah Peak'
  },
  {
    id: '7',
    title: 'Is 3 Days in Gatlinburg Enough? The Perfect Trip Guide',
    excerpt: 'Planning a quick escape to the Smokies? Find out why 3 days is considered the "sweet spot" for experiencing Gatlinburg.',
    content: `Is spending 3 days in Gatlinburg worthwhile? Absolutely. In fact, it is widely considered the ideal minimum length to experience the area's top attractions, nature, and local culture without feeling rushed.

Staying at Smoky Peaks Cabins places you perfectly to make the most of a long weekend. Here is why a 3-day trip gives you a well-rounded experience:

**Great Smoky Mountains National Park**
With three days, you have time to truly immerse yourself in the natural beauty. You can enjoy iconic hiking trails—such as Laurel Falls for a morning walk or Clingman’s Dome for an unforgettable sunrise—along with wildlife viewing and scenic drives like Cades Cove and Roaring Fork.

**Town Attractions**
Gatlinburg offers unique local experiences that are best enjoyed at a leisurely pace. You'll have time for:
- Ripley’s Aquarium of the Smokies
- The Gatlinburg Space Needle for panoramic views
- The famous 8-mile Arts and Crafts Loop
- Sampling authentic moonshine at local distilleries
- Dining at local favorites like Crockett's Breakfast Camp or Big Daddy’s Pizzeria

**Entertainment & Nightlife**
Three days allow for a mix of daytime adventure and evening fun. You can catch live shows like the Comedy Barn or Dolly Parton’s Stampede, or even take a spooky ghost tour through the historic streets of downtown.

**The Perfect Balance**
This duration allows for a harmonious balance of outdoor adventure and town exploration. You can spend one full day in the park, one day exploring the Parkway, and one day simply relaxing at your historic Smoky Peaks cabin, soaking in the hot tub and watching the clouds roll over the ridges.

While shorter visits are possible, two days can often feel rushed. On the other hand, a 3-day trip combines popular outdoor activities with local culture, making it the highly recommended duration for most visitors.`,
    date: 'November 15, 2024',
    category: 'Local Guide',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=1200',
    author: 'Sarah Peak'
  },
  {
    id: '6',
    title: 'The Best Time of Year to Visit Gatlinburg, TN',
    excerpt: 'A season-by-season guide to help you plan your perfect stay at Smoky Peaks Cabins.',
    content: `Gatlinburg, Tennessee is a year-round destination—but what you experience depends on when you go. From vibrant fall colors to winter snowfalls and wildflower-filled spring hikes, there’s no bad time to visit. Here's a season-by-season guide to help you plan your perfect stay at Smoky Peaks Cabins:

🍁 Fall (September–November):
Why Go: Peak foliage, crisp mountain air, fall festivals.
Top Activities:
- Drive through Roaring Fork Motor Nature Trail
- Visit Dollywood’s Harvest Festival
- Cozy up in your cabin with a fire and a view

❄️ Winter (December–February):
Why Go: Fewer crowds, winter wonderland scenery, holiday events.
Top Activities:
- Ober Mountain skiing and snow tubing
- Gatlinburg Winter Magic lights
- Relaxing in a hot tub under the stars

🌸 Spring (March–May):
Why Go: Mild weather, blooming wildflowers, waterfalls at their peak.
Top Activities:
- Wildflower hikes in the national park
- Springfest events in downtown Gatlinburg
- Birdwatching and porch sitting at your cabin

☀️ Summer (June–August):
Why Go: Family vacations, river adventures, festivals.
Top Activities:
- Whitewater rafting or tubing
- Firefly watching from your porch
- Enjoying long days of mountain sunshine

🏕️ No matter the season, Smoky Peaks Cabins are always the perfect base for adventure. Book your Gatlinburg escape now, and get the full four-season Smoky Mountain experience in a one-of-a-kind historic log cabin.`,
    date: 'November 10, 2024',
    category: 'Local Guide',
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=1200',
    author: 'Sarah Peak'
  },
  {
    id: '5',
    title: '10 Unforgettable Things to Do in Gatlinburg, TN',
    excerpt: 'Discover the top activities near your Smoky Peaks stay, from hiking to mountain coasters.',
    content: `Gatlinburg, TN is one of the most beloved destinations in the Smoky Mountains—and staying at Smoky Peaks Cabins puts you right in the heart of it all. Our unique log cabins, built with reclaimed materials and modern luxury, are just minutes from some of the area’s top attractions.

Here are 10 unforgettable things to do near your Smoky Peaks stay:

1. Hike the Gatlinburg Trail
One of the few dog-friendly trails in the national park, this easy path offers river views and peaceful forest vibes—just a short drive from your cabin.

2. Ride the Aerial Tram to Ober Mountain
Enjoy sweeping mountain views year-round. In winter, go skiing or snow tubing. In summer, try the alpine slide or scenic chair lift.

3. Visit the Great Smoky Mountains National Park
With over 800 miles of trails, wildlife, and waterfalls, it’s a bucket-list destination—just minutes from your front porch.

4. Taste Authentic Tennessee Moonshine
Check out Sugarlands Distilling or Ole Smoky Moonshine downtown for live music and free tastings.

5. Go Horseback Riding in the Mountains
A fun way to explore the Smokies for families or couples. Try Smoky Mountain Riding Stables for a guided tour.

6. Explore Anakeesta
A treetop adventure park with ziplining, mountain coasters, dining, and some of the best sunset views in town.

7. Take a Scenic Drive on Roaring Fork Motor Nature Trail
A quiet, one-way loop road filled with waterfalls, wildlife, and historical buildings.

8. Shop & Stroll the Gatlinburg Strip
From handmade crafts to candy shops, there’s something for everyone. Don’t miss The Village Shops.

9. Catch a Live Bluegrass Show
Embrace Appalachian roots with live music at local venues like Ole Red or The Smoky Mountain Brewery.

10. Relax at Your Historic Cabin
Unwind in a hot tub, cozy up by the fireplace, or watch the sunset from your private porch. No other Gatlinburg cabins offer this much history and charm.`,
    date: 'October 25, 2024',
    category: 'Local Guide',
    image: 'https://images.unsplash.com/photo-1541296602537-83173595cc94?auto=format&fit=crop&q=80&w=1200',
    author: 'Sarah Peak'
  },
  {
    id: '1',
    title: 'Top 5 Sunrise Spots in the Smokies',
    excerpt: 'There is nothing quite like watching the morning fog roll over the ridges of the Great Smoky Mountains...',
    content: 'The Great Smoky Mountains National Park is world-famous for its morning mist. To catch the best views, we recommend heading to Clingmans Dome or Morton Overlook. If you prefer to stay closer to home, the deck of Angel Heights offers a spectacular eastward view that rival many of the parks high-elevation trails. Don\'t forget your coffee!',
    date: 'October 12, 2024',
    category: 'Hiking',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800',
    author: 'Sarah Peak'
  }
];