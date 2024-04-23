const express = require('express');
const router = express.Router();

const prisonerController = require('../controller/index.prisonController');

// get all list of prisoner
router.get('/prisoners', prisonerController.prisoners);

router.get('/prisoner/:id', prisonerController.prisoner);

router.get('/greet/person', prisonerController.greet);

router.get('/search/prisoner', prisonerController.searchPrisoner);


module.exports = router;
