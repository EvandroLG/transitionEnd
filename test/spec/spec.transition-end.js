describe('transition-end', function(){
	beforeEach(function(){
		var that = this;
		this.mustKill = true;

		var createElement = (function(){
			$('body').append('<div id="element"></div>');
			that.jQueryElement = $('#element');
			that.DOMElement = document.getElementById('element');
		}());
	});
	
	afterEach(function(){
		var that = this;
			
		var killElement = (function(){
			if(that.mustKill){
				that.jQueryElement.remove();
			
				delete that.jQueryElement;
				delete that.DOMElement;
			}
		}());
	});

	describe('instance', function(){
		it('should exist function transitionEnd', function(){
			expect(transitionEnd).toBeDefined();
		});

		it('should throw exception if function transitionEnd not receive parameter when called', function(){
			var instaceFunction = function(){
				transitionEnd();
			};

			expect(instaceFunction).toThrow();
		});
		
		it('should accept jquery object', function(){
			var jQueryElement = this.jQueryElement;
			var instaceFunction = function(){
				transitionEnd(jQueryElement);
			};

			expect(instaceFunction).not.toThrow();
		});
		
		it('should accept dom object', function(){
			var DOMElement = this.DOMElement;
			var instaceFunction = function(){
				transitionEnd(DOMElement);
			};

			expect(instaceFunction).not.toThrow();
		});
		
		it('should exist function bind into the transitionEnd', function(){
			var transition = transitionEnd(this.DOMElement);
			spyOn(transition, 'bind');
			transition.bind();

			expect(transition.bind).toHaveBeenCalled();
		});

		it('should exist function unbind into the transitionEnd', function(){
			var transition = transitionEnd(this.DOMElement);
			spyOn(transition, 'unbind');
			transition.unbind();

			expect(transition.unbind).toHaveBeenCalled();
		});

		it('should exist function whichTransition into the transitionEnd', function(){
			var transition = transitionEnd(this.DOMElement);
			spyOn(transition, 'whichTransition');
			transition.whichTransition();

			expect(transition.whichTransition).toHaveBeenCalled();
		});
	});

	describe('event', function(){
		it('should call function passed in bind after the execution of a transition', function(){});
	});
});