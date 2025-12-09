# The Hut Event Center Website

A modern, responsive website for The Hut Event Center, Fair Oaks' premier boutique event venue. Built with clean HTML, CSS, and JavaScript to provide an elegant user experience for potential clients looking to book events, overnight stays, or attend public events.

🌐 **Live Site:** [thehutevents.com](https://thehutevents.com)

## About The Venue

The Hut Event Center is a versatile event space located in Fair Oaks, California, offering:
- **Weddings & Receptions**
- **Private Parties & Celebrations**
- **Corporate Gatherings & Meetings**
- **Memorials & Special Events**
- **Overnight Accommodations**
- **Public Events & Classes**

## Features

### 🎨 User Experience
- **Responsive Design** - Fully optimized for desktop, tablet, and mobile devices
- **Image Carousel** - Beautiful slideshow showcasing the venue and past events
- **Intuitive Navigation** - Easy access to booking, overnight stays, public events, and contact information
- **SEO Optimized** - Includes sitemap.xml and robots.txt for search engine visibility

### 📄 Pages & Sections
- **Home** (`/`) - Landing page with image carousel and venue introduction
- **Book an Event** (`/bookevent/`) - Information and booking form for private events
- **Stay Overnight** (`/overnight/`) - Details about overnight accommodation options
- **Public Events** (`/publicevents/`) - Calendar and information about upcoming public events and classes
- **Photos** (`/photos/`) - Gallery showcasing the venue and past events
- **Contact Us** (`/contact/`) - Contact form and venue information

### 🛠 Technical Features
- Clean, semantic HTML5 structure
- Custom CSS styling for a professional appearance
- JavaScript for interactive elements (carousel, forms, etc.)
- Optimized images for fast loading times
- Custom domain configuration with GitHub Pages

## Project Structure

```
HutWebsite/
├── bookevent/          # Event booking page
├── contact/            # Contact form and information
├── css/                # Stylesheets
├── images/             # Image assets
│   ├── frontpage/      # Homepage carousel images
│   └── event/          # Event-specific photos
├── js/                 # JavaScript files
├── overnight/          # Overnight stay information
├── photos/             # Photo gallery
├── publicevents/       # Public events and classes
├── index.html          # Homepage
├── robots.txt          # Search engine crawling rules
├── sitemap.xml         # Site structure for SEO
└── CNAME               # Custom domain configuration
```

## Technologies Used

- **HTML5** - Semantic markup and structure
- **CSS3** - Modern styling and responsive design
- **JavaScript** - Interactive features and dynamic content
- **GitHub Pages** - Free, reliable hosting with custom domain support

## Deployment

This website is deployed using GitHub Pages with a custom domain:

1. The repository is configured to serve from the `main` branch
2. Custom domain `thehutevents.com` is configured via the CNAME file
3. Automatic deployment on push to main branch
