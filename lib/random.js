// 随机选取内容的模块

// randomInt 函数返回一个大于等于 min，小于 max 的随机整数
export function randomInt(min, max) {
  const p = Math.random();
  return Math.floor(min * (1 - p) + max * p);
}
// ! e.g.
// const articleLength = randomInt(3000, 5000); //设置文章长度介于3000~5000字

// 函数能够从语料库的数组中随机地选择元素，并返回。
export function createRandomPicker(arr) {
  arr = [...arr]; // copy 数组，以免修改原始数据
  function randomPick() {
    const len = arr.length - 1;
    const index = randomInt(0, len);
    const picked = arr[index];
    [arr[index], arr[len]] = [arr[len], arr[index]];
    return picked;
  }
  randomPick(); // 抛弃第一次选择结果
  return randomPick;
}
