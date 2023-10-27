const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000; // Change this to the desired port

app.use(express.json());
// Enable CORS
app.use(cors())
// Define an API endpoint to handle price offer requests
app.get('/promotions/priceoffers/ond/:origin/:destination', (req, res) => {
    const { origin, destination } = req.params;

    // Use the query parameters to generate dynamic responses
    const departureDate = req.query.departureDate || '';
    const returnDate = req.query.returnDate || '';
    const serviceType = req.query.service || 'BestPrice';

    // Construct the response
    const response = {
        origin,
        destination,
        departureTime: "8:00AM",
        arrivalTime: "12:20PM",
        duration: "4:20h",
        departureDate,
        returnDate,
        offerType: serviceType,
    };

    const generateResponses = [];
    const generateReturnResponses = [];
    // Generate multiple sample responses
    for (let i = 1; i <= 9; i++) {
        generateResponses.push({
            ...response,
            seatAvailability: 5 + i,
            price: {
                amount: 90 - i,
                currency: "EUR",
            },
            uuid: `SA0000-b790715d-${i}-d4e88c0e84af`,
        });
        generateReturnResponses.push({
            ...response,
            origin: destination,
            destination: origin,
            seatAvailability: 5 + i,
            price: {
                amount: 88 - i,
                currency: "EUR",
            },
            uuid: `RE0000-b790715d-${i}-8c0e84af`,
        });

    }
    setTimeout(() => {
        res.json({ outbound: generateResponses, inbound: generateReturnResponses });
    }, 1000);
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
