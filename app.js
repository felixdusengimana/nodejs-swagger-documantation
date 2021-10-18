const express = require("express")
const SwaggerJsDoc = require("swagger-jsdoc");
const SwaggerUI = require("swagger-ui-express");



const PORT = process.env.PORT || 8080;
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Customer Api',
      description: "Customer Api Documention",
      contact: {
        name: "Phelix Dusengimana",
        email: "phelixdusengimana@gmail.com"
      },
      servers: [`https://localhost:${PORT}`]
    },
  },
  // ['routes/*.js']: for complex apis
  apis: ['app.js']
}

const SwaggerDocs = SwaggerJsDoc(swaggerOptions);
const app = express();
app.use("/api-docs", SwaggerUI.serve, SwaggerUI.setup(SwaggerDocs));

//ROUTES
/**
 * @swagger
 * /api/customers:
 *  get:
 *    description: Get All customers
 *    responses:
 *      '200':
 *          description: Successful Message
 *      '404':
 *          description: Error Message
 */
app.get("/api/customers", (req, res) => {
  res.send("Customers data")
})
app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`)
})