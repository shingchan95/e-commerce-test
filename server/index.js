require('dotenv').config({ path: './server/.env' }); // Load environment variables
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000; // Port 5001

const apiTestRoutes = require('./routes/apiTest');

app.use(cors())
app.use(express.json());
app.use('/api/test', apiTestRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});