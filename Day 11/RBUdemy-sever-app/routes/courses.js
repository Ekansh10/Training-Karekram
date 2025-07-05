var express = require('express');
const coursesModel = require('../models/courses.model');
var router = express.Router();

/* GET home page. */
router.get('/courses', async function(req, res, next) {
  // res.send("Hello from Courses");
  let courses = await coursesModel.find({}); // find returns a promise
  res.json(courses);
});

router.get('/courses/:id', async function(req, res, next) {
  const idVal = req.params.id;
  let course = await coursesModel.find({id : idVal}); 
  res.json(course);
});

router.delete('/courses/delete/:id', async function(req, res, next) {
  const idVal = req.params.id;
  let course = await coursesModel.deleteOne({id : idVal}); 
  res.json({msg:"Deleted Successfully!!", status:true});
});
module.exports = router;
