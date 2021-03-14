# TransitionEnd
[![Build
Status](https://travis-ci.org/EvandroLG/transitionEnd.svg?branch=master)](https://travis-ci.org/EvandroLG/transitionEnd)

TransitionEnd is an agnostic and cross-browser library to work with event transitionend.

## Browser Support

![Chrome](./images/chrome.png =42x42) | ![Firefox](./images/firefox.png =42x42) | ![IE](./images/ie.png =42x42) | ![Opera](./images/opera.png =42x42) | ![Safari](./images/safari.png =42x42)
--- | --- | --- | --- | --- |
1.0+ ✔ | 4.0+ ✔ | 10+ ✔ | 10.5 ✔ | 3.2+ ✔ |

## Installation
To install Selecting, execute:

```shell
  npm install transitionEnd
```

Or Bower too:
```shell
  bower install transitionEnd
```

Or simply pick up the file from src directory.

## Methods
* transitionEnd(element).<code>bind(callback)</code>
* transitionEnd(element).<code>unbind()</code>
* transitionEnd(element).<code>whichTransitionEnd()</code>

# How does it work?
```js
var box = $("#box"); // or document.getElementById("box")
var foo = $("#foo");

transitionEnd(box).bind(function(){
	foo.addClass("on");
	transitionEnd(box).unbind();
});

var transition = transitionEnd(box).whichTransitionEnd(); // return for example "webkitTransitionEnd"
```
