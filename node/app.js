//
// DEPENDENCIES
//

var readInput = require('./inputs');
var sec = require('secretary');
var entry = require('./models/log_entry');


//
// INITIALIZATION
//

// Secretary.js logging flags
sec.configure({
    minFlag: 1,
    maxFlag: 3,
    minRunningFlag: 1,
    maxRunningFlag: 3
});

//
// MAIN LOOP
//

setInterval(function(){
    // Add new data to db every 10 seconds
	sec.flag(2).log('Initiating sensor read, standby...');

    // Read each input sensor and store into a log entry

    sec.flag(2).log('Sensor read complete. Storing data.');
    sec.flag(1).log(JSON.stringify(entry));
}, 10000);
