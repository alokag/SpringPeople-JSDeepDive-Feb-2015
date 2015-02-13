require(['jquery', 'SalaryCalculator', 'SalaryCalculatorView'], function($, SalaryCalculator, SalaryCalculatorView){
	$(function(){
		window.calculator = new SalaryCalculator();

		var view1 = new SalaryCalculatorView(calculator);
		view1.init();
		view1.render();
		view1.$root.appendTo(document.body);

	});
});
	