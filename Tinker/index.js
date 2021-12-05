'use strict';

var removeDuplicates = function (nums) {
	nums = [...new Set(nums)];
	return nums;
};

console.log(removeDuplicates([1, 1, 2]));
