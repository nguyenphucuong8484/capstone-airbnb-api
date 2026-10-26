import swaggerJSDoc from 'swagger-jsdoc';

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Airbnb Capstone API Documentation',
      version: '1.0.0',
      description: 'Hệ thống API backend cho ứng dụng Airbnb sử dụng Node.js, Express, TypeScript, Prisma & MySQL.',
    },
    servers: [
      {
        url: 'http://localhost:8080',
        description: 'Local Development Server',
      },
    ],
    components: {
      securitySchemes: {
        BearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  apis: ['./src/routers/*.ts', './src/index.ts'],
};

export const swaggerSpec = swaggerJSDoc(options);