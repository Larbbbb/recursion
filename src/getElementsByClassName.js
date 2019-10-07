// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, currentElement) {
  // your code here
  var elements = [];
  var currentElement = currentElement || document.body;

  if (currentElement.classList.contains(className)) {
  	elements.push(currentElement);
  }

  for (let i = 0; i < currentElement.childNodes.length; i++) {
  	if (currentElement.childNodes[i].classList) {
  		elements.push(...getElementsByClassName(className, currentElement.childNodes[i])); 
  	}
  }

  return elements;
};
