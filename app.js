const staffMembers = [
    "Armine", "Marina", "Ilona", "Milen", "Rima", "Lilit SPA", "Lilit cosmetology",
    "Tatev", "Sona", "Kara", "Kristina", "Kristina cosmetology", "Manana", "Arevik", "Ani"
];

// Function to determine Secret Santa for a given name
function findSecretSanta(userName) {
    // Validate input
    if (!staffMembers.includes(userName)) {
        return "Please enter a valid name from the staff list.";
    }

    // Find the index of the user's name
    const userIndex = staffMembers.indexOf(userName);

    // Assign the next person in the list as their Secret Santa (circular)
    const santaIndex = (userIndex + 1) % staffMembers.length;

    return staffMembers[santaIndex];
}

document.getElementById('generate-btn').addEventListener('click', function () {
    const userName = document.getElementById('name').value.trim();

    // Find the Secret Santa
    const result = findSecretSanta(userName);

    // Display the result
    const resultElement = document.getElementById('result');
    resultElement.style.display = 'block';
    resultElement.textContent = result.startsWith("Please")
        ? result
        : `You are the Secret Santa for: ${result}`;
});
