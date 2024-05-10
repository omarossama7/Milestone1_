To achieve this, we will need several files and modules. Here's a list of the core classes, functions, methods that will be necessary, along with a quick comment on their purpose:

1. `server.js`: This is the entry point of the application. It sets up the Express server and includes middleware for error handling and parsing JSON requests.

2. `routes/index.js`: This file is responsible for defining the public and private API routes.

3. `controllers/productController.js`: This file contains the logic for handling product-related requests.

4. `controllers/userController.js`: This file contains the logic for handling user-related requests, including authentication and order management.

5. `controllers/adminController.js`: This file contains the logic for handling admin-related requests.

6. `middlewares/authMiddleware.js`: This file contains the middleware for JWT authentication.

7. `models/Product.js`: This file defines the Product model.

8. `models/User.js`: This file defines the User model.

9. `models/Order.js`: This file defines the Order model.

10. `package.json`: This file contains the list of project dependencies.

Let's start with the `package.json` file:

package.json
