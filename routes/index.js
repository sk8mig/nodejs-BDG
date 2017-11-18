var express = require('express');
const tvControllers  = require('../controllers/index');
var router = express.Router();
let array =[1, 2 ];

/* GET home page. */


router.get('/', tvControllers.tvControllers.getArray);
router.get('/shit', tvControllers.tvControllers2.getArray2);

router.get('/getById/:id', tvControllers.tvControllers.getById);
router.delete('/deleteById/:id', tvControllers.tvControllers.deleteById);
router.put('/updateArray/:id', tvControllers.tvControllers.updateArray);

router.put('/test/:id', function(req, res, next) {
  array[req.params.id] = req.body.id;
  res.send({ array:array});
});

router.post('/test', tvControllers.tvControllers.postArray);

module.exports = router;
