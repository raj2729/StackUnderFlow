const Farmer = require('../models/farmer');
const jwt = require('jsonwebtoken');

exports.signup = async (req,res,next) => {
  await Farmer.findOne({ email : req.body.email }).exec((error , farmer) => {
    if(farmer) 
    {
      return res.status(400).json({
        message : "Farmer Already exists"
      })
    }

    const {firstName,lastName,email,password,role,fullName,contactNumber,certificateNumber,isVerified} = req.body;

    // let certificatePhoto=[];
    // if(req.files.length > 0){
    //   certificatePhoto = req.files.map(file => {
    //     return {
    //       img : file.filename
    //     }
    //   })
    // }
  
    
    const _farmer = new Farmer({
      firstName,
      lastName,
      email,
      password,
      // userName : Math.random().toString() ,
      role,
      contactNumber,
      certificateNumber,
      certificatePhoto,
      isVerified
    });
    _farmer.save((error , data) => {
      if(error)
      {
        return res.status(400).json({
          message : error
        })
      }
      if(data){
        return res.status(201).json({
          message : "Farmer account created successfully"
        })
      }
    })
    
  })
}

exports.signin = async (req,res,next) => {

  await Farmer.findOne({ email : req.body.email }).exec((error , farmer) => {
    if(error)
    {
      return res.status(400).json({
        error : error
      })
    }

    if(farmer)
    {
      // authenticate present in farmer models
      if(farmer.authenticate(req.body.password))
      {
        const token = jwt.sign({_id : farmer._id , role : farmer.role } , process.env.JWT_SECRET , {expiresIn : '1h'} )// '1d' => 1 day
        const {_id,firstName,lastName,email,password,fullName,role,contactNumber,certificateNumber,certificatePhoto,isVerified} = farmer;

        res.status(200).json({
          token,
          farmer : {
            _id,firstName,lastName,email,password,fullName,role,contactNumber,certificateNumber,certificatePhoto,isVerified
          }
        })

      }
      else{
        res.status(400).json({
          message : "Invalid Password"
        })
      }
    }
    else
    {
      return res.status(400).json({
        message : "Something went wrong, Farmer not found"
      })
    }
  })

}