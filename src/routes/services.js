const express = require('express');
const router = express.Router();
const {accounts,users ,writeJSON} = require('../data');



   router.get('/transfer',function(req,res){

    res.render("transfer", {user: users[0]});
   });

   router.post('/transfer',function(req,res){
    accounts[req.body.from].balance -= parseInt(req.body.amount,10);
    accounts[req.body.to].balance += parseInt(req.body.amount, 10);
    writeJSON();
    res.render('transfer', {message: 'Transfer Completed'});
   });

   router.get('/payment',function(req,res){

    res.render("payment", {user: users[0]});
   });
   router.post('/payment',function(req,res){
    accounts.credit.balance -= parseInt(req.body.amount,10);
    accounts.credit.available += parseInt(req.body.amount, 10);
    writeJSON();
    res.render('payment', {message: 'Payment Successful', account: accounts.credit });
   });

   module.exports = router;