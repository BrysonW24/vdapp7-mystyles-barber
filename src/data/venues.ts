
export const REAL_VENUES = [
  {
    "name": "Men's Biz",
    "address": "Shop 15 Ground Floor 412-414 George St, Sydney NSW 2000",
    "phone": "(02) 8386 3577",
    "website": "www.mensbiz.com.au",
    "rating": 4.7,
    "coordinate": { "latitude": -33.8698, "longitude": 151.2070 }
  },
  {
    "name": "Zakura Hair",
    "address": "28 Lime St, Sydney NSW 2000",
    "phone": "0433 325 376",
    "website": "www.zakurahair.com.au",
    "rating": 4.5,
    "coordinate": { "latitude": -33.8655, "longitude": 151.2018 }
  },
  {
    "name": "Men's Culture",
    "address": "Sydney NSW 2000 (Martin Place)",
    "phone": "(02) 9188 2841",
    "website": "www.mensculture.com.au",
    "rating": 4.6,
    "coordinate": { "latitude": -33.8675, "longitude": 151.2115 }
  },
  {
    "name": "The Barberhood",
    "address": "Shop 3, 1 O'Connell St (Wintergarden), Sydney NSW 2000",
    "phone": "(02) 9247 4583",
    "website": "www.barberhood.com.au",
    "rating": 5.0,
    "coordinate": { "latitude": -33.8642, "longitude": 151.2105 }
  },
  {
    "name": "Sydney Barber Shops Pty Ltd",
    "address": "Ground Floor, 142 Clarence St, Sydney NSW 2000",
    "phone": "0416 574 461",
    "website": null,
    "rating": 4.4,
    "coordinate": { "latitude": -33.8680, "longitude": 151.2055 }
  },
  {
    "name": "Grand Royal Barbers (Sydney CBD)",
    "address": "Shop 2A, 10 Spring St, Sydney NSW 2000",
    "phone": "(02) 9221 8886",
    "website": null,
    "rating": 4.6,
    "coordinate": { "latitude": -33.8650, "longitude": 151.2090 }
  },
  {
    "name": "The Chifley Barber",
    "address": "Shop 6, 2 Chifley Square, Sydney NSW 2000",
    "phone": "(02) 8094 9345",
    "website": null,
    "rating": 4.8,
    "coordinate": { "latitude": -33.8660, "longitude": 151.2120 }
  },
  {
    "name": "Style Plus Barbers",
    "address": "Shop 10-11H Hunter Connection, 7-13 Hunter St, Sydney NSW 2000",
    "phone": "(02) 8021 4465",
    "website": null,
    "rating": 4.3,
    "coordinate": { "latitude": -33.8665, "longitude": 151.2085 }
  },
  {
    "name": "Babylon Barbershop",
    "address": "Shop 119, 289 Sussex St, Sydney NSW 2000",
    "phone": "(02) 9283 6776",
    "website": null,
    "rating": 4.5,
    "coordinate": { "latitude": -33.8735, "longitude": 151.2045 }
  },
  {
    "name": "Gent's Cuts N Style",
    "address": "Shop 3, 263-265 Castlereagh St, Sydney NSW 2000",
    "phone": "(02) 8056 8154",
    "website": null,
    "rating": 4.7,
    "coordinate": { "latitude": -33.8760, "longitude": 151.2080 }
  },
  {
    "name": "Chops N Charlie",
    "address": "6 Stanley St, Darlinghurst NSW 2010",
    "phone": "(02) 8065 9910",
    "website": "www.chopsncharlie.com",
    "rating": 4.9,
    "coordinate": { "latitude": -33.8755, "longitude": 151.2165 }
  },
  {
    "name": "Salon 27",
    "address": "194 Harris St, Pyrmont NSW 2009",
    "phone": "(02) 9571 9678",
    "website": null,
    "rating": 4.8,
    "coordinate": { "latitude": -33.8695, "longitude": 151.1960 }
  },
  {
    "name": "A2Z Barber Shop",
    "address": "46B Darlinghurst Rd, Potts Point NSW 2011",
    "phone": "0450 656 526",
    "website": null,
    "rating": 4.6,
    "coordinate": { "latitude": -33.8730, "longitude": 151.2240 }
  },
  {
    "name": "Grand Royal Barbers (Darlinghurst)",
    "address": "397 Liverpool St, Darlinghurst NSW 2010",
    "phone": "(02) 9360 3063",
    "website": "www.grandroyalbarbers.com.au",
    "rating": 4.6,
    "coordinate": { "latitude": -33.8780, "longitude": 151.2190 }
  },
  {
    "name": "Budget Safe Haircut",
    "address": "Shop 2, 84-86 Mary St, Surry Hills NSW 2010",
    "phone": "0422 661 441",
    "website": null,
    "rating": 4.2,
    "coordinate": { "latitude": -33.8840, "longitude": 151.2100 }
  },
  {
    "name": "Royal Cut Barber",
    "address": "144-150 Liverpool St, Darlinghurst NSW 2010",
    "phone": "0451 553 525",
    "website": null,
    "rating": 4.3,
    "coordinate": { "latitude": -33.8770, "longitude": 151.2140 }
  }
].map((venue, index) => ({
  id: String(index + 1),
  title: venue.name,
  rating: String(venue.rating || '4.5'), // Default rating if null
  distance: '0.5 mi', // Mock distance
  address: venue.address,
  phone: venue.phone,
  coordinate: venue.coordinate
}));
