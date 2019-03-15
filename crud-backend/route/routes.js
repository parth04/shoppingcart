var express = require ('express');
var router = express.Router();

module.exports = router;
const Item = require('../model/itemSchema') 

//Retrieving Data
router.get('/getItem', (req, res, next) => {
    Item.find((err, data) => {
        if(err){
            res.json(err);
        }
        else{
            res.json(data)
        }
    });
});

//Inserting data
router.post('/postItem', (req, res, next) => {
    let newItem = new Item({
        itemName: req.body.itemName,
        itemQuantity: req.body.itemQuantity,
        itemBought: req.body.itemBought,
        itemPrice: req.body.itemPrice
    });
    newItem.save((err, data) => {
        if(err){
            res.json(err);
        }
        else{
            res.json('Item has been added succesfully')
        }
    })
});

//Updting data
router.put('/putItem/:id', (req, res, next) => {
    Item.findOneAndUpdate({_id: req.params.id}, {
        $set:{
            itemName: req.body.itemName,
            itemQuantity: req.body.itemQuantity,
            itemBought: req.body.itemBought,
            itemPrice: req.body.itemPrice,
        }
    },
    (err, result) => {
        if(err){
            res.json(err)
        }
        else{
            res.json(result)
        }
    });
});

//Deleting data
router.delete('/deleteItem/:id', (req, res, next) => {
    Item.deleteOne({_id: req.params.id}, (err, result) => {
        if(err){
            res.json(err)
        }
        else{
            res.json(result)
        }
    });
});