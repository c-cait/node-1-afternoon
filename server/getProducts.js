const products = require('../products.json');


module.exports = {
    getProducts: (req, res) => {
        // res.status(200).send(products)
        if(req.query.price){
            var items = products.filter(element => {
                return element.price >= parseInt(req.query.price)
                
            })
            return res.status(200).send(items)
            
        }
        res.status(500).send(products)
    },

    getProductById: (req,res) => {
        var item = products.find(element => {
            return element.id === parseInt(req.params.id)
        })
       if(!item){
           res.status(500).send('item not in list')
       }

       res.status(200).send(item)
    
    }
}