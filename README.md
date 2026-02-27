# 🏠 WanderLust — Airbnb Clone

A full-stack Airbnb-inspired property listing platform built with **Node.js**, **Express**, **MongoDB**, **EJS**, and modern web technologies. Browse, create, and review vacation listings from anywhere in the world.

---

## 🔗 Live Demo

> _Coming Soon — Deploy to Render / Railway_

---

## ✨ Features

- 🔐 **User Authentication** — Secure signup, login, and logout using Passport.js
- 🏡 **Full CRUD for Listings** — Create, read, update, and delete property listings
- 🗺️ **Mapbox Integration** — Interactive maps with forward geocoding per listing
- 🖼️ **Image Uploads** — Upload listing photos directly to Cloudinary
- 🔍 **Search & Filter** — Search listings by city/country, filter by category
- 💬 **Review System** — Leave ratings and comments; only authors can delete their reviews
- 🏷️ **12 Categories** — Trending, Rooms, Iconic Cities, Mountains, Castles, Amazing Pools, Camping, Farms, Arctic, Wishlist, Dome, Beachfront
- ⚡ **Flash Messages** — Real-time feedback for all user actions
- 🔒 **Authorization** — Only listing owners can edit or delete their listings
- 📄 **Static Pages** — Privacy Policy and Terms of Service

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Runtime | Node.js |
| Framework | Express.js |
| Database | MongoDB Atlas (Mongoose ODM) |
| Templating | EJS + ejs-mate |
| Authentication | Passport.js (passport-local) |
| Sessions | express-session + connect-mongo |
| Image Hosting | Cloudinary + Multer |
| Maps | Mapbox GL JS |
| Validation | Joi |
| Env Management | dotenv |

---

## 📁 Project Structure

```
Airbnb-clone/
├── app.js               # Express app entry point
├── cloudConfig.js       # Cloudinary storage config
├── middleware.js        # Auth, validation & authorization guards
├── schema.js            # Joi validation schemas
├── controllers/         # Business logic (MVC)
│   ├── listings.js
│   ├── review.js
│   └── user.js
├── models/              # Mongoose schemas
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── routes/              # Express routers
│   ├── listing.js
│   ├── review.js
│   └── user.js
├── views/               # EJS templates
│   ├── listings/        # index, show, new, edit, home
│   ├── users/           # login, signup
│   ├── pages/           # privacy, terms
│   ├── includes/        # navbar, flash messages
│   └── layouts/         # base layout (ejs-mate)
├── public/              # Static files (CSS, JS)
├── utils/               # wrapAsync, ExpressError
└── init/                # DB seed data (50 listings)
    ├── data.js
    └── index.js
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- MongoDB Atlas account
- Cloudinary account
- Mapbox account

### 1. Clone the Repository

```bash
git clone https://github.com/pankaj332004/Airbnb-clone.git
cd Airbnb-clone
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the project root:

```env
ATLASDB_URL=mongodb+srv://<username>:<password>@cluster0.mongodb.net/?appName=Cluster0
SECRET=your_session_secret_here
CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
MAP_TOKEN=your_mapbox_public_token
```

### 4. Seed the Database (Optional)

Populate initial 50 sample listings:

```bash
node init/index.js
```

### 5. Run the App

```bash
npm run dev
```

Open [http://localhost:8080](http://localhost:8080) in your browser.

---

## 📸 Screenshots

> _Add screenshots here after deployment_

---

## 🔮 Planned Features

- [ ] Wishlist / Save listings
- [ ] Availability calendar & date picker
- [ ] User profile pages
- [ ] Price range filter
- [ ] Responsive mobile UI improvements
- [ ] Pagination for listing index

---

## 📄 License

This project is licensed under the **ISC License**.

---

## 🙏 Acknowledgements

- [Airbnb](https://www.airbnb.com) for design inspiration
- [Unsplash](https://unsplash.com) for listing photos
- [Mapbox](https://www.mapbox.com) for map functionality
- [Cloudinary](https://cloudinary.com) for image hosting

---

*Built with ❤️ by [Pankaj](https://github.com/pankaj332004)*