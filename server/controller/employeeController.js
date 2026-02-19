import Emp from '../models/employee.js'

export const create=async(req,res)=>{
    try{
           const newUser= new Emp(req.body);
           await newUser.save()
            res.status(200).json(newUser)
    }
    catch(err){
        res.status(500).json({message:err.message})

    }

}
 export const createVarify=async(req,res)=>{
    try{
           const{email,password}=req.body;

           const userExist= await Emp.findOne({email})
           if(userExist){
            if(userExist.password===password){
                res.json('success')
            }
            else{
                res.json('the password incotrrect')
            }
           }


    }
    catch(err){
          res.status(500).json({message:err.message})

    }

}