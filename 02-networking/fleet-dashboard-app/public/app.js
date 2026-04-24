// app.js - Frontend JavaScript
// This fetches vessel data from the server and displays it

// Function to get fuel bar color based on level
function getFuelClass(level) {
    if (level > 60) return 'fuel-high';
    if (level > 30) return 'fuel-medium';
    return 'fuel-low';
}

// Function to load vessel data from the server
async function loadVessels() {
    try {
        // Call our API endpoint
        const response = await fetch('/api/vessels');
        const vessels = await response.json();

        // Update summary stats at the top
        const online = vessels.filter(v => v.status === 'Online').length;
        const offline = vessels.filter(v => v.status === 'Offline').length;

        document.getElementById('total-vessels').textContent = vessels.length;
        document.getElementById('online-vessels').textContent = online;
        document.getElementById('offline-vessels').textContent = offline;

        // Build table rows for each vessel
        const tableBody = document.getElementById('vessel-table');
        tableBody.innerHTML = vessels.map(vessel => `
            <tr>
                <td>${vessel.name}</td>
                <td>
                    <span class="badge ${vessel.status.toLowerCase()}">
                        ${vessel.status}
                    </span>
                </td>
                <td>
                    <span class="connection">${vessel.connection}</span>
                </td>
                <td>${vessel.latitude}</td>
                <td>${vessel.longitude}</td>
                <td>
                    <div class="fuel-bar">
                        <div class="fuel-fill ${getFuelClass(vessel.fuel)}" 
                             style="width: ${vessel.fuel}%">
                        </div>
                    </div>
                    <div class="fuel-text">${vessel.fuel}%</div>
                </td>
                <td>${vessel.lastUpdated}</td>
            </tr>
        `).join('');

    } catch (error) {
        console.error('Error loading vessel data:', error);
    }
}

// Load vessels when page opens
loadVessels();

// Refresh data every 30 seconds automatically
setInterval(loadVessels, 30000);// app.js - Frontend JavaScript
// This fetches vessel data from the server and displays it

// Function to get fuel bar color based on level
function getFuelClass(level) {
    if (level > 60) return 'fuel-high';
    if (level > 30) return 'fuel-medium';
    return 'fuel-low';
}

// Function to load vessel data from the server
async function loadVessels() {
    try {
        // Call our API endpoint
        const response = await fetch('/api/vessels');
        const vessels = await response.json();

        // Update summary stats at the top
        const online = vessels.filter(v => v.status === 'Online').length;
        const offline = vessels.filter(v => v.status === 'Offline').length;

        document.getElementById('total-vessels').textContent = vessels.length;
        document.getElementById('online-vessels').textContent = online;
        document.getElementById('offline-vessels').textContent = offline;

        // Build table rows for each vessel
        const tableBody = document.getElementById('vessel-table');
        tableBody.innerHTML = vessels.map(vessel => `
            <tr>
                <td>${vessel.name}</td>
                <td>
                    <span class="badge ${vessel.status.toLowerCase()}">
                        ${vessel.status}
                    </span>
                </td>
                <td>
                    <span class="connection">${vessel.connection}</span>
                </td>
                <td>${vessel.latitude}</td>
                <td>${vessel.longitude}</td>
                <td>
                    <div class="fuel-bar">
                        <div class="fuel-fill ${getFuelClass(vessel.fuel)}" 
                             style="width: ${vessel.fuel}%">
                        </div>
                    </div>
                    <div class="fuel-text">${vessel.fuel}%</div>
                </td>
                <td>${vessel.lastUpdated}</td>
            </tr>
        `).join('');

    } catch (error) {
        console.error('Error loading vessel data:', error);
    }
}

// Load vessels when page opens
loadVessels();

// Refresh data every 30 seconds automatically
setInterval(loadVessels, 30000);