import fastify from 'fastify'

const app = fastify()

app.get('/', async () => {
  return "HELLO NLW"
})

app.listen({ port: 3333 }).then(() => {
  console.log('Server is running!')
})