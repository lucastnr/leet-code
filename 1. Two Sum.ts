// // https://leetcode.com/problems/two-sum/submissions/1154165398/

function twoSum(nums: number[], target: number): number[] {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const left = target - nums[i];
    const matchIndex = map.get(left);

    if (typeof matchIndex === "number") {
      return [matchIndex, i];
    }

    map.set(nums[i], i);
  }

  // Should never reach here, just so that typescript doesn't complain
  return [];
}
