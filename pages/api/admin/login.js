require("dotenv").config();
import bycrpt from "bcrypt";
import Validator from "fastest-validator";
import db from "../../../models";
import jwt from "jsonwebtoken";

db.sequelize.sync();
const User = db.users;

const v = new Validator();

export default  async(req, res) => {
    if(req.method === 'POST'){
        const schema = {
          email: "string|empty:false",
          password: "string|min:6",
        };

        const validate = v.validate(req.body,schema)
        if(validate.length){
            return res.status(400).json({
                status: 'error',
                message: validate
            })
        }
        const user = await User.findOne({
          where: { email: req.body.email },
        });
        if(!user){
            return res.status(400).json({status: 'error', message: 'Email Yang anda Inputkan Salah'})
        }
        const isValidPassword = await bycrpt.compare(req.body.password, user.password)
        if(!isValidPassword){
            return res.status(400).json({ status: "error", message: "password yang anda inputkan salah" });
        }
        const token = jwt.sign({id: user.id, name: user.name, email: user.email}, process.env.JWT_SECRET)
        return res.json({
            status: 'success',
            data: {
                user: user,
                token: token
            }
        })
    }
}
