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

// Retrieve used names from localStorage or initialize it
function getUsedNames() {
    return JSON.parse(localStorage.getItem('usedNames') || '[]');
}

// Save the updated list of used names to localStorage
function setUsedNames(usedNames) {
    localStorage.setItem('usedNames', JSON.stringify(usedNames));
}

// Check if a name has already been used
function isNameUsed(userName) {
    const usedNames = getUsedNames();
    return usedNames.includes(userName);
}

// Mark a name as used
function markNameAsUsed(userName) {
    const usedNames = getUsedNames();
    usedNames.push(userName);
    setUsedNames(usedNames);
}

// Function to get the Secret Santa for a given name
function getSecretSanta(userName) {
    if (pairs[userName]) {
        return pairs[userName];
    } else {
        return "Your name is not in the list. Please try again!";
    }
}

// Event listener for the generate button
document.getElementById('generate-btn').addEventListener('click', function () {
    const userName = document.getElementById('name').value.trim();

    // Check if the name has already been used
    if (isNameUsed(userName)) {
        alert("This name has already been used. You cannot see others' Secret Santas.");
        return;
    }

    // Get the Secret Santa for the name
    const result = getSecretSanta(userName);

    if (!result.startsWith("Your name")) {
        // Mark the name as used if it's valid
        markNameAsUsed(userName);
    }

    // Display the result
    const resultElement = document.getElementById('result');
    resultElement.style.display = 'block';
    resultElement.textContent = 
        result.startsWith("Your name")
            ? result
            : `You are the Secret Santa for: ${result}`;
});
