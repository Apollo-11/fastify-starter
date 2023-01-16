import { FastifyPluginAsync } from 'fastify'

const root: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/', async function (request, reply) {
    return { hello: 'world' }
  })
  
  fastify.get('/test', async function (request:any, reply:any) {
    const myCollection = this?.mongo?.db?.collection('myCollection')
    const data:any = myCollection?.find({})
    const collection:any = await data.toArray()
    return collection
  })
}

export default root;
