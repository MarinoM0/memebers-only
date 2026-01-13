# Members Only

## Overview
Members Only is a message board web application where users can sign up, log in, and post messages.  
Membership status controls access to certain features, and admin users have moderation privileges.

## Live Preview: 
https://members-only-nm7r.onrender.com


## Features

- User authentication with **Passport.js**
- Secure password hashing using **bcrypt**
- Session-based authentication using **express-session**
- Users have:
  - First name & last name
  - Username (email)
  - Password
  - Membership status
  - Optional admin role
- Logged-in users can create messages
- Only members can see message authors and timestamps
- Non-members see message content only
- Admin users can delete any message
- Protected routes and role-based access control
- Sign-up form validation and sanitization
- Password confirmation during registration


## Technologies Used

- **Node.js**
- **Express.js**
- **PostgreSQL**
- **Passport.js** (local strategy)
- **express-session** (session management)
- **bcrypt** (password hashing)
- **express-validator** (form validation)
- **EJS** (server-side rendering)
