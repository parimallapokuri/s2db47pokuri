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
 
// Handle market delete on DELETE. 
exports.market_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await market.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
 
// Handle market update form on PUT. 
exports.market_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await market.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.market_type)  
               toUpdate.market_type = req.body.market_type; 
        if(req.body.cost) toUpdate.cost = req.body.cost; 
        if(req.body.size) toUpdate.size = req.body.size; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
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

// Handle a show one view with id specified by query 
exports.market_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await market.findById( req.query.id) 
        res.render('marketdetail',  { title: 'market Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
