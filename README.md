## Auth Router

This Express.js router handles user authentication using JSON Web Tokens (JWT) and includes security measures with Helmet.

### Endpoints

- **POST /login:** Authenticates users based on provided credentials and returns a JWT if valid.

### Code Comments

- **Import Modules:**
  - `express`: Framework for building web applications.
  - `jwt`: Library for generating and verifying JSON Web Tokens.
  - `helmet`: Middleware for setting HTTP headers to enhance security.
  - `crypto`: Module for cryptographic functions.

- **Create Router Instance:**
  - `router`: Instance of `express.Router()`.

- **Use Helmet Middleware:**
  - Adds security headers using Helmet middleware.

- **Define Authentication Route:**
  - Handles POST requests to `/login` for user authentication.
  - Extracts email and password from the request body.
  - Generates a JWT if the user is valid; otherwise, returns an error.

- **User Validation Function:**
  - `isValidUser(email, password)`: Checks if the user is valid based on email and password.

- **Get User Role Function:**
  - `getUserRole(email)`: Returns the user role ('admin' or 'user') based on email.

- **Hash Password Function:**
  - `hashPassword(password)`: Hashes passwords using the SHA-256 algorithm.

- **Export Router:**
  - Exports the router for use in other files or modules.

    ## Express App Setup

This file sets up an Express.js application with middleware for handling authentication routes, parsing JSON bodies, enabling CORS, and enhancing security with Helmet.

### Dependencies

- **express:** Web application framework for Node.js.
- **body-parser:** Middleware for parsing request bodies.
- **authRoutes:** Module containing authentication routes.
- **cors:** Middleware for enabling Cross-Origin Resource Sharing.
- **helmet:** Middleware for setting HTTP headers to enhance security.

### App Configuration

- **Create Express App Instance:**
  - `app`: Instance of the Express application.

- **Enable CORS:**
  - Uses `cors` middleware to enable Cross-Origin Resource Sharing.

- **Body Parser Middleware:**
  - Uses `body-parser` middleware to parse JSON bodies.

- **Mount Authentication Routes:**
  - Mounts authentication routes from the `authRoutes` module under the '/auth' path.

- **Helmet Middleware:**
  - Uses `helmet` middleware to set HTTP headers for enhanced security.

- **Export Express App:**
  - Exports the configured Express app for use in other files or modules.
 
  - ## Server Configuration

This file configures the server by loading environment variables from a .env file, initializing the Express app, and starting the server on a specified port.

### Dependencies

- **dotenv:** Loads environment variables from a .env file.
- **server.js:** Module containing the Express app setup.
- **process.env.PORT:** Environment variable or default port (3001).

### Server Initialization

- **Load Environment Variables:**
  - Uses `dotenv` to load environment variables from a .env file.

- **Initialize Express App:**
  - Requires the Express app setup from the `server.js` module.

- **Set Server Port:**
  - Uses the environment variable `process.env.PORT` if available; otherwise, defaults to port 3001.

- **Start Server:**
  - Listens for incoming requests on the specified port.
  - Outputs a message to the console upon successful server startup.

- **Export Express App:**
  - Exports the configured Express app for use in other files or modules.


