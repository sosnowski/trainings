(function (global) {
    var EE;

    if (!global.APP) {
        global.APP = {};
    }

    EE = function () {
        //store the listeners somewhere
        this.listeners = {};
    };

//	var ee = new EE();
//
//	var removeListener = ee.on('test', function (arg1, arg2) {
//		console.log(arg1, arg2); //1, 2
//	});
//
//	ee.emit('test', 1, 2); // in console: 1, 2
//
//	removeListener(); //removes my listener from the event emitter;
//
//	ee.emit('test'); //nothing will execute

    global.APP.EventEmitter = EE;

}(window));
