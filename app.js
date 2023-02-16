const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const itemsAdminRouter=require("./routes/api/itemsAdmin")
const itemsUserRouter=require("./routes/api/itemsUser")
const authRouter=require("./routes/api/auth")
const ordersRouter=require("./routes/api/orders")

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())

app.use('/api/admin/items', itemsAdminRouter)
app.use("/api/user/items",itemsUserRouter)
app.use("/api/auth",authRouter)
app.use("/api/order",ordersRouter)

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message })
})

module.exports = app
