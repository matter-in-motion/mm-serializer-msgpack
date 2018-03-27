'use strict';
const test = require('ava');
const Serializer = require('./serializer');

const s = new Serializer();

test('encodes simple call', t => {
  const msg = [ 'test.call' ];
  t.deepEqual(s.decode(s.encode(msg)), msg);
})

test('encodes simple call with string data', t => {
  const msg = [ 'test.call', 'string' ];
  t.deepEqual(s.decode(s.encode(msg)), msg);
})

test('encodes simple call with empty string data', t => {
  const msg = [ 'test.call', '' ];
  t.deepEqual(s.decode(s.encode(msg)), msg);
})

test('encodes simple call with boolean data', t => {
  const msg1 = [ 'test.call', true ];
  t.deepEqual(s.decode(s.encode(msg1)), msg1);

  const msg2 = [ 'test.call', false ];
  t.deepEqual(s.decode(s.encode(msg2)), msg2);
})

test('encodes simple call with numbers data', t => {
  const msg1 = [ 'test.call', 0 ];
  t.deepEqual(s.decode(s.encode(msg1)), msg1);

  const msg2 = [ 'test.call', 1000 ];
  t.deepEqual(s.decode(s.encode(msg2)), msg2);
})

test('encodes simple call with object data', t => {
  const msg1 = [ 'test.call', {} ];
  t.deepEqual(s.decode(s.encode(msg1)), msg1);

  const msg2 = [ 'test.call', { test: 'test' } ];
  t.deepEqual(s.decode(s.encode(msg2)), msg2);
})
