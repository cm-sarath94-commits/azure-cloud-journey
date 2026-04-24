// app.js - Main server file for Fleet Dashboard

// Import Express framework
const express = require('express');
const app = express();

// Tell Express to serve files from 'public' folder
app.use(express.static('public'));

// Simulated vessel data
// In production this would come from real VSAT/AIS feeds
const vessels = [
    {
        id: 1,
        name: "MV Pacific Navigator",
        status: "Online",
        connection: "Starlink",
        latitude: "1.3521° N",
        longitude: "103.8198° E",
        fuel: 78,
        lastUpdated: "2 mins ago"
    },
    {
        id: 2,
        name: "MV Arabian Star",
        status: "Online",
        connection: "VSAT",
        latitude: "25.2048° N",
        longitude: "55.2708° E",
        fuel: 45,
        lastUpdated: "5 mins ago"
    },
    {
        id: 3,
        name: "MV Indian Express",
        status: "Offline",
        connection: "VSAT",
        latitude: "10.8505° N",
        longitude: "76.2711° E",
        fuel: 62,
        lastUpdated: "45 mins ago"
    },
    {
        id: 4,
        name: "MV Gulf Carrier",
        status: "Online",
        connection: "Starlink",
        latitude: "23.6345° N",
        longitude: "58.5931° E",
        fuel: 91,
        lastUpdated: "1 min ago"
    },
    {
        id: 5,
        name: "MV Eastern Horizon",
        status: "Online",
        connection: "VSAT",
        latitude: "13.0827° N",
        longitude: "80.2707° E",
        fuel: 33,
        lastUpdated: "8 mins ago"
    }
];

// API endpoint that sends vessel data to the dashboard
// This is what the frontend calls to get vessel information
app.get('/api/vessels', (req, res) => {
    res.json(vessels);
});

// Start the server on port 3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Fleet Dashboard running on port ${PORT}`);
    console.log(`Open http://localhost:${PORT} in your browser`);
});