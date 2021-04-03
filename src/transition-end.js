/*
  * TransitionEnd
  * author: Evandro Leopoldino Gonçalves <evandrolgoncalves@gmail.com>
  * https://github.com/evandrolg
  * License: MIT
*/
(function (global) {
  'use strict';

  var Event = function (element, type) {
    this.element = element;
    this.type = type;
  };

  Event.prototype = {
    add: function (callback) {
      this.callback = callback;
      this.element.addEventListener(this.type, this.callback, false);
    },

    remove: function () {
      this.element.removeEventListener(this.type, this.callback, false);
    }
  };

  var TransitionEnd = function (element) {
    this.element = element;
    this.transitionEnd = this.whichTransitionEnd();
    this.event = new Event(this.element, this.transitionEnd);
  };

  var memo = null;
  TransitionEnd.prototype = {
    whichTransitionEnd: function () {
      if (memo) {
        return memo;
      }

      var transitions = {
        'transition': 'transitionend',
        'WebkitTransition': 'webkitTransitionEnd',
        'MozTransition': 'transitionend',
        'OTransition': 'oTransitionEnd otransitionend'
      };

      for (var t in transitions) {
        if (this.element.style[t] !== undefined) {
          memo = transitions[t];
          return memo;
        }
      }
    },

    bind: function (callback) {
      this.event.add(callback);
    },

    unbind: function () {
      this.event.remove();
    }
  };

  global.transitionEnd = function (el) {
    if (!el) {
      throw '`transitionEnd` expects to receive a DOM element';
    }

    return new TransitionEnd(el[0] || el);
  };
}(window));
