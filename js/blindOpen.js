function blindOpen(){

	var self = this;

	this.propsObj = {
		unitNum : 0,
		stateNum : 0, // defalut position is to close the blind at 0%
		initState : false,
		delayTimeoutNum : 1000
	};

	this.instanceObj = {
		timeout : null
	}

	this.checkUnit = function(){
		// turn on moter
		this.moterTurn(true);
		// add setime out to acompansate delay
		

	};





	this.moterTurn = function(turnBln){
		if(turnBln === true){
			// turn moter clockwise
		}else{
			// turn moter counter clockwise
		}
	};
	this.moterStop = function(){
		// stop moter
	};

	this.openMax = function(){
		this.stopMoter();
	};

	this.closeMax = function(){
		if(this.propsObj.initState === true){
			self.stopMoter();
		}else{
			console.log("Calibrating blind opening maxiumn and mininum position......");
			self.instanceObj.timeout = setTimeout(
				self.moterTurn(false), self.propsObj.delayTimeoutNum
			);
		}
	};



	this.setupEvent = function(){
		// add EventListener for openMax sensor , callback openMax
		// add EventListener for closeMax sensor , call back closeMax
	};

	this.removeEvent = function(){

	};

	this.init = function(){
		console.log("Before engage the motor, please close your blind all the way, then place the stop nobe at the very end of the maxiumn closing sensor and engage the motor.");
		this.checkUnit();	


		this.propsObj.initState = true;
	};
	this.destory = function(){
		this.removeEvent();
		delete this;
	};
}