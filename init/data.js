const sampleListings = [{
  title: "Cozy Beachfront Cottage",
  description:
    "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
  image: {
    filename: "listingimage",
    // url:"https://images.unsplash.com/photo-1768137580619-76d7adbd8663?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    url: "https://images.unsplash.com/photo-1552733407-5d5c46c3bb3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  price: 1500,
  location: "Malibu",
  country: "United States",
  category: "Amazing pools",
},
{
  title: "Modern Loft in Downtown",
  description:
    "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  price: 1200,
  location: "New York City",
  country: "United States",
  category: "Iconic Cities",
},
{
  title: "Mountain Retreat",
  description:
    "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  price: 1000,
  location: "Aspen",
  country: "United States",
  category: "Mountains",
},
{
  title: "Historic Villa in Tuscany",
  description:
    "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWxzfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  price: 2500,
  location: "Florence",
  country: "Italy",
  category: "Trending",
},
{
  title: "Secluded Treehouse Getaway",
  description:
    "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  price: 800,
  location: "Portland",
  country: "United States",
  category: "Camping",
},
{
  title: "Beachfront Paradise",
  description:
    "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGhvdGVsc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  price: 2000,
  location: "Cancun",
  country: "Mexico",
  category: "Amazing pools",
},
{
  title: "Rustic Cabin by the Lake",
  description:
    "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  price: 900,
  location: "Lake Tahoe",
  country: "United States",
  category: "Camping",
},
{
  title: "Luxury Penthouse with City Views",
  description:
    "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1622396481328-9b1b78cdd9fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  },
  price: 3500,
  location: "Los Angeles",
  country: "United States",
  category: "Iconic Cities",
},
{
  title: "Ski-In/Ski-Out Chalet",
  description:
    "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502784444187-359ac186c5bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  price: 3000,
  location: "Verbier",
  country: "Switzerland",
  category: "Mountains",
},
{
  title: "Safari Lodge in the Serengeti",
  description:
    "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fG1vdW50YWlufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  price: 4000,
  location: "Serengeti National Park",
  country: "Tanzania",
  category: "Trending",
},
{
  title: "Historic Canal House",
  description:
    "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FtcGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  price: 1800,
  location: "Amsterdam",
  country: "Netherlands",
  category: "Iconic Cities",
},
{
  title: "Private Island Retreat",
  description:
    "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1618140052121-39fc6db33972?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bG9kZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  },
  price: 10000,
  location: "Fiji",
  country: "Fiji",
  category: "Trending",
},
{
  title: "Charming Cottage in the Cotswolds",
  description:
    "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  price: 1200,
  location: "Cotswolds",
  country: "United Kingdom",
  category: "Trending",
},
{
  title: "Historic Brownstone in Boston",
  description:
    "Step back in time in this elegant historic brownstone located in the heart of Boston.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  price: 2200,
  location: "Boston",
  country: "United States",
  category: "Iconic Cities",
},
{
  title: "Beachfront Bungalow in Bali",
  description:
    "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  },
  price: 1800,
  location: "Bali",
  country: "Indonesia",
  category: "Amazing pools",
},
{
  title: "Mountain View Cabin in Banff",
  description:
    "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  price: 1500,
  location: "Banff",
  country: "Canada",
  category: "Mountains",
},
{
  title: "Art Deco Apartment in Miami",
  description:
    "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
  image: {
    filename: "listingimage",
    url: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  price: 1600,
  location: "Miami",
  country: "United States",
  category: "Iconic Cities",
},
{
  title: "Tropical Villa in Phuket",
  description:
    "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  price: 3000,
  location: "Phuket",
  country: "Thailand",
  category: "Amazing pools",
},
{
  title: "Historic Castle in Scotland",
  description:
    "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  },
  price: 4000,
  location: "Scottish Highlands",
  country: "United Kingdom",
  category: "Castels",
},
{
  title: "Desert Oasis in Dubai",
  description:
    "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  },
  price: 5000,
  location: "Dubai",
  country: "United Arab Emirates",
  category: "Trending",
},
{
  title: "Rustic Log Cabin in Montana",
  description:
    "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  price: 1100,
  location: "Montana",
  country: "United States",
  category: "Mountains",
},
{
  title: "Beachfront Villa in Greece",
  description:
    "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  },
  price: 2500,
  location: "Mykonos",
  country: "Greece",
  category: "Amazing pools",
},
{
  title: "Eco-Friendly Treehouse Retreat",
  description:
    "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  },
  price: 750,
  location: "Costa Rica",
  country: "Costa Rica",
  category: "Camping",
},
{
  title: "Historic Cottage in Charleston",
  description:
    "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  price: 1600,
  location: "Charleston",
  country: "United States",
  category: "Trending",
},
{
  title: "Modern Apartment in Tokyo",
  description:
    "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  price: 2000,
  location: "Tokyo",
  country: "Japan",
  category: "Iconic Cities",
},
{
  title: "Lakefront Cabin in New Hampshire",
  description:
    "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  },
  price: 1200,
  location: "New Hampshire",
  country: "United States",
  category: "Mountains",
},
{
  title: "Luxury Villa in the Maldives",
  description:
    "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  price: 6000,
  location: "Maldives",
  country: "Maldives",
  category: "Amazing pools",
},
{
  title: "Ski Chalet in Aspen",
  description:
    "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
  },
  price: 4000,
  location: "Aspen",
  country: "United States",
  category: "Mountains",
},
{
  title: "Secluded Beach House in Costa Rica",
  description:
    "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  price: 1800,
  location: "Costa Rica",
  country: "Costa Rica",
  category: "Amazing pools",
},
{
  title: "Cozy Private Room in Shibuya",
  description: "Experience Tokyo like a local by staying in this comfortable private room just minutes away from the famous Shibuya crossing.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  price: 80,
  location: "Tokyo",
  country: "Japan",
  category: "Rooms",
},
{
  title: "Organic Farm Stay in Tuscany",
  description: "Get back to nature and slow down with this authentic farm stay experience amidst rolling hills and vineyards.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1500076656116-558758c991c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  price: 150,
  location: "Tuscany",
  country: "Italy",
  category: "Farms",
},
{
  title: "Glass Igloo in Lapland",
  description: "Sleep under the Northern Lights in this stunning glass igloo located deep in the Arctic circle.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  price: 450,
  location: "Lapland",
  country: "Finland",
  category: "Arctic",
},
{
  title: "Cliffside Villa in Santorini",
  description: "A dream destination. Wake up to breathtaking caldera views in this pristine whitewashed villa.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1469022563428-aa04fef9f5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  price: 800,
  location: "Santorini",
  country: "Greece",
  category: "Whislist",
},
{
  title: "Geodesic Dome in Joshua Tree",
  description: "Star-gaze from the comfort of your bed in this incredible off-grid geodesic dome.",
  image: {
    filename: "listingimage",
    url: "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTIzODg0NjM%3D/original/dc12fb0a-c666-4d19-8718-a529beb8e4ec.jpeg"
  },
  price: 250,
  location: "Joshua Tree",
  country: "United States",
  category: "Dome",
},
{
  title: "Oceanview Villa",
  description: "Wake up to the sound of waves in this beautiful beachfront villa.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  price: 350,
  location: "Malibu, California",
  country: "United States",
  category: "Beachfront",
},
{
  title: "Secluded Beach House in Bali",
  description: "Your own private sandy paradise away from the crowds.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1519046904884-53103b34b206?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  price: 180,
  location: "Bali",
  country: "Indonesia",
  category: "Beachfront",
},
{
  title: "Modern Glass Beachfront Condo",
  description: "Floor-to-ceiling windows overlooking the gorgeous Mediterranean sea.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  price: 450,
  location: "Ibiza",
  country: "Spain",
  category: "Rooms",
},
{
  title: "Tropical Island Hut",
  description: "Fall asleep to the sound of the ocean in this authentic thatched beach hut.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1548574505-5e239809ee19?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  price: 120,
  location: "Koh Samui",
  country: "Thailand",
  category: "Beachfront",
},
{
  title: "Luxury Beach Resort Villa",
  description: "Ultimate luxury with an infinity pool that blends seamlessly into the ocean horizon.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  price: 900,
  location: "Maldives",
  country: "Maldives",
  category: "Beachfront",
},
{
  title: "Chic Studio in Paris",
  description: "A beautifully furnished private room in the heart of Paris, perfect for solo travelers or couples.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  price: 110,
  location: "Paris",
  country: "France",
  category: "Rooms",
},
{
  title: "Medieval Castle in Transylvania",
  description: "Experience history in this authentic medieval castle with modern amenities.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  price: 600,
  location: "Transylvania",
  country: "Romania",
  category: "Castels",
},
{
  title: "Chateau in the Loire Valley",
  description: "Live like French royalty for the weekend in this stunning 16th-century chateau.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  price: 850,
  location: "Loire Valley",
  country: "France",
  category: "Castels",
},
{
  title: "Cozy Alpaca Farm Stay",
  description: "Wake up to friendly alpacas right outside your window in this pastoral farm retreat.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1560493676-04071c5f467b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  price: 130,
  location: "Cusco",
  country: "Peru",
  category: "Farms",
},
{
  title: "Rustic Dairy Farm Cottage",
  description: "A peaceful countryside escape where you can learn to make fresh cheese and butter.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  price: 90,
  location: "Wisconsin",
  country: "United States",
  category: "Farms",
},
{
  title: "Northern Lights Cabin",
  description: "A remote, cozy cabin offering front-row seats to the spectacular aurora borealis.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  price: 350,
  location: "Tromso",
  country: "Norway",
  category: "Arctic",
},
{
  title: "Ice Hotel Suite",
  description: "An unforgettable experience sleeping in a stunning suite carved entirely out of ice.",
  image: {
    filename: "listingimage",
    url: "https://images.openai.com/static-rsc-3/v2s03yc-_3HRw7F_hl5s1kGi3NlY3iKzlkQI0s6NgAfBdhUVuV4WlLUrdGVQRmWex_ehu-xMnWoru34xB9XrFugdkgEiFO5csU5fJ2KSSi4?purpose=fullsize&v=1"
  },
  price: 500,
  location: "Jukkasjärvi",
  country: "Sweden",
  category: "Arctic",
},
{
  title: "Bora Bora Overwater Bungalow",
  description: "A once-in-a-lifetime stay hovering crystal clear lagoon waters.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  price: 1200,
  location: "Bora Bora",
  country: "French Polynesia",
  category: "Whislist",
},
{
  title: "Cave Home in Cappadocia",
  description: "Watch hundreds of hot air balloons from the terrace of this historic cave dwelling.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1641128324972-af3212f0f6bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  price: 220,
  location: "Cappadocia",
  country: "Turkey",
  category: "Whislist",
},
{
  title: "Jungle Dome Retreat",
  description: "Immerse yourself in nature without sacrificing comfort in this eco-friendly jungle dome.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  price: 180,
  location: "Tulum",
  country: "Mexico",
  category: "Dome",
},
{
  title: "Desert Stargazer Dome",
  description: "Enjoy total isolation and incredible night skies from a climate-controlled glass dome.",
  image: {
    filename: "listingimage",
    url: "https://images.unsplash.com/photo-1444201983204-c43cbd584d93?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60"
  },
  price: 300,
  location: "Atacama Desert",
  country: "Chile",
  category: "Dome",
},
];

module.exports = { data: sampleListings };