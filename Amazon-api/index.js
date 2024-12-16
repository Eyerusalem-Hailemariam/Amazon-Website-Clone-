const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

// Initialize Stripe
const stripe = require("stripe")(process.env.STRIPE_KEY);

const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Success!",
  });
});

// Create Payment Intent Route
app.post("/payment/create", async (req, res) => {
  const total = req.query.total;

  if (!total || total <= 0) {
    return res.status(400).json({ message: "Total must be greater than 0" });
  }

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total, // Stripe expects amount in cents (e.g., $1.00 = 100)
      currency: "usd",
    });

    res.status(201).json({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (error) {
    console.error("Error creating payment intent:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Start the Server
app.listen(5050, (err) => {
  if (err) {
    console.error("Error starting server:", err.message);
    process.exit(1);
  }
  console.log("Server running on http://localhost:5050");
});
