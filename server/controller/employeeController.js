import Emp from '../models/employee.js'

export const create=async(req,res)=>{
    try{
           const newUser= new Emp(req.body);
           const saveData=await newUser.save()
            res.status(200).json(saveData)
    }
    catch(err){
        res.status(500).json({message:err.message})

    }

}
 export const createVarify=async(req,res)=>{
    try{
           const{email,password}=req.body;

           const user= await Emp.findOne({email:email})
           if(user){
            if(user.password===password){
                res.json('success')
            }
            else{
                res.json('the password incorrect')
            }
           }
           else{
            res.json('no record')
           }


    }
    catch(err){
          res.status(500).json({message:err.message})

    }

}