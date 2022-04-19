var express = require('express');
const market_controlers= require('../controllers/market'); 
var router = express.Router();

/* GET home page. */
//router.get('/', function(req, res, next) {
 // res.render('market', { title: 'Search Results Market' });
//});

//router.get('/', market_controlers.market_view_all_Page ); 

// GET request for one market. 
//router.get('/market/:id', market_controlers.market_detail); 

/* GET detail market page */ 
router.get('/detail', market_controlers.market_view_one_Page); 
/* GET create market page */ 
router.get('/create', market_controlers.market_create_Page); 
/* GET create update page */ 
router.get('/update', market_controlers.market_update_Page); 
 

module.exports = router;