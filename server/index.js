require('dotenv').config({ path: './server/.env' }); // Load environment variables
const express = require('express');

const app = express();
const PORT = process.env.PORT; // Port 5001

const apiTestRoutes = require('./routes/apiTest');

app.use(express.json());
app.use('/api/test', apiTestRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});