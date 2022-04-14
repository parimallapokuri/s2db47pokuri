var market = require('../models/market'); 
 
// List of all markets 
exports.market_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: market list'); 
}; 
 
// for a specific market. 
exports.market_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: market detail: ' + req.params.id); 
}; 
 
// Handle market create on POST. 
exports.market_create_post = function(req, res) { 
    res.send('NOT IMPLEMENTED: market create POST'); 
}; 
 
// Handle market delete form on DELETE. 
exports.market_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: market delete DELETE ' + req.params.id); 
}; 
 
// Handle market update form on PUT. 
exports.market_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: market update PUT' + req.params.id); 
}; 