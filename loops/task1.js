// Завдання 1. Числа, парні числа та сума непарних чисел
console.log('Числа від 1 до 30:');
for (let i = 1; i <= 30; i++) {
  console.log(i);
}

console.log('Парні числа від 1 до 30:');
for (let i = 1; i <= 30; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

let oddSum = 0;
for (let i = 1; i <= 30; i++) {
  if (i % 2 !== 0) {
    oddSum += i;
  }
}
console.log('Сума непарних чисел від 1 до 30:', oddSum);
