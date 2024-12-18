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

// Function to check if a name has already been used
function isNameUsed(userName) {
    const usedNames = JSON.parse(localStorage.getItem('usedNames') || '[]');
    return usedNames.includes(userName);
}

// Function to mark a name as used
function markNameAsUsed(userName) {
    const usedNames = JSON.parse(localStorage.getItem('usedNames') || '[]');
    usedNames.push(userName);
    localStorage.setItem('usedNames', JSON.stringify(usedNames));
}

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

    // Check if the name is already used
    if (isNameUsed(userName)) {
        alert("This name has already been used. You cannot see others' Secret Santas.");
        return;
    }

    // Validate the name and get the Secret Santa
    const result = getSecretSanta(userName);

    if (!result.startsWith("Your name")) {
        // Mark the name as used
        markNameAsUsed(userName);
    }

    // Display the result
    const resultElement = document.getElementById('result');
    resultElement.style.display = 'block';
    resultElement.textContent = 
        result.startsWith("Your name")
            ? result
            : You are the Secret Santa for: ${result};
});
