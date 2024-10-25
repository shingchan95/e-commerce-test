const apiKey = process.env.API_KEY;


exports.fetchApiTestData = async ({ query, pageNumber, size, additionalPages, sort }) => {
    console.log(`Using API Key: ${apiKey}`);
    const response = await fetch(
        `https://spanishinquisition.victorianplumbing.co.uk/interviews/listings?apikey=${apiKey}`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query, pageNumber, size, additionalPages, sort }),
        }
    );
    return response.json();
};