import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/MongoDb.js";
import ImportData from "./DataImport.js";
import productRoute from "./Routes/ProductRoutes.js";
import { errorHandler, notFound } from "./Middleware/Errors.js";
import userRouter from "./Routes/UserRoutes.js";
import orderRouter from "./Routes/orderRoutes.js";
import mongoose from "mongoose";

dotenv.config();
connectDatabase();
const app = express();
app.use(express.json());

// API
app.use("/api/import", ImportData);
app.use("/api/products", productRoute);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);
app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});

// Connect to MongoDB
mongoose.connect("mongodb+srv://hr360fyp:ZhcrE2oyzf9qw2Ui@hr360.jdb3jcg.mongodb.net/shop?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

// Define message schema
const messageSchema = new mongoose.Schema({
  recipient: String,
  message: String,
  timestamp: String,
});

// Create message model
const Message = mongoose.model("Message", messageSchema);

// Save a new message to MongoDB
app.post("/messages", (req, res) => {
  const { recipient, message, timestamp } = req.body;

  const newMessage = new Message({
    recipient,
    message,
    timestamp,
  });

  newMessage.save((err) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error saving the message");
    } else {
      res.status(200).send("Message saved successfully");
    }
  });
});
// Retrieve messages for a specific recipient
app.get("/messages/:recipient", (req, res) => {
  const recipient = req.params.recipient;

  Message.find({ recipient }, (err, messages) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error retrieving messages");
    } else {
      res.status(200).json(messages);
    }
  });
});

// Define a calendar event schema and model
const eventSchema = new mongoose.Schema({
  title: String,
  start: Date,
  end: Date,
});
const Event = mongoose.model("Event", eventSchema);


// Save a new event
app.post("/api/events", (req, res) => {
  const { title, start, end } = req.body;
  const newEvent = new Event({
    title,
    start,
    end,
  });
  newEvent.save((err, savedEvent) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error saving the event");
    } else {
      res.status(201).json(savedEvent);
    }
  });
});

// Retrieve all events
app.get("/api/events", (req, res) => {
  Event.find({}, (err, events) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error retrieving events");
    } else {
      res.status(200).json(events);
    }
  });
});

// Update an event
app.put("/api/events/:eventId", (req, res) => {
  const { eventId } = req.params;
  const { title } = req.body;
  Event.findByIdAndUpdate(
    eventId,
    { title },
    { new: true },
    (err, updatedEvent) => {
      if (err) {
        console.error(err);
        res.status(500).send("Error updating the event");
      } else {
        res.status(200).json(updatedEvent);
      }
    }
  );
});

// Delete an event
app.delete("/api/events/:eventId", (req, res) => {
  const { eventId } = req.params;
  Event.findByIdAndRemove(eventId, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error deleting the event");
    } else {
      res.sendStatus(204);
    }
  });
});
// Assuming you have set up your server using Express.js and connected to MongoDB

app.post("/messages", (req, res) => {
  const newMessage = req.body; // Assuming the request body contains the new message object

  // Save the new message to MongoDB
  db.collection("messages")
    .insertOne(newMessage)
    .then(() => {
      res.status(200).send("Message saved successfully");
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send("Error occurred while saving the message");
    });
});

// ERROR HANDLER
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 1000;

app.listen(PORT, console.log(`Server is running on port ${PORT}`));
