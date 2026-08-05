# 🏛️ Heritage Junction

> **A complete Travel & Tourism Management Platform built with Laravel, React, Inertia.js and TypeScript.**

Heritage Junction is a modern full-stack web application designed to simplify the management of travel packages, bookings, destinations, and customers. It provides a seamless experience for travelers while equipping administrators with a powerful dashboard to manage every aspect of the business from a single interface.

---

## ✨ Features

### 🌍 Customer Portal

* Browse travel destinations
* Explore detailed destination pages
* View heritage sites, foods & cultural highlights
* Browse tour packages
* Package pricing by vehicle
* Complete itinerary view
* Package FAQs
* Secure user authentication
* Profile management
* Online package booking
* Multiple traveler support
* Aadhaar upload for every traveler
* Booking confirmation flow

---

### 🛠️ Admin Dashboard

#### 📦 Package Management

* Create packages
* Edit package information
* Activate / Deactivate packages
* Duplicate packages
* Delete packages
* Manage pricing options
* Manage itineraries
* Manage inclusions
* Manage exclusions
* Manage package destinations
* Automatic starting price calculation

---

#### 📅 Booking Management

* View all bookings
* Search bookings
* Booking detail page
* Booking cancellation
* Traveler verification
* Aadhaar document review
* Booking timeline support
* Customer information
* Package information

---

#### 👥 User Management

* View all users
* User statistics
* Booking history
* Total spending
* Account status
* Block / Unblock users

---

#### ❓ FAQ Management

* Create FAQs
* Edit FAQs
* Delete FAQs
* Category-based FAQs

---

#### 🗺️ Destination Management

* Destination details
* Heritage sites
* Foods
* Cultural highlights
* Hero & banner images
* Destination-package mapping

---

## 🚀 Tech Stack

### Backend

* Laravel
* PHP
* MySQL
* Eloquent ORM
* Inertia.js

### Frontend

* React
* TypeScript
* Tailwind CSS
* Lucide React

### Authentication

* Laravel Starter Kit
* Session Authentication

### Development

* Composer
* NPM
* Vite

---

## 🏗️ System Architecture

```text
                Browser
                   │
                   ▼
         React + TypeScript
              (Inertia.js)
                   │
                   ▼
         Laravel Controllers
                   │
                   ▼
         Eloquent ORM Models
                   │
                   ▼
               MySQL Database
```

---

## 📁 Project Structure

```text
Heritage-Junction/

├── app/
│   ├── Http/
│   ├── Models/
│   └── Providers/
│
├── database/
│   ├── migrations/
│   ├── seeders/
│   └── factories/
│
├── resources/
│   ├── js/
│   │   ├── Pages/
│   │   ├── Components/
│   │   └── Layouts/
│   └── css/
│
├── routes/
├── public/
├── storage/
└── config/
└── bootstrap/
└── .env
└── package.json
└── composer.json
```

---

# 📂 Database Design

The application revolves around a relational database designed specifically for tourism management.

### Core Tables

* Users
* Packages
* Destinations
* Bookings
* Travelers
* FAQs

### Package Module

* packages
* package_pricings
* package_itineraries
* package_inclusions
* package_exclusions
* destination_package

### Destination Module

* destinations
* destination_images
* heritage_sites
* foods

### Booking Module

* bookings
* booking_travelers

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/devKartikeya/Heritage-Junction.git
```

### Move inside project

```bash
cd Heritage-Junction
```

### Install PHP dependencies

```bash
composer install
```

### Install Node dependencies

```bash
npm install
```

### Configure environment

```bash
cp .env.example .env
```

Update your database credentials inside the `.env` file.

### Generate application key

```bash
php artisan key:generate
```

### Run migrations

```bash
php artisan migrate
```

### Create storage link

```bash
php artisan storage:link
```

### Start Laravel server

```bash
php artisan serve
```

### Start Vite

```bash
npm run dev
```

---

## 📦 Main Modules

| Module                 | Status |
| ---------------------- | :----: |
| Authentication         |    ✅   |
| User Management        |    ✅   |
| Booking Management     |    ✅   |
| Package Management     |    ✅   |
| Destination Management |    ✅   |
| Traveler Verification  |    ✅   |
| FAQ Management         |    ✅   |
| Admin Dashboard        |    ✅   |

---

## 🔐 Security

* CSRF Protection
* Form Validation
* Route Protection
* Authentication Middleware
* Mass Assignment Protection
* Database Transactions
* File Upload Validation

---

## 💡 Highlights

* Modern responsive UI
* Fully component-based architecture
* Reusable React components
* Clean Laravel MVC architecture
* Transaction-based booking creation
* Dynamic package pricing
* Traveler verification workflow
* Modular and scalable codebase
* Inertia-powered SPA experience
* Type-safe frontend with TypeScript

---

## 🛠️ Built With

* Laravel
* React
* TypeScript
* Inertia.js
* Tailwind CSS
* MySQL
* Vite
* PHP
* Composer
* NPM

---

## 👨‍💻 Author

**Kartikeya Mishra**

Full Stack Web Developer

---

## 📄 License

This project is proprietary software. All rights are reserved.

This repository is intended for portfolio and demonstration purposes only. Copying, redistributing, modifying, or using any part of this project without explicit permission from the author is prohibited.