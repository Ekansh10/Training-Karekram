var express = require('express');
const coursesModel = require('../models/courses.model');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {
  // res.send("Hello from Courses");
  let courses = await coursesModel.find({}); // find returns a promise
  res.json(courses);
});

module.exports = router;
