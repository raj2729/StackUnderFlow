const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const farmerSchema = new mongoose.Schema({
  firstName : {
    type : String,
    required : true,
    trim : true
  },
  lastName : {
    type : String,
    required : true,
    trim : true
  },
  cardNumber : {
    type : String,
    required : true,
    trim : true,
    unique : true,
    index : true,
    lowercase : true   
  },
  userName : {
    type : String,
    required : true,
    trim : true,
    unique : true,
    index : true,
    lowercase : true   
  },
  email : {
    type : String,
    required : true,
    trim : true,
    unique : true,
    lowercase : true 
  },
  user_password : {
    type : String,
    required : true
  },
  hash_password : {
    type : String,
    required : true
  },
  role : {
    type : String,
    required : true,
    default : 'farmer'
  },
  contactNumber : {
    type : String
  },
  certificateNumber : {
    type : Number,
    required : true
  },
  certificatePhoto : [
    {
      img : {
        type : String
      }
    }
  ],
  isVerified : {
    type : String,
    required : true,
    default : 'false'
  }
} , { timestamps : true}  );

farmerSchema.virtual("password").set(function(password){
  this.hash_password = bcrypt.hashSync(password , 10);
  this.user_password = password;
})

farmerSchema.virtual("fullName").get(function(){
  return `${this.firstName} ${this.lastName}`
})

farmerSchema.methods = {
  authenticate : function(password) {
    return bcrypt.compareSync(password , this.hash_password);
  }
}

module.exports = mongoose.model("Farmer" , farmerSchema)