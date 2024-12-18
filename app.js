const pairs = {
    "Armine": "Marina",
    "Marina": "Tatev",
    "Tatev": "Ilona",
    "Ilona": "Kara",
    "Kara": "Rima",
    "Rima": "Ani",
    "Ani": "Arevik",
    "Arevik": "Kristina",
    "Lilit cosmetology": "Manana",
    "Manana": "Sona",
    "Sona": "Lilit SPA",
    "Lilit SPA": "Milen",
    "Kristina": "Lilit cosmetology",
    "Milen": "Armine"
};

function getSecretSanta(userName) {
    if (pairs[userName]) {
        return pairs[userName];
    } else {
        return "Your name is not in the list. Please try again!";
    }
}

document.getElementById('generate-btn').addEventListener('click', function () {
    const userName = document.getElementById('name').value.trim();
    const result = getSecretSanta(userName);
    const resultElement = document.getElementById('result');
    resultElement.style.display = 'block';
    resultElement.textContent = 
        result.startsWith("Your name")
            ? result
            : `You are the Secret Santa for: ${result}`;
});
