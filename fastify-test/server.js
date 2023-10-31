'use strict'

const {createRandomData} = require('../data/data');

module.exports = async function (fastify, opts) {
  fastify.get('/', async (request, reply) => {
    reply.send(createRandomData('fastify'))
  })
}
