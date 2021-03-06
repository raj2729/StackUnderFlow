const express = require('express');
const env = require('dotenv');
// const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

// User Routes
const authRoutes = require('./routes/auths');
const adminRoutes = require('./routes/admin/auths');
const farmerRoutes = require('./routes/farmers');
// const categoryRoutes = require('./routes/category');
// const productRoutes = require('./routes/product');
// const cartRoutes = require('./routes/cart');

app=express();

// Environment variables
env.config();

// mongodb
// const url = `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@flipkart.uvjxc.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`;

const url = `mongodb://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0-shard-00-00.hzuxj.mongodb.net:27017,cluster0-shard-00-01.hzuxj.mongodb.net:27017,cluster0-shard-00-02.hzuxj.mongodb.net:27017/${process.env.MONGO_DB_DATABASE}?ssl=true&replicaSet=atlas-vu0mam-shard-0&authSource=admin&retryWrites=true&w=majority`;

// const url = `mongodb+srv://raj2729:Sanghavi@123@flipkart.uvjxc.mongodb.net/ecommerce-flipkart?retryWrites=true&w=majority`;



mongoose.connect(
  url, 
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex : true
  } 
).then(() => {
  console.log('Database Connected');
  
});

app.use(cors());

// app.use(bodyParser());
// Same as
app.use(express.json());
app.use('/public' , express.static(path.join(__dirname , 'uploads' )));

app.use('/api' , authRoutes);
app.use('/api' , adminRoutes);
app.use('/api' , farmerRoutes);
// app.use('/api' , categoryRoutes);
// app.use('/api' , productRoutes);
// app.use('/api' , cartRoutes);

app.listen( process.env.PORT , () => {
  console.log(`Server running on PORT : ${process.env.PORT}`);
  
} )