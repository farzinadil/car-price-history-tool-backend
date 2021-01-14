'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/vehicleControllers');

  // todoList Routes
  app.route('/a00000')
    .get(todoList.list_all_vehicles)
    .post(todoList.add_a_vehicle);


  app.route('/fk1000/:vehicleID')
    .get(todoList.load_a_vehicle)
    


};