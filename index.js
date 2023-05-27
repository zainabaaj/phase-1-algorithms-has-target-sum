function hasTargetSum(array, target) {
  // Write your algorithm here
  const complementSet = new Set();

  for (let i = 0; i < array.length; i++) {
    const complement = target - array[i];
    if (complementSet.has(array[i])) {
      return true;
    }
    complementSet.add(complement);
  }

  return false;
}

/* 
  Write the Big O time complexity of your function here
   Time Complexity: O(n) - The algorithm iterates through the array once.
   Space Complexity: O(n) - The size of the `complementSet` can grow up to the size of the input array in the worst case.

*/

/* 
  Add your pseudocode here
  - Create an empty set called `complementSet`.
  - Iterate through each element `num` in the array:
    - Calculate the complement of `num` as `target - num`.
    - If the complement is already present in `complementSet`, return true since the pair `(num, complement)` adds up to the target.
    - Add the complement to `complementSet`.
  - If the loop completes without finding any matching pairs, return false.

*/

/*
  Add written explanation of your solution here
The solution uses a set to store the complements needed to reach the target sum.
Iterate through each element in the array.
For each element, calculate the complement by subtracting it from the target number.
Check if the complement is already in the set.
If it is, a pair of numbers adds up to the target, so return true.
If it is not, add the complement to the set.
If no matching pair is found after iterating through all elements, return false.
The time complexity of the solution is O(n) and the space complexity is also O(n) in the worst case.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
