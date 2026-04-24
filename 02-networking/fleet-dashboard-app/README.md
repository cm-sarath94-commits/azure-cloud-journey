# 🚢 Maritime Fleet Monitoring Dashboard
## Live Node.js Web Application on Azure App Service

---

## 🌐 Live Demo
👉 [Fleet Dashboard](https://fleet-dashboard-sarath-edgyejauhxeefke4.southindia-01.azurewebsites.net/)

---

## 🧩 Business Problem

Shore-based fleet operators need real-time visibility of all vessels
at sea — including connectivity status, position, and fuel levels.
Vessels transmit data via VSAT or Starlink satellite connections to
a shore-based monitoring system.

This project provisions and deploys a cloud-hosted fleet dashboard
on Microsoft Azure to simulate that shore monitoring capability.

---

## ⚙️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Runtime** | Node.js |
| **Framework** | Express.js |
| **Frontend** | HTML, CSS, JavaScript |
| **Hosting** | Azure App Service (Free F1) |
| **Network** | Azure Virtual Network |
| **Region** | South India |

---

## 📊 Dashboard Features

| Feature | Description |
|---------|-------------|
| **Fleet Summary** | Total, Online, Offline vessel count |
| **Vessel Status** | Online/Offline badge per vessel |
| **Connection Type** | VSAT or Starlink indicator |
| **Position** | Latitude and Longitude display |
| **Fuel Level** | Visual progress bar with percentage |
| **Last Updated** | Timestamp of last data received |
| **Auto Refresh** | Data refreshes every 30 seconds |

---

## 🚢 Simulated Fleet

| Vessel | Connection | Region |
|--------|-----------|--------|
| MV Pacific Navigator | Starlink | Singapore Strait |
| MV Arabian Star | VSAT | Dubai/UAE |
| MV Indian Express | VSAT | Kerala Coast |
| MV Gulf Carrier | Starlink | Oman |
| MV Eastern Horizon | VSAT | Chennai |

---

## 🗂️ Project Structure
fleet-dashboard-app/
├── app.js              ← Node.js Express server
├── package.json        ← App configuration
└── public/
├── index.html      ← Dashboard UI
├── style.css       ← Styling
└── app.js          ← Frontend JavaScript

---

## 🛠️ How to Run Locally

### Prerequisites
- Node.js installed
- npm installed

### Steps
```bash
# Clone the repository
git clone https://github.com/cm-sarath94-commits/azure-cloud-journey.git

# Navigate to app folder
cd azure-cloud-journey/02-networking/fleet-dashboard-app

# Install dependencies
npm install

# Start the app
node app.js

# Open in browser
http://localhost:3000
```

---

## ☁️ Azure Deployment

This app is deployed on **Azure App Service** using the
VS Code Azure App Service extension.
Subscription:  Azure Subscription 1
Resource Group: RG-Fleet-Optimization
App Service:   fleet-dashboard-sarath
Plan:          Free F1
Region:        South India
Runtime:       Node.js 20 LTS

---

## 🔗 Related Projects
- [VNet Infrastructure Lab](https://github.com/cm-sarath94-commits/azure-cloud-journey/blob/main/02-networking/vnet-subnets-lab/README.md)

## 📚 References
- [Azure App Service Documentation](https://learn.microsoft.com/en-us/azure/app-service/)
- [Express.js Documentation](https://expressjs.com/)
- [Node.js Documentation](https://nodejs.org/docs/)

## 🔗 [LinkedIn](https://www.linkedin.com/in/sarath-c-m15111994)