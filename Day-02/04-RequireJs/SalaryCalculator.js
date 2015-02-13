define([], function(){
	function SalaryCalculator(){
		var _data = {
			basic : 0,
			hra : 0,
			da : 0,
			tax : 0,
			salary : 0
		};

		this.get = function(attrName){
			return _data[attrName];
		};

		this.set = function(attrName, value){
			_data[attrName] = value;
			_triggerChange.call(this, attrName);
			_triggerChange.call(this, "all");
		};

		this.toJSON = function(){
			return _data;
		}
		var _subscribers = {};

		this.addSubscriber = function(attrName, subscriptionFn){
			if (typeof _subscribers[attrName] === "undefined")
				_subscribers[attrName] = [];
			_subscribers[attrName].push(subscriptionFn);
		};

		var _triggerChange = function(attrName){
			_subscribers[attrName] = _subscribers[attrName] || [];
			var self = this;
			_subscribers[attrName].forEach(function(subscriptionFn){
				subscriptionFn.call(self);
			});
		}
	}
	SalaryCalculator.prototype.calculate = function(){
		var gross = this.get('basic') + this.get('hra') + this.get('da');
		var net = gross * ((100-this.get('tax'))/100);
		this.set('salary', net);
	}
	return SalaryCalculator;
});
