Product CRUD Application - README
This repository contains two projects: produitBack and produitFront. These projects together form a simple CRUD (Create, Read, Update, Delete) application for managing products.

produitBack - Backend Project
The produitBack folder contains the backend code for the application. It is developed using Spring Boot, a powerful Java framework for building backend applications.

Installation and Setup
To set up the backend project, follow these steps:

Clone this repository to your local machine.
Navigate to the produitBack directory.
Make sure you have Java and Maven installed.
Build and run the backend server using the following command:
mvn spring-boot:run

API Endpoints
The backend provides the following REST API endpoints:

GET /pidev/retrieve-all-produits: Get a list of all products.
GET /pidev/retrieve-produit/{{produit-id}}: Get details of a specific product.
POST /pidev/add-produit: Create a new product.
PUT /pidev/produits/{{idproduit}}: Update an existing product.
DELETE /pidev/remove-produit/{{produit-id}}: Delete a product.

/--------------------------------------------------------------------------------------------------------------------------------------------/

produitFront - Frontend Project
The produitFront folder contains the frontend code for the application. It is developed using Angular, a TypeScript-based framework for building dynamic web applications.

Installation and Setup
To set up the frontend project, follow these steps:

Clone this repository to your local machine if you haven't already.
Navigate to the produitFront directory.
Make sure you have Node.js and npm (Node Package Manager) installed.
Install the required dependencies using the following command:
npm install
Development Server
Run the frontend development server using:
ng serve
The Angular application will be accessible at http://localhost:4200/

Usage
The frontend provides a user-friendly interface for managing products. Users can add new products, view existing products, update product details, and delete products.

Important Note
Please make sure both the backend (produitBack) and the frontend (produitFront) projects are running simultaneously for the full functionality of the application.

Feel free to reach out if you have any questions or need further assistance.
