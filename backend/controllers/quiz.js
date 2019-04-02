const express = require('express');
const models = require('../models');

/*
  This is an alternate style for structuring your controllers.
  This style names all route handler functions and all route
  matching is one place, the registerRouter() function, at the
  top of the controller file.
*/
const AltController = {
  registerRouter() {
    const router = express.Router();

    router.get('/quiz', this.index);
    router.post('/', this.create);
    router.put('/:id', this.update);
    router.delete('/:id', this.delete);

    return router;
  },
  index(req, res) {
    res.json({
      msg: "Successful GET to '/quiz' route"
    });
  },
  create(req, res) {
    res.json({
      msg: "Successful POST to '/quiz' route"
    });
  },
  update(req, res) {
    res.json({
      msg: "Successful PUT to '/quiz' route",
      id: req.params.id
    });
  },
  delete(req, res) {
    res.json({
      msg: "Successful DELETE to '/quiz' route",
      id: req.params.id
    });
  },
};


module.exports = AltController.registerRouter();
