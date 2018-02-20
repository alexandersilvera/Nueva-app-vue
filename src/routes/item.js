const express = require('express');
const router = express.Router();

const Item = require('../models/item');


// get data
router.get('/', (req, res) => {
    Item.find(function (err, items) {
        if (err) { throw err; }
        else {
            res.json(items);
        }
    })
});

// add data
router.post('/', (req, res) => {
    const item = new Item(req.body);
    item.save()
      .then(item => {
        res.status(200).json({item: 'Item agregado!'});
      })
      .catch(err => {
        res.status(400).send({item: 'Error al agregar el item'});
      });
});

router.put('/:id', (req, res) => {
  Item.findById(req.params.id, (err, item) {
    if (!item) {
      return next(new Error('no se pudo cargar documento'));
    }else {
      item.name = req.body.name;
      item.apellido = req.body.apellido;
      item.celular = req.body.celular;
      item.correo = req.body.correo;
      item.pase = req.body.pase;
      item.consulta = req.body.consulta;
      item.save()
        .then(item => {
          res.json('Actualización completa');
        })
        .catch(err => {
          res.status(400).send('no se pudo actualizar');
        });
    }
  })
});

router.delete('/:id', (req, res, next) => {
  Item.findByIdAndRemove(req.params.id, function (err, item) {
    if (err) { res.json(err);}
    else {
      res.json('item eliminado satisfactoriamente');
    }
  })
});

module.exports = router;