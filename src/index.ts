import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import userRouter from './routers/userRouter.js'
import { cors } from 'hono/cors'

const app = new Hono()
app.use('*', cors({
  origin: ["http://localhost:3000"]
}))

app.route('/users', userRouter)
app.get('/', (c) => {
  return c.text('Hello Hono!')
})

serve({
  fetch: app.fetch,
  port: 3001
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})
