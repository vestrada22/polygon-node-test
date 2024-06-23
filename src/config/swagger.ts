import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import { Express } from 'express'

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Polygon Test',
      version: '1.0.0',
      description: 'API Documentation',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Local server',
      },
    ],
    components: {
      schemas: {
        ProductDto: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              description: 'Product name'
            },
            description: {
              type: 'string',
              description: 'Product description'
            },
            price: {
              type: 'number',
              format: 'float',
              description: 'Product price'
            },
            category: {
              type: 'string',
              description: 'Product category'
            },
            stock: {
              type: 'integer',
              description: 'Product stock'
            },
          },
        },
        AddToCartDto: {
          type: 'object',
          properties: {
            cartId: { type: 'integer' },
            productId: { type: 'integer' },
            quantity: { type: 'integer' },
          },
        },
        RemoveFromCartDto: {
          type: 'object',
          properties: {
            cartId: { type: 'integer' },
            productId: { type: 'integer' },
          },
        },
        ShoppingCartEntity: {
          type: 'object',
          properties: {
            id: { type: 'integer' },
            createdAt: { type: 'string', format: 'date-time' },
            updatedAt: { type: 'string', format: 'date-time' },
            cartProducts: {
              type: 'array',
              items: {
                type: 'object',
                properties: {
                  productId: { type: 'integer' },
                  quantity: { type: 'integer' },
                  price: { type: 'number' },
                },
              },
            },
          },
        },
      },
    },
  },
  apis: ['src/application/**/routes.ts',],
}

const swaggerSpecs = swaggerJsdoc(options)

export function setupSwagger(app: Express): void {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs))
}
