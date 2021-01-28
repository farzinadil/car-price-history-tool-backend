'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/vehicleControllers');
  require('dotenv').config();
  const adminKey = process.env.ADMIN_KEY;
  const userKey = process.env.USER_KEY;

  // todoList Routes
  app.route('/'+ adminKey)
    .get(todoList.list_all_vehicles)
    .post(todoList.add_a_vehicle);


  app.route('/' + userKey + '/:vehicleID')
    .get(todoList.load_a_vehicle);

  app.route('/' + adminKey + '/:vehicleID')
    .put(todoList.update_a_vehicle)
    .delete(todoList.delete_a_vehicle);

    


};