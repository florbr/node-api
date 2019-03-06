var mongoose     = require('mongoose');

// Test comment

var BearSchema   = new mongoose.Schema({
	name: String
});

module.exports = mongoose.model('Bear', BearSchema);