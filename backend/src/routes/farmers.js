const express = require('express');
const router = express.Router();
const multer = require('multer');
// For file upload
const shortid = require('shortid');
const path = require('path');
const Farmer = require('../models/farmer');


const { signup , signin } = require('../controllers/farmer');

const { validateSignupRequest , validateSigninRequest , isRequestValidated } = require('../validators/auth');

const storage = multer.diskStorage({
  destination : function ( req , file , cb ) {
    cb(null , path.join(path.dirname(__dirname) , 'uploads/' ) );
  },
  filename : function ( req , file , cb ) {
     cb(null , shortid.generate() + '-' + file.originalname);   
  }
})

const upload = multer({
  // dest : 'uploads/'
  storage
})

// var upload = multer({ dest: 'src/uploads' })

router
  .route('/farmer/signin')

  .post(validateSigninRequest , isRequestValidated , signin )

// router
//   .route('/farmer/signup')

//   // .post(validateSignupRequest , isRequestValidated , upload.array('certificatePhoto') ,  signup) 
//   .post(async(req,res,next)=>{
//     await upload.single('image')
//     return res.status(200).json({
//       message : "Successful"
//     })
//   })

router.post('/farmer/signup',upload.single('certificatePhoto'), async (req, res, next)=>{
  // return res.status(200).json({
  //     message : "Successful"
  //   })

  await Farmer.findOne({ email : req.body.email }).exec((error , farmer) => {
    if(farmer) 
    {
      return res.status(400).json({
        message : "Farmer Already exists"
      })
    }

    const {firstName,lastName,email,password,fullName,role,contactNumber,certificateNumber,isVerified} = req.body;

    // const certificatePhotos=[
    //   {
    //     img : req.file.filename
    //   }
    // ];
    // const certificatePhotos=req.file.filename;
  //   let certificatePhotos=[];
  // if(req.file.length > 0){
  //   certificatePhotos = req.files.map(file => {
  //     return {
  //       img : file.filename
  //     }
  //   })
  // }

    // let certificatePhoto=[];
    // if(req.files.length > 0){
    //   certificatePhoto = req.files.map(file => {
    //     return {
    //       img : file.filename
    //     }
    //   })
    // }
  
    const certificatePhoto = [{img : req.file.filename}]
    const _farmer = new Farmer({
      firstName,
      lastName,
      email,
      password,
      cardNumber : Math.random().toString() ,
      userName : Math.random().toString() ,
      role,
      contactNumber,
      certificateNumber,
      isVerified,
      certificatePhoto : [{img : req.file.filename}]
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
          message : "Farmer account created successfully",
          farmer : _farmer,
          file : req.file.filename
        })
      }
    })
    
  })
})

// router
//   .route('/profile')

//   .post(requireSignin , (req,res,next) => {
//      res.status(200).json({
//       user : "profile"
//     })
//   }  ) 

module.exports = router;