(function (global) {
	if (!global.APP) {
		global.APP = {};
	}

	//Implement function that will work like a new operator;
	global.APP.createClassInstance = function (MyClass) {
		
	};


	//Example usage:
	/*

	//automatically created
	function MyClass(arg1, arg2, arg3) {
		this.value = arg1 + arg2 + arg3;
	}

	MyClass.prototype.myMethod = function () {}
	// ----------------------

	var inst = new MyClass();

	var inst = createClassInstance(MyClass);


	var inst = global.APP.createClassInstance(MyClass, arg1, arg2, arg3, arg4, arg5);

	//var inst = new MyClass();

	inst.value; //jakas wartosc
	inst.myMethod();


	*/

}(window));
