const crypto = require('crypto')


const hash = (str)=>{
    const algo = "sha256";
    const ENCODING = "hex";
    return crypto.createHash(algo).update(str).digest(ENCODING);
}

module.exports = hash
