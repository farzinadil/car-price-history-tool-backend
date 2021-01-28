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
  
  exports.update_a_vehicle = function(req, res) {
    Vehicle.findOneAndUpdate({vehicleID: req.params.vehicleID}, {pricehistory: req.body.pricehistory}, {useFindAndModify:false}, function(err, vehicle) {
      if (err)
        res.send(err);
      res.json(vehicle);
    });
  }
  
  exports.load_a_vehicle = function(req, res) {
    Vehicle.findOne({vehicleID: req.params.vehicleID}, function(err, vehicle) {
      if (err)
        res.send(err);
      res.json(vehicle.pricehistory);
    });
  };

  exports.delete_a_vehicle = function(req, res) {
    Vehicle.remove({vehicleID: req.params.vehicleID}, function(err, vehicle) {
      if (err)
        res.send(err);
      res.json({ message: 'Task successfully deleted' });
    });
  };