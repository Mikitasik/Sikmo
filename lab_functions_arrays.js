// Лабораторна робота: Аналіз оцінок студентів

// Завдання 1. Створення масиву
const grades = [10, 8, 12, 7, 9, 11];

// Завдання 2. Функція підрахунку середнього бала
function calculateAverage(grades) {
  let sum = 0;
  for (let i = 0; i < grades.length; i++) {
    sum += grades[i];
  }
  return sum / grades.length;
}

// Завдання 3. Функція пошуку найвищої оцінки
function findMaxGrade(grades) {
  let maxGrade = grades[0];
  for (let i = 1; i < grades.length; i++) {
    if (grades[i] > maxGrade) {
      maxGrade = grades[i];
    }
  }
  return maxGrade;
}

// Завдання 4. Функція підрахунку високих оцінок
function countHighGrades(grades) {
  let count = 0;
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 10) {
      count++;
    }
  }
  return count;
}

// Завдання 5. Виведення загального результату
function showResults(grades) {
  console.log("===== АНАЛІЗ ОЦІНОК =====");
  console.log("");

  let gradesText = "";
  for (let i = 0; i < grades.length; i++) {
    gradesText += grades[i];
    if (i < grades.length - 1) {
      gradesText += ", ";
    }
  }

  console.log("Оцінки студента: " + gradesText);
  console.log("");
  console.log("Кількість оцінок: " + grades.length);
  console.log("Середній бал: " + calculateAverage(grades));
  console.log("Найвища оцінка: " + findMaxGrade(grades));
  console.log("Кількість високих оцінок: " + countHighGrades(grades));
  console.log("");
  console.log("=========================");
}

showResults(grades);
