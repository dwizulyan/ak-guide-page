import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { cors } from "hono/cors";
import { logger } from "hono/logger";

import { stage } from "@/routes";

const app = new Hono()

app.use("*", cors())
app.use("*", logger())

app.route("/api/v1/stage", stage)

const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
