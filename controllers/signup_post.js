const {user} = require('../models/schemas.js');

const save = async (em,pass)=>{
    const uSer = new user({email:em,password:pass});
    await uSer.save();
}

module.exports = save;
