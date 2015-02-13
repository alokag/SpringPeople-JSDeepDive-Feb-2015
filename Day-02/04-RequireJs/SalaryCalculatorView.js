define(['jquery', 'handlebars', 'text!calculatorTemplate.html'], function($, Handlebars, calculatorTemplate){
	function SalaryCalculatorView(calculator){
		var $root = this.$root = $("<div></div>")
		this.init = function(){
			var self = this;
			calculator.addSubscriber('all', function(){
				//$("#divResult", $root).html(this.get('salary'));
				self.render();
			});


			//UI Events
			$root.on("change", "#txtBasic", function(){
				calculator.set('basic', parseInt(this.value,10));
			});
			$root.on("change", "#txtHra", function(){
				calculator.set('hra', parseInt(this.value,10));
			});
			$root.on("change", "#txtDa", function(){
				calculator.set('da', parseInt(this.value,10));
			});
			$root.on("change", "#rangeTax", function(){
				calculator.set('tax', parseInt(this.value,10));
			});
			$root.on("click", "#btnCalculate", function(){
				calculator.calculate();
			});
		}

		this.render = function(){
			
			var templateFn = Handlebars.compile(calculatorTemplate);
			var generatedHTML = templateFn(calculator.toJSON());
			$root.html(generatedHTML);
		}

	};
	return SalaryCalculatorView;
});
