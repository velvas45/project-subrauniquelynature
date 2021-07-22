import bycrpt from 'bcrypt'
import Validator from 'fastest-validator';
import db from '../../../models'
db.sequelize.sync()
const User = db.users

const v = new Validator();

export default  async(req, res) => {
  if(req.method === 'POST'){
    const schema = {
      name: "string|empty:false",
      email: "string|empty:false",
      password: "string|min:6",
    };

    const validate = v.validate(req.body, schema);
    if(validate.length){
        return res.status(404).json({
            status: 'error',
            message: validate
        })
    }
    const user = await User.findOne({
      where: { email: req.body.email },
    });
    console.log(user);
    if(user){
      return res.status(409).json({
        status: 'error',
        message: 'email already exist'
      })
    }

    const password = await bycrpt.hash(req.body.password, 10);
    const data = {
      password,
      name: req.body.name,
      email: req.body.email,
    }
    const createUser = await User.create(data);
    return res.json({
      status: 'success',
      data: createUser
    })
  } 
};
