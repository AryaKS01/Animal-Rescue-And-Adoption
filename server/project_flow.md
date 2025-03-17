1. **Project Architecture**:

- Follows MVC pattern with separate routes, models and utilities
- Server-side focused application (client-side not shown)
- MongoDB for database, Express.js for backend framework
- Cloudinary for image storage
- Nodemailer for email services
- JWT for authentication

2. **Key Components**:

a) **Models**:

- `adminModel.js`: Stores admin credentials
- `userModel.js`: User profiles with geospatial data (2dsphere index)
- `AdoptPost.js`: Animal adoption listings
- `RescuePost.js`: Animal rescue requests

b) **Routes**:

- `auth.js`: User registration/login/password reset
- `adoptPost.js`: Adoption post management
- `rescuePost.js`: Rescue post operations
- `userProfile.js`: User profile management
- `admin.js`: Admin dashboard and content moderation

c) **Utilities**:

- `mailServer.js`: Email transporter configuration
- `verifyToken.js`: JWT authentication middleware

3. **Core Functionalities**:

**A. Authentication Flow**:

1. User registers → password hashed with bcrypt
2. JWT token generated upon successful login
3. Token verified for protected routes using middleware
4. Google OAuth implemented for social login

**B. Adoption System**:

1. Users create adoption posts with pet details
2. Posts displayed with location-based filtering
3. Interested users send adoption requests via email
4. Admin can moderate/delete posts

**C. Rescue System**:

1. Users report injured animals with location data
2. System finds nearby volunteers (10km radius)
3. Volunteers notified via email about rescue requests
4. Rescue confirmation emails sent to both parties

**D. Admin Dashboard**:

1. Statistics overview (users, volunteers, posts)
2. Content moderation capabilities
3. User management (view/delete users)
4. Post management (restrict/delete posts)

5. **Route Connections**:

a) **User Routes (`auth.js`)**:

- POST /register → Creates user + sends welcome email
- POST /login → Generates JWT token
- POST /googleLogin → Handles OAuth authentication
- POST /forgot-password → Sends password reset email
- POST /reset-password → Updates password

b) **Adoption Routes (`adoptPost.js`)**:

- POST /post → Creates new adoption listing
- GET /getallpost → Lists available animals
- POST /adoptionRequest → Sends adoption request email

c) **Rescue Routes (`rescuePost.js`)**:

- POST /post → Creates rescue request + notifies volunteers
- GET /getallrescues → Lists active rescue requests
- POST /rescueRequest → Coordinates rescue via email

d) **Profile Routes (`userProfile.js`)**:

- GET /getuser → Gets user profile + posts
- PATCH /edit → Updates profile information
- DELETE /deleteUser → Removes user account

e) **Admin Routes (`admin.js`)**:

- GET /dashboard → Returns system statistics
- GET /allUser → Lists all users
- DELETE /deleteUser → Removes users
- GET /allAdoptPost → Manages adoption posts

5. **Data Flow**:

1. Client makes request → Route handler receives
1. Middleware verifies JWT token
1. Controller interacts with MongoDB via Mongoose
1. Cloudinary handles image uploads/deletions
1. Nodemailer sends transactional emails
1. Response sent back to client

1. **Key Services Integration**:

a) **Cloudinary**:

- Image uploads for user profiles/pet listings
- Automatic image deletion when posts/users removed

b) **Email System**:

- 6 different email templates
- Event-based triggers (registration, requests, notifications)
- Uses SMTP with Gmail

c) **Geospatial Features**:

- 2dsphere index for location queries
- Nearby volunteer lookup for rescue requests
- Location-based post filtering

7. **Security Measures**:

- Bcrypt password hashing
- JWT token expiration (10 hours)
- Protected routes with middleware
- Environment variables for sensitive data
- Image validation in schemas

8. **Error Handling**:

- Consistent HTTP status codes
- Try-catch blocks in async operations
- Error messages for failed operations
- Cloudinary cleanup on deletion

9. **Performance Aspects**:

- Indexes for geospatial queries
- Pagination in dashboard lists
- Async email sending
- CORS configuration for cross-origin access

This architecture provides a scalable foundation for an animal rescue platform, with clear separation of concerns and modern web development practices. The flow ensures secure user interactions while maintaining efficient database operations and third-party service integrations.
