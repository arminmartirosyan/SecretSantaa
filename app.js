const staffMembers = [
    "Armine", "Marina", "Ilona", "Milen", "Rima", "Lilit SPA", "Lilit cosmetology",
    "Tatev", "Sona", "Kara", "Kristina", "Kristina cosmetology", "Manana", "Arevik", "Ani"
];

// Проверка наличия кнопки и действий
document.getElementById('generate-btn').addEventListener('click', function () {
    const userName = document.getElementById('name').value.trim();

    // Проверка валидности имени
    if (!userName || !staffMembers.includes(userName)) {
        alert("Введите имя из списка!");
        return;
    }

    // Получаем использованные имена
    const usedNames = JSON.parse(localStorage.getItem('usedNames') || '[]');

    // Исключаем уже использованные имена
    const availableNames = staffMembers.filter(name => !usedNames.includes(name) && name !== userName);

    if (availableNames.length === 0) {
        alert("Все имена уже были использованы!");
        return;
    }

    // Генерация случайного имени
    const secretSanta = availableNames[Math.floor(Math.random() * availableNames.length)];

    // Сохраняем имя в локальное хранилище
    usedNames.push(secretSanta);
    localStorage.setItem('usedNames', JSON.stringify(usedNames));

    // Отображение результата
    const resultElement = document.getElementById('result');
    resultElement.style.display = 'block';
    resultElement.textContent = `Ваш Тайный Санта: ${secretSanta}`;
});