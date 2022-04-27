var express = require('express');
const market_controller = require('../controllers/market');
var router = express.Router();
// A little function to check if we have an authorized user and continue on 
//or
// redirect to login. 
const secured = (req, res, next) => {
  if (req.user) {
    return next();
  }
  req.session.returnTo = req.originalUrl;
  res.redirect("/login");
}

/* GET home page. */
/*
router.get('/', function(req, res, next) {
  res.render('markets', { title: 'Search Results' });
});
*/
/* GET detail costume page */
router.get('/detail', market_controller.market_view_one_Page);

/* GET create costume page */
router.get('/create',secured, market_controller.market_create_Page);

/* GET costumes */
router.get('/', market_controller.market_view_all_Page);

/* GET create update page */
router.get('/update',secured, market_controller.market_update_Page);

/* GET delete costume page */
router.get('/delete',secured,market_controller.market_delete_Page);

module.exports = router;