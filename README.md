# rhmap-swagger
This module as soon as is initialised adds a new endpoint to the running Cloud app '/api-docs'. This new endpoint returns back the swagger spec using swagger ui.

## Usage
The module should be initialised from your application.js 
file as shown below. This will setup a new endpoint in your application called "/api-docs", so ensure none of your endpoints are called params to avoid conflicts.

```javascript
var swagger = require('rhmap-swagger');
...
// Before var app = express()
// Initialise swagger enpoint
var options = {
  swaggerDefinition: {
    info: {
      title: 'cloud', // Title (required)
      version: '0.2.0', // Version (required)
    },
  },
  apis: ['./lib/route.js'], // Path to the API docs
};

swagger(app,options);

```
