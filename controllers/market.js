var market = require('../models/market'); 
 
// List of all markets 
exports.market_list = function(req, res) { 
    res.send('NOT IMPLEMENTED: market list'); 
}; 
 
// for a specific market. 
exports.market_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await market.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
 
// Handle market create on POST. 
exports.market_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new market(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    document.itemType = req.body.itemType; 
    document.Quantity = req.body.Quantity; 
    document.price = req.body.price; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle market delete form on DELETE. 
exports.market_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: market delete DELETE ' + req.params.id); 
}; 
 
// Handle market update form on PUT. 
exports.market_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: market update PUT' + req.params.id); 
}; 

// List of all markets
exports.market_list = async function(req, res) {
    try{
    themarket = await market.find();
    res.send(themarket);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
};

// VIEWS
// Handle a show all view
exports.market_view_all_Page = async function(req, res) {
    try{
    themarket = await market.find();
    res.render('market', { title: 'market Search Results', results: themarket });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
};

