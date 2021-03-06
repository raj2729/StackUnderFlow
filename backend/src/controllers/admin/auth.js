const User = require('../../models/user');
const jwt = require('jsonwebtoken');


const Farmer = require('../../models/farmer');


exports.signup = async (req,res,next) => {
  await User.findOne({ email : req.body.email }).exec((error , user) => {
    if(user) 
    {
      return res.status(400).json({
        message : "Admin Already exists"
      })
    }
  
    const {firstName,lastName,email,password,role,fullName,contactNumber,profilePicture} = req.body;
    const _user = new User({
      firstName,
      lastName,
      email,
      password,
      userName : Math.random().toString() ,
      role : "admin",
      contactNumber,
      profilePicture
    });
    _user.save((error , data) => {
      if(error)
      {
        return res.status(400).json({
          message : error
        })
      }
      if(data){
        return res.status(201).json({
          message : "Admin account created successfully"
        })
      }
    })
    
  })
}

exports.signin = async (req,res,next) => {

  await User.findOne({ email : req.body.email }).exec((error , user) => {
    if(error)
    {
      return res.status(400).json({
        error : error
      })
    }

    if(user)
    {
      // authenticate present in user models
      if(user.authenticate(req.body.password) && user.role === 'admin')
      {
        const token = jwt.sign({_id : user._id , role : user.role} , process.env.JWT_SECRET , {expiresIn : '10h'} )// '1d' => 1 day
        res.cookie('token',token,{expiresIn : '10h'})
        const {_id,firstName,lastName,email,password,fullName,role,contactNumber,profilePicture} = user;

        res.status(200).json({
          token,
          user : {
            _id,firstName,lastName,email,password,fullName,role,contactNumber,profilePicture
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
        message : "Something went wrong"
      })
    }
  })

}

exports.signout = (req,res,next) => {
  res.clearCookie('token');
  res.status(200).json({
    message : "Signout successfully"
  })
}

exports.getCertificates = async(req,res,next) => {
  try{

    let response =  await Farmer.find()
    let certificatePhotos=[];

    // const items = [12, 24, 36]; 
        // const copy = []; 
  
        response.forEach(function (item) { 
            certificatePhotos.push({farmerId : `${item._id}`,certificateId : item.certificatePhoto[0].img}); 
        }); 

    // res.send(response);
    // let certificatePhoto=[];
    // if(response){
    //   certificatePhoto = response.map(data => {
    //     return data.certificatePhoto.img
    //   })
    // }
    // res.send(certificatePhoto);
    res.status(200).json({
      // response : response,
      certificatePhotos
    })

  }
  catch(err) {

    res.send("Error while loading Certificates")
      
  }
}