var express = require('express');
const market_controlers= require('../controllers/market'); 
var router = express.Router();

/* GET home page. */
//router.get('/', function(req, res, next) {
 // res.render('market', { title: 'Search Results Market' });
//});

//router.get('/', market_controlers.market_view_all_Page ); 

// GET request for one market. 
//router.get('/market/:id', market_controller.market_detail); 

/* GET detail market page */ 
router.get('/detail', market_controlers.market_view_one_Page); 
 

module.exports = router;