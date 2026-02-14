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