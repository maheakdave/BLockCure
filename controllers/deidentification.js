const axios = require('axios')
const get_data = async (data)=>{
    try{
        const {data:response} = await axios.post('http://localhost:8000/api',data = data)
        const result = response;
        return response;
    }
    catch(err){
        console.log(err);
        return {"status-code":500,"msg":"Internal Server Error"};
    }
}

module.exports = get_data;
