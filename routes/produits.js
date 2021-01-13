const router = require('express').Router();
let Produit = require('../models/produit.model');

router.route('/').get((req, res) => {
    Produit.find()
      .then(produit => res.json(produit))
      .catch(err => res.status(400).json('Error' +err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse (req.body.date);

    const newProduit = new Produit({
        username,
        description,
        duration,
        date,
    
    });

    newProduit.save()
     .then(() => res.json('Produit ajouté!'))
     .catch(err => res.status(400).json('Errors:' + err));
});

router.route('/:id').delete((req, res) => {
    Produit.findByIdAndDelete(req.params.id)
    .then( () => res.json('Produit a été supprimé!'))
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/update/:id').post((req, res) => {
    Produit.findById(req.params.id)
    .then(produit => {
        produit.username = req.body.username;
        produit.description = req.body.description;
        produit.duration = Number(req.body.duration);
        produit.date = Date.parse(req.body.date);

        produit.save()
        .then( () => res.json('Produit mis à jour !!'))
        .catch ( (err) => res.status(400).json('Error:' + err));
    })
    .catch(err => res.status(400).json('Error:' + err));

});

module.exports = router;
