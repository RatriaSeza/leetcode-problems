const obj = {
	test1: function (param1) {
		return this; // Return the object itself to enable method chaining
	},
	test2: function (param2) {
		return "this param 2"; // Return the object itself to enable method chaining
	},
};

const result = obj.test1(1).test2(2);

console.log(result);

const expect = function (actual) {
  return {
    toBe: function (expected) {
      if (actual !== expected) throw new Error('Not Equal')
      return true;
    }, 
    notToBe: function (expected) {
      if (actual === expected) throw new Error('Equal');
      return true;
    } 
  }
};

console.log(expect(1).toBe(3));
