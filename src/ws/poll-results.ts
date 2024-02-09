import { FastifyInstance } from "fastify";

export async function pollResults(app: FastifyInstance) {
  app.get('/polls/:pollId/results',  { websocket: true }, (connection, request) => {
    connection.socket.on('message', async (message: string) => {
      connection.socket.send('you send: ' + message)
    })
  })
}