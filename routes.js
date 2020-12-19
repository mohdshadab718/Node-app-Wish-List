const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


// //Requiring Keys
const {mongourl} = require('./config/keys');
// // MongooDB Connection
mongoose.connect(mongourl,{useNewUrlParser:true,useUnifiedTopology:true})
    .then(()=>console.log('Database Connected'))
        .catch(err=>console.log('Some Error: ', err))

// //Requiring Schema
const model = require('./models/wish');
// // -------------------------------------------- 

//-------Local Database-----------------
// var data = ['Shaad','Aqeel']

//Get
router.get('/', (req, res) => {//Home
    model.find({})
        .then((data)=>{
            // console.log(data.length);
            //When Using View Engine
            res.render('index',{data}); //<=> res.sendFile(__dirname + '/index.html');
        })
})

router.get('/about', (req, res) => {
    res.send('About Page');
})
//Post
router.post('/sent-data', (req, res) => {
    const Item = new model({
        customId: Math.ceil(Math.random()*1000) + Math.floor(Math.random()*100),
        wish_item:req.body.item
    })

    Item.save().then((data)=>{
        // console.log('Item Saved Successfully', data)
        res.send(data);
    })
  
    //----------------Without DataBase-------------------
    // console.log(req.body);
    // data.push(req.body.addWish);
})

    //Delete
    router.delete('/delete-data/:item',(req,res)=>{
        // console.log(req.params.item);
        model.findOneAndDelete({wish_item:req.params.item}).then((data)=>{
            res.send(data);
        })

        //------------Without DataBase--------------------
        // data = data.filter(wish=>wish!=req.params.item)
    })

module.exports = router;