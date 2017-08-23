const serve = require('serve')
const server = serve(__dirname + '/build', {
  port: 3100,
  ignore: ['node_modules']
})
