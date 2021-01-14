'use strict';
var mongoose = require('mongoose'),
  Vehicle = mongoose.model('Vehicles');

  exports.list_all_vehicles = function(req, res) {
    Vehicle.find({}, function(err, allVehicles) {
      if (err)
        res.send(err);
      res.json(allVehicles);
    });
  };
  
  exports.add_a_vehicle = function(req, res) {
    var new_vehicle = new Vehicle(req.body);
    new_vehicle.save(function(err, vehicleData) {
      if (err)
        res.send(err);
      res.json(vehicleData);
    });
  };
  
  
  exports.load_a_vehicle = function(req, res) {
    Vehicle.findOne({teststats: req.params.teststats}, function(err, task) {
      if (err)
        res.send(err);
      res.json(task.pricehistory);
    });
  };