const Express = require('express');
const validate = require('express-validation');
const Validation = require('../lib/Validation');
const ArticlesCtrl = require('../controller/ArticlesController');

const router = Express.Router();

router.route('/')
  /** GET /rooms - Get list of rooms */
  .post(ArticlesCtrl.create)
  .get(ArticlesCtrl.list);

router.route('/:id')
  /** GET /rooms - Get list of rooms */
  .post(ArticlesCtrl.edit)
  .get(ArticlesCtrl.show)
  .delete(ArticlesCtrl.destroy);

module.exports = router;