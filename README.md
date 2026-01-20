# FinEdge Journal – Blog Application

A modern blog application built with React and TypeScript, enabling users to view blog posts, read detailed articles, and create new blogs. Designed with a clean and responsive UI, efficient server-state management using TanStack Query, and a mock backend powered by JSON Server.

## Screenshots

Below are screenshots demonstrating the app’s key functionalities:

---

### Blog Home Page (Blog List & Detail View)
_Displays the list of blogs on the left and the selected blog content on the right_

<img width="1773" height="868" alt="Blog Home Page" src="https://github.com/user-attachments/assets/79890d59-fa9e-4eb7-85bd-a8a0a1402b84" />

---

### Create Blog Section
_Form to create and publish a new blog article_

<img width="1601" height="870" alt="Create Blog Section" src="https://github.com/user-attachments/assets/02c666a5-1b50-45a8-b66c-492c8a636820" />

---

### Responsive Layout
_Responsive design optimized for different screen sizes_

<img width="1647" height="768" alt="Responsive Layout" src="https://github.com/user-attachments/assets/2f16ab8d-83eb-49de-a331-ace958ace445" />

---

### Footer Section
_Footer with navigation links and platform information_

<img width="1708" height="476" alt="Footer Section" src="https://github.com/user-attachments/assets/45d92f4c-188f-4d1f-8eb7-355d5645ae9a" />


## Project Overview

This application implements core blog platform features including blog listing, detailed blog viewing, and blog creation. The project was developed as part of a technical assignment to demonstrate frontend development skills, clean UI design, and proper server-state management.

---

## Features & Highlights

### Blog Listing  
Users can view all available blogs displayed in a clean card layout. Each blog card shows category, title, and a short description.

### Blog Detail View  
Users can select a blog to read its full content, including the cover image, categories, publication date, and full text.

### Create New Blog  
Users can create and publish new blog posts using a simple form. Once submitted, the blog list updates automatically.

### Server-State Management  
All API interactions are handled using TanStack Query for efficient data fetching, caching, and synchronization.

### Responsive UI  
The application is fully responsive and optimized for different screen sizes using Tailwind CSS.

---

## Tech Stack

- React.js (Functional Components & Hooks)  
- TypeScript  
- TanStack Query  
- Tailwind CSS  
- shadcn/ui  
- JSON Server  
- Vite  

---

## API Endpoints

| Method | Endpoint | Description |
|------|---------|------------|
| GET | `/blogs` | Fetch all blogs |
| GET | `/blogs/:id` | Fetch a specific blog by ID |
| POST | `/blogs` | Create a new blog |

---

## Sample Blog Object

```json
{
  "id": 1,
  "title": "Future of Fintech",
  "category": ["FINANCE", "TECH"],
  "description": "Exploring how AI and blockchain are reshaping financial services",
  "date": "2026-01-11T09:12:45.120Z",
  "coverImage": "https://images.pexels.com/photos/6801648/pexels-photo-6801648.jpeg",
  "content": "Full blog content..."
}
