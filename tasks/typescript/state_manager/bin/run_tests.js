var Jasmine = require('jasmine');
var jasmineReporters = require('jasmine-reporters');

var jasmine = new Jasmine();

jasmine.loadConfigFile('./jasmine.json');

var betterReporter = new jasmineReporters.TapReporter({});

jasmine.addReporter(betterReporter);

jasmine.execute();