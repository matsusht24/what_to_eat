🍽️ Restaurant Picker

A lightweight, web-based app that allows users to add restaurants to a shared list and randomly select one to decide what to eat. Built with Next.js, Supabase, and Tailwind CSS, this project is ideal for teams, friends, or families looking to make mealtime decisions fun and interactive.

🚀 Features

Add restaurants to a shared global list.

Randomly pick a restaurant with a single click.

View the complete list of all added restaurants.

Responsive, mobile-friendly design with Tailwind CSS.

Simple API endpoints powered by Supabase.

🛠️ Tech Stack
Layer	Technology
Frontend	Next.js (React) + Tailwind CSS
Backend / Database	Supabase (PostgreSQL)
Deployment	Vercel
Language	TypeScript
📦 Installation

Clone the repository

git clone https://github.com/your-username/restaurant-picker.git
cd restaurant-picker


Install dependencies

npm install


Set up environment variables

Create a .env.local file in the project root:

NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here


Run the development server

npm run dev


Open http://localhost:3000
 to see the app in action.

🗂️ Project Structure
restaurant-picker/
│
├─ app/                   # Next.js app router pages
│   ├─ page.tsx           # Main frontend page
│   └─ api/               # API endpoints
│       └─ restaurants/   # Restaurant CRUD & random selection
│
├─ lib/
│   └─ supabase.ts        # Supabase client setup
│
├─ public/                # Static assets
├─ styles/                # Tailwind and global CSS
├─ .env.local             # Environment variables
└─ package.json

🔧 API Endpoints
Endpoint	Method	Description
/api/restaurants/add	POST	Add a new restaurant
/api/restaurants/random	GET	Get a random restaurant
/api/restaurants/all	GET	Fetch all restaurants
📈 Future Improvements

User authentication (optional) for personalized lists.

Categorize restaurants (cuisine, price, distance, etc.).

Upvote / downvote for popularity-based selection.

Add animated spinning wheel for visual fun.

Mobile app version using React Native.

🌐 Deployment

This app can be deployed easily on Vercel:

Push your repository to GitHub.

Import the project on Vercel
.

Add environment variables in the Vercel dashboard.

Deploy — your live URL will be ready immediately.

📄 License

MIT License © 2025