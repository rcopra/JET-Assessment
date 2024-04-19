const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;  // Use environment port or default to 3000

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '..', 'public')));

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
