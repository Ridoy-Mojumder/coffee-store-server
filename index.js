const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000;
require('dotenv').config()

// middleware

app.use(cors());
app.use(express.json())


// coffeeMaster
// CTcOb2hvCwAQygLe




const uri = `mongodb+srv://${process.env.SET_USER}:${process.env.SET_PASS}@cluster0.23qqz48.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
console.log(uri)
// const uri = "mongodb+srv://coffeeMaster:CTcOb2hvCwAQygLe@cluster0.23qqz48.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


app.get('/',(req,res)=>{
    res.send("Coffee making server is running")
})

app.listen(port , ()=>{
    console.log(`Coffee making server is running on port: ${port}`)
})