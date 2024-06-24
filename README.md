# Installing instructions

1. Clone repository
2. Execute npm install
3. Clone .env.template and create the .env file
4. Execute docker-compose up command for database image
5. Execute npx prisma migrate dev --name init 
6. Execute npx prisma generate
7. Execute npm run dev to start local server
8. Open server on [localhost:3000/api](http://localhost:3000/api-docs/) to see the API Documentation
9. On Postman import the collection on this repository, create some products and test other endpoints


