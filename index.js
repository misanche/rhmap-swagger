const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

/**
 * Exposes a route automatically at <host>/params
 * @param app Express app
 * @param apiKey RHMAP Platform 
 */
module.exports = function(app, options) {

  var swaggerSpec = swaggerJSDoc(options);

  app.use('/api-docs', swaggerUI.serve);
  app.use('/api-docs', swaggerUI.setup(swaggerSpec));

  app.get('/api-docs.json', function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });
}