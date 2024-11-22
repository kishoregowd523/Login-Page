document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple front-end validation (for demo purposes)
    if (username === 'user' && password === 'password123') {
        window.location.href = 'homepage.html';  // Redirect to home page (you can customize this)
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
});

document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Send login request to the server
    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = 'homepage.html'; // Redirect to homepage
        } else {
            document.getElementById('error-message').style.display = 'block'; // Show error message
        }
    })
    .catch(error => console.error('Error:', error));
});
