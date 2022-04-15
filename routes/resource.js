var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var market_controller = require('../controllers/market'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// market ROUTES /// 
 
// POST request for creating a market.  
router.post('/market', market_controller.market_create_post); 
 
// DELETE request to delete market. 
router.delete('/market/:id', market_controller.market_delete); 
 
// PUT request to update market. 
router.put('/market/:id', 
market_controller.market_update_put); 
 
// GET request for one market. 
router.get('/market/:id', market_controller.market_detail); 
 
// GET request for list of all market items. 
router.get('/market', market_controller.market_list); 
 
module.exports = router;