const express = require('express');
const router = express.Router();
const get_data = require('../controllers/deidentification.js')
const hash = require('../controllers/hasher.js')
const save = require('../controllers/signup_post.js')
const {user} =require('../models/schemas.js')

router.get('/',(req,res)=>{
    return res.render('home',{login_link:"/login",signup_link:'/signup',home_link:'/'});
})
router.route('/login')
.get((req,res)=>{
    return res.render('login');
})
.post(async (req,res)=>{
    const {email,password} = req.body;
    if(!email||!password){
        console.log('400')
        return res.status(400);
    }
    const h = hash(password);
    const result = await user.findOne({ email });
    if(!result){
        return res.end('No user Found!');
    }
    console.log(result);
    return res.redirect('/')
})

router.route('/signup')
.get((req,res)=>{
    return res.render('signup');
})
.post((req,res)=>{
    const body = req.body;
    if(!body.email||!body.password)
    {
        return res.json({"msg":"Invalid form submission"}).status(400);
    }
    save(body.email,hash(body.password));
    return res.redirect('/login');
})

router.route('/upload')
.get((req,res)=>{
    return res.render('upload');
})
.post((req,res)=>{
    const body = req.body;
    if(!body.diagnosis||!body.treatment)
    {
        return res.json({"msg":"invalid form submission"}).status(400);
    }
    pid = hash(body.pname+body.dname);
    const d = get_data({"id":String(pid),'diagnosis':req.body.diagnosis,'treatment':req.body.treatment});
    d.then(val=>{ return res.json(val)})
})

module.exports = router;
