const pairs = {
    "Armine": "Marina",
    "Marina": "Tatev",
    "Tatev": "Ilona",
    "Ilona": "Kara",
    "Kara": "Rima",
    "Rima": "Ani",
    "Ani": "Arevik",
    "Arevik": "Kristina",
    "Kristina": "Manana",
    "Manana": "Sona",
    "Sona": "Lilit SPA",
    "Lilit SPA": "Lilit cosmetology",
    "Lilit cosmetology": "Milen",
    "Milen": "Armine"
};

// Function to get the Secret Santa for a name
function getSecretSanta(userName) {
    if (pairs[userName]) {
        return pairs[userName];
    } else {
        return "Your name is not in the list. Please try again!";
    }
}

document.getElementById('generate-btn').addEventListener('click', function () {
    const userName = document.getElementById('name').value.trim();

    // Check if a name has already been used
    const savedName = localStorage.getItem('currentUserName');
    if (savedName && savedName !== userName) {
        alert("You can only see your own Secret Santa. Please use your name.");
        return;
    }

    // Validate the name and get the Secret Santa
    const result = getSecretSanta(userName);

    if (!result.startsWith("Your name")) {
        // Save the user's name in localStorage
        localStorage.setItem('currentUserName', userName);
    }

    // Display the result
    const resultElement = document.getElementById('result');
    resultElement.style.display = 'block';
    resultElement.textContent = result.startsWith("Your name")
        ? result
        : `You are the Secret Santa for: ${result}`;
});
