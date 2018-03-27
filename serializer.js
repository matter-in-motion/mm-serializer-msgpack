'use strict';
const msgpack = require('msgpack');

const Serializer = function() {}

Serializer.prototype.__initRequired = true;

Serializer.prototype.__init = function(units) {
  const settings = Object.assign({
    mime: 'application/msgpack'
  }, units.require('core.settings').serializers.msgpack)

  this.mime = settings.mime;
}

Serializer.prototype.encode = function(msg) {
  return msgpack.pack(msg);
}

Serializer.prototype.decode = function(buffer) {
  return msgpack.unpack(Buffer.from(buffer));
};


module.exports = Serializer;
