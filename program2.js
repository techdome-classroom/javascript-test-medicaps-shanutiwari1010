function smallest_missing_positive_integer(arr) {
  const uniquePositiveArr = Array.from(new Set(arr.filter((num) => num > 0)));
  const visited = {};

  for (const num of uniquePositiveArr) {
    visited[num] = true;
  }

  let smallestMissing = 1;
  while (visited[smallestMissing]) {
    smallestMissing++;
  }

  return smallestMissing;
}

module.exports = smallest_missing_positive_integer;
