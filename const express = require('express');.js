const express = require('express');
const app = express();
const port = 3000;

// Redirect to Google OAuth login page
app.get('/auth/google', (req, res) => {
    // Your Google OAuth logic here
    // Redirect to the Google OAuth URL
    // Example: res.redirect(generateGoogleOAuthURL());
    res.send('Redirect to Google OAuth URL');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
