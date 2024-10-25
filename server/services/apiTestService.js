const apiKey = process.env.API_KEY;


exports.fetchApiTestData = async ({ query, pageNumber, size, additionalPages, sort }) => {
    const response = await fetch(
        `https://spanishinquisition.victorianplumbing.co.uk/interviews/listings?apikey=${apiKey}`,
        {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "query": query,
                "pageNumber": pageNumber,
                "size": size,
                "additionalPages": additionalPages,
                "sort": sort
            }),
        }
    );
    if (!response.ok) {
        console.error('Error response from API:', response.status, response.statusText);
        throw new Error(`API call failed with status ${response.status}`);
    }
    return response.json();
};