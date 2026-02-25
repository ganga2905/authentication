import Emp from '../models/employee.js'
import bcrypt from 'bcrypt'

export const create=async(req,res)=>{
    try{
           const newUser= new Emp(req.body);
           // password hash
           const hashed= await bcrypt.hash(newUser.password,10)
           newUser.password=hashed;

        //    console.log(newUser);
           
           const saveData=await newUser.save()
            res.status(200).json(saveData)
    }
    catch(err){
        res.status(500).json({message:err.message})

    }

}

export const createVarify = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await Emp.findOne({ email: email });

        if (!user) {
            return res.json('No record');
        }

        // compare password properly
        const isMatch = await bcrypt.compare(password, user.password);

        if (isMatch) {
            res.json({ status: "success" });
        } else {
            res.json('Password incorrect');
        }

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

//  export const createVarify=async(req,res)=>{
//     try{
//            const{email,password}=req.body;

//            const user= await Emp.findOne({email:email})
//            if(user){
//             if(user.password===password){
//                 const comparing=bcrypt.compare(password,user.password)
//                 res.json('success')
//             }
//             else{
//                 res.json('the password incorrect')
//             }
//            }
//            else{
//             res.json('no record')
//            }


//     }
//     catch(err){
//           res.status(500).json({message:err.message})

//     }

// }