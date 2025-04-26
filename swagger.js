import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

// Minimal konfiguratsiya
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Express API',
      version: '1.0.0',
      description: 'Express API dokumentatsiyasi',
    },
  },
  apis: ["./router/userPlus.router.js", "./router/cors_router.js"], // Bo'sh array
};

export const setupSwagger = (app) => {
  try {
    const swaggerSpec = swaggerJSDoc(options);
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
    console.log('Swagger setup completed');
  } catch (error) {
    console.error('Swagger setup failed:', error);
  }
};