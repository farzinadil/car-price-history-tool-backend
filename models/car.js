'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var VehicleSchema = new Schema({
  vehicleID: {
    type: String,
    required: true
    
  },
  pricehistory:{
    prices: []

  },
  Created_date: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model('Vehicles', VehicleSchema);