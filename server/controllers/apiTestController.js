const apiTestService = require('../services/apiTestService');

exports.getApiTestData = async (req, res) => {
    try {
        const data = await apiTestService.fetchApiTestData(req.query);
        res.json(data);
    } catch (error) {
        console.error('Error fetching API test data:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
};