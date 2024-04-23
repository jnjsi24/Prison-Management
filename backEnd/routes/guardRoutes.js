const express = require('express');
const router = express.Router();
const guardController = require('../controller/index.guardController');

// Get all list of guards
router.get('/guards', guardController.guards);

// Get details of a specific guard by ID
router.get('/guard/:id', guardController.guard);

// Greet a guard
router.get('/greet/guard', guardController.greet);

// Search for a guard by ID, rank, and years of service
router.get('/search/guard', guardController.searchGuard);

// Remove a guard by ID
router.get('/delete/:id', guardController.removeGuard);



module.exports = router;
