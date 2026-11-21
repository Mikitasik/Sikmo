// Завдання 4. Перевірка паролів
const correctPassword = 'admin123';
const passwords = ['12345', 'password', 'admin123'];
let index = 0;
let accessGranted = false;

do {
  if (passwords[index] === correctPassword) {
    console.log('Доступ дозволено');
    accessGranted = true;
    break;
  } else {
    console.log('Неправильний пароль');
  }
  index++;
} while (index < passwords.length);

if (!accessGranted) {
  console.log('Усі паролі неправильні. Доступ заборонено');
}
