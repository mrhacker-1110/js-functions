// 1. Генерация массива чисел в диапазоне
function getRange(start, end, step = 1) {
  if (step === 0) throw new Error("step не может быть 0");
  const result = [];
  if (start <= end) {
    for (let i = start; i <= end; i += step) {
      result.push(i);
    }
  } else {
    for (let i = start; i >= end; i -= step) {
      result.push(i);
    }
  }
  return result;
}

// 2. Переворот строки (без reverse)
function myReverse(str) {
  let out = "";
  for (let i = str.length - 1; i >= 0; i--) {
    out += str[i];
  }
  return out;
}

// 3. Маскировка карты
function maskCard(cardStr, maskChar = "X") {
  const len = cardStr.length;
  if (len <= 10) return cardStr;

  const left = cardStr.slice(0, 6);
  const right = cardStr.slice(-4);
  const middle = maskChar.repeat(len - 10);

  return left + middle + right;
}

// Тесты
console.log(getRange(1, 10));          // [1,2,3,4,5,6,7,8,9,10]
console.log(getRange(10, 30, 5));      // [10,15,20,25,30]
console.log(myReverse("123456789"));   // "987654321"
console.log(maskCard("4815154823541789"));        // "481515XXXXXX1789"
console.log(maskCard("4815154823541789", "*"));   // "481515******1789"
