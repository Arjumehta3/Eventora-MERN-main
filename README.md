# Eventora - Full-Stack Event Booking Platform

<badge color="success">Live Demo</badge>

**Frontend:** https://eventora-frontend-8xin.onrender.com

**Backend API:** https://eventora-backend-3eam.onrender.com

---

Eventora is a full-stack MERN application that allows users to seamlessly browse, register, and book events. It features an administrative dashboard for event organizers to create and manage free and paid events. All bookings can be managed manually by an admin to handle payments directly.

## Features

- **User Authentication:** Secure login and registration with JWT and bcrypt.
- **2FA OTP Verification:**
  - Mandatory Email OTP to activate your account upon registration.
  - Mandatory Email OTP to finalize and secure event ticket bookings.
- **Role-Based Access:**
  - **Admin:** Create, edit, and delete events. Confirm and reject booking requests, mark bookings as 'Paid' or 'Not Paid'. Admin access is restricted to database-authorized users.
  - **User:** Browse events, submit ticket booking requests via OTP, view pending booking status, and cancel bookings.
- **Event Management:** Create free and paid events with descriptions, external image URLs, dates, categories, and seating capacity.
- **Smart Booking System:**
  - Mandatory OTP verification to authorize booking requests.
  - All booking requests enter a 'Pending' queue for admin verification.
  - Seat availability validation to prevent overbooking.
- **Admin Analytics Dashboard:** Track pending requests, total revenue, and confirmed paid clients.
- **Email Notifications:** Automated email notifications upon successful booking confirmation.
- **Sleek UI/UX:** Built with React and Tailwind CSS, featuring interactive UI elements and micro-interactions.

---

## Setup Instructions

### Prerequisites
- Node.js
- MongoDB database (e.g., MongoDB Atlas)

### 1. Environment Variables Configuration

Navigate to `server/.env` and configure:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email_address
EMAIL_PASS=your_email_app_password
PORT=5000
```

**Note:** For Gmail, generate an App Password from your Google Account settings. For the deployed application, configure the required environment variables in your hosting provider.

### 2. Run from the Project Root

```bash
npm install
npm run install:all
npm run dev
```

- `npm run dev` starts both the server and client using concurrently.
- `npm run dev:all` installs dependencies and starts both applications.
- `npm run start` runs the backend and frontend preview together.

### 3. Install Dependencies Separately

**Backend:**
```bash
cd server
npm install --legacy-peer-deps
```

**Frontend:**
```bash
cd client
npm install
```

### 4. Run the Application Locally

**Backend:**
```bash
cd server
npm run dev
```
Backend runs at `http://localhost:5000`.

**Frontend:**
```bash
cd client
npm run dev
```
Frontend runs at `http://localhost:5173` (typically).
