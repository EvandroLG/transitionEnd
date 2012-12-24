/*
  * TransitionEnd
  * https://github.com/evandrolg
  * License: MIT
*/
(function($, window){
	'use strict';

	var Event = function(element, type){
		this.element = element;
		this.type = type;
	};

	Event.prototype = {
		add: function(callback){
			this.callback = callback;
			this.element.addEventListener(this.type, this.callback, false);
		},

		remove: function(){
			this.element.removeEventListener(this.type, this.callback, false);
		}
	};

	var TransitionEnd = function(element){
		if(!element){
			throw 'You need to pass an element as parameter!';
		}
		
		this.element = element instanceof $ ? element[0] : element;
		this.transitionEnd = this.whichTransitionEnd();
		this.event = new Event(this.element, this.transitionEnd);
	};

	TransitionEnd.prototype = {
		whichTransitionEnd: function(){
			var transitions = {
				'MozTransition': 'transitionend',
				'WebkitTransition': 'webkitTransitionEnd',
				'transition': 'transitionEnd',
				'MSTransition': 'msTransitionEnd',
				'OTransition': 'oTransitionEnd'
			};

			for(var t in transitions){
				if(this.element.style[t] !== undefined){
					return transitions[t];
				}
			}
		},

		bind: function(callback){
			this.event.add(callback);
		},

		unbind: function(){
			this.event.remove();
		}
	};

	window.transitionEnd = function(element){
		return new TransitionEnd(element);
	};
}(jQuery, window));