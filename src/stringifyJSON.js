// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (obj === null) {
  	return "null";

  } else if (Array.isArray(obj)) {
  	var stringValue = `[`;


  	for (var i = 0; i < obj.length; i++) {
  		if (typeof obj[i] === "undefined" || typeof obj[i] === "function") {
  			continue;
  		}
  		stringValue += `${stringifyJSON(obj[i])}`;
  		if (i < obj.length - 1) {
  			stringValue += `,`;
  		}
  	}
  	stringValue += `]`;
  	return stringValue;

  } else if (typeof obj === "object") {
	var stringValue = `{`;

  	var objectKeys = Object.keys(obj);
  	for (var i = 0; i < objectKeys.length; i++) {
  		if (typeof obj[objectKeys[i]] === "undefined" || typeof obj[objectKeys[i]] === "function") {
  			continue;
  		}
  		stringValue += `"${objectKeys[i]}":${stringifyJSON(obj[objectKeys[i]])}`;
  		if (i < objectKeys.length - 1) {
  			stringValue += `,`;
  		}
  	}
  	stringValue += `}`;
	return stringValue;

  } else if (typeof obj === "string") {
  	return `"${obj}"`;

  } else {
	return obj.toString();
  
  }
};
