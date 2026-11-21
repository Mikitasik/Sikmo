// Завдання 3. Додаємо натуральні числа, доки сума не перевищить 100
let sum = 0;
let nextNumber = 1;
let count = 0;

while (sum <= 100) {
  sum += nextNumber;
  count++;
  nextNumber++;
}

console.log('Отримана сума:', sum);
console.log('Кількість доданих чисел:', count);
