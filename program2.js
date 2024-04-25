module.exports = smallestMissingPositiveInteger;
function smallestMissingPositiveInteger(nums) {
 
  const uniquePositives = [...new Set(nums.filter((num) => num > 0))];

 
  uniquePositives.sort((a, b) => a - b);

  let smallestMissing = 1;

  
  for (let i = 0; i < uniquePositives.length; i++) {
    // If the current number is equal to the smallest missing positive, increment smallestMissing
    if (uniquePositives[i] === smallestMissing) {
      smallestMissing++;
    } else {
      // If the current number is greater than the smallest missing positive, return smallestMissing
      return smallestMissing;
    }
  }

  // If all numbers are in sequence without any gap, return the next integer after the last one
  return smallestMissing;
}

module.exports = smallestMissingPositiveInteger;
