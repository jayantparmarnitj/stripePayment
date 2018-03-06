'use strict';


var mongoose = require('mongoose'),
  Task = mongoose.model('Tasks');
  var stripe = require('stripe')('sk_test_ioWuPLYDSSeSbs0wgIyO3Mpl');
exports.list_card_data = function(req, res) {
  res.json({"message1":"hello"});
};




exports.create_charge = function(req, res) {
  console.log(req.body);
  
  var stripeToken = req.body.data.token;

  var amount = 1000;
  stripe.charges.create({
      card: stripeToken,
      currency: 'usd',
      amount: amount
  },
  function(err, charge) {
      if (err) {
         res.send(500, err);
      }
         var new_task = new Task({
          paymentId: charge.id,
         });
         new_task.save(function(err, task) {
           if (err)
             res.send(err);
           res.json(task);
           console.log('card saved successfully!');
         });
      });

}