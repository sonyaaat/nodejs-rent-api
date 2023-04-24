// const express = require('express')
// const logger = require('morgan')
// const cors = require('cors')
// const { Server } = require("socket.io");
// const itemsAdminRouter=require("./routes/api/itemsAdmin")
// const itemsUserRouter=require("./routes/api/itemsUser")
// const authRouter=require("./routes/api/auth")
// const ordersRouter=require("./routes/api/orders")
const usersRouter=require("./routes/api/users")

// const app = express()

// const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

// app.use(logger(formatsLogger))
// app.use(cors())
// app.use(express.json())

// app.use('/api/admin/items', itemsAdminRouter)
// app.use("/api/user/items",itemsUserRouter)
// app.use("/api/auth",authRouter)
// app.use("/api/order",ordersRouter)
// app.use("/api/users",usersRouter)
// app.use("/public", express.static("public"));
// app.use((req, res) => {
//   res.status(404).json({ message: 'Not found' })
// })


// app.use((err, req, res, next) => {
//   res.status(500).json({ message: err.message })
// })

// module.exports = app
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
app.use("/api/users",usersRouter)
app.use("/public", express.static("public"));

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message })
})
// const { Server } = require("socket.io");
app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})



// const io = new Server(server, {
//   cors: {
//         origin: '*',
//       }
// });




module.exports = app

const http = require("http");

const { Server } = require("socket.io");
app.use(cors());

const server = http.createServer(app);


const io = new Server(server, {
  cors: {
    origin: "http://localhost:3002",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    socket.join(data);
    console.log(`User with ID: ${socket.id} joined room: ${data}`);
  });

  socket.on("send_message", (data) => {
    socket.to(data.room).emit("receive_message", data);
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });
});

server.listen(3001, () => {
  console.log("SERVER RUNNING");
})