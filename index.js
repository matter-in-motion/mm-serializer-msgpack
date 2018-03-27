'use strict';
const Serializer = require('./serializer');

module.exports = () => ({
  serializers: { msgpack: new Serializer() }
});
