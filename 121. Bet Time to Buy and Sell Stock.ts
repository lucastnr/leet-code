// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/

function maxProfit(prices: number[]): number {
  let left = 0;
  let right = 1;
  let maxProfit = 0;

  while (right < prices.length) {
      const buy = prices[left];
      const sell = prices[right];
      const profit = sell - buy;

      if (profit < 0) {
          left++;
          right = left + 1;
          continue;
      }

      if (profit > maxProfit) {
          maxProfit = profit;
      }

      right++;
  }

  return maxProfit;
};