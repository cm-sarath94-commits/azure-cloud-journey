# 🚢 Maritime Cloud Fleet Optimization System
## Azure Virtual Network Infrastructure Lab

---

## 🧩 Business Problem

Modern maritime operations require real-time vessel monitoring 
from shore. Ships at sea transmit critical data including GPS 
position, engine telemetry, fuel consumption, and system health 
via VSAT or Starlink satellite connections.

This project simulates the Azure cloud infrastructure for a 
shore-based fleet optimization application that:
- Receives vessel data securely via VSAT/Starlink
- Processes and stores telemetry from multiple ships
- Provides a real-time dashboard for fleet operators
- Monitors system health and alerts on connectivity loss

---

## ⚙️ Azure Services Used

| Service | Purpose |
|---------|---------|
| *Azure Virtual Network* | Isolated network for fleet system |
| *Subnets (x5)* | Segmented tiers for security |
| *Network Security Groups (x4)* | Traffic control per subnet |
| *Storage Account* | Vessel logs and voyage reports |
| *App Service (Free F1)* | Fleet dashboard hosting |
| *Log Analytics Workspace* | Centralized log collection |
| *Azure Monitor Alerts* | Vessel connectivity notifications |
| *Action Group* | Email alerts to ops team |

---

## 🌐 Network Design

| Subnet | CIDR | Purpose | NSG |
|--------|------|---------|-----|
| Subnet-Gateway | 10.0.1.0/24 | VSAT/Starlink entry point | NSG-Gateway |
| Subnet-WebAPI | 10.0.2.0/24 | Fleet dashboard | NSG-WebAPI |
| Subnet-Processing | 10.0.3.0/24 | Data processing | - |
| Subnet-Database | 10.0.4.0/24 | Fleet database | NSG-Database |
| Subnet-Management | 10.0.5.0/24 | Admin access | NSG-Management |

---

## 🔒 Security Rules Summary

### NSG-Gateway
| Priority | Rule | Port | Action |
|----------|------|------|--------|
| 100 | Allow-Vessel-HTTPS | 443 TCP | Allow |
| 110 | Allow-VPN-IKE | 500 UDP | Allow |
| 65500 | DenyAllInBound | * | Deny |

### NSG-WebAPI
| Priority | Rule | Port | Action |
|----------|------|------|--------|
| 100 | Allow-Operator-HTTPS | 443 TCP | Allow |
| 110 | Allow-HTTP | 80 TCP | Allow |
| 65500 | DenyAllInBound | * | Deny |

### NSG-Database
| Priority | Rule | Port | Action |
|----------|------|------|--------|
| 100 | Allow-Processing-SQL | 1433 TCP | Allow |
| 65500 | DenyAllInBound | * | Deny |

### NSG-Management
| Priority | Rule | Port | Action |
|----------|------|------|--------|
| 100 | Allow-Admin-RDP | 3389 TCP | Allow |
| 110 | Allow-Admin-SSH | 22 TCP | Allow |
| 65500 | DenyAllInBound | * | Deny |

---

## 📦 Storage Structure

| Container | Purpose |
|-----------|---------|
| vessel-logs | AIS data, engine telemetry, GPS positions |
| voyage-reports | Daily noon reports, port logs |
| chart-updates | ECDIS chart corrections for vessels |

---

## 📊 Monitoring Setup

| Component | Configuration |
|-----------|--------------|
| Log Analytics Workspace | LAW-Fleet-Monitor |
| Alert Rule | Triggers on 5+ HTTP errors in 5 minutes |
| Action Group | Email notification to ops team |
| Severity | Warning (Level 2) |

---

## 🔐 Security Considerations

- RDP/SSH ports open to Any source (lab only)
- In production replace with *Azure Bastion*
- Storage accessible only from Processing subnet
- All storage transfers use HTTPS (TLS 1.2)
- Blob public access disabled on storage account
- In production use *Just-in-time VM access*

---

## 📸 Screenshots

| # | Screenshot | Description |
|---|-----------|-------------|
| 01 | ![Resource Group](screenshots/01-resource-group.png) | RG-Fleet-Optimization |
| 02 | ![VNet Overview](screenshots/02-vnet-overview.png) | VNet-Fleet-Shore |
| 03 | ![Subnets](screenshots/03-vnet-subnets.png) | 5 subnets configured |
| 04 | ![NSG List](screenshots/04-nsg-list.png) | 4 NSGs created |
| 05 | ![NSG Association](screenshots/05-nsg-subnet-association.png) | NSGs linked to subnets |
| 06 | ![NSG Gateway Rules](screenshots/06-nsg-gateway-rules.png) | Gateway security rules |
| 07 | ![NSG WebAPI Rules](screenshots/07-nsg-webapi-rules.png) | WebAPI security rules |
| 08 | ![NSG Database Rules](screenshots/08-nsg-database-rules.png) | Database security rules |
| 09 | ![NSG Management Rules](screenshots/09-nsg-management-rules.png) | Management security rules |
| 10 | ![Storage Account](screenshots/10-storage-account.png) | Fleet log storage |
| 11 | ![Containers](screenshots/11-storage-containers.png) | 3 storage containers |
| 12 | ![App Service](screenshots/12-app-service-overview.png) | Fleet dashboard |
| 13 | ![App Running](screenshots/13-app-service-running.png) | Dashboard live |
| 14 | ![Log Analytics](screenshots/14-log-analytics.png) | LAW-Fleet-Monitor |
| 15 | ![Alert Rule](screenshots/15-monitor-alert.png) | Connectivity alert |
| 16 | ![Action Group](screenshots/16-action-group.png) | Email notification |

---

## 💡 What I Learned

- How Azure VNets and subnets map directly to Cisco network segmentation
- NSG rules work similarly to Cisco ACLs — lower priority number processed first
- Azure default NSG rules cannot be deleted, only overridden
- Free tier App Service does not support diagnostic settings
- Storage account network rules restrict access to specific subnets
- Azure Monitor combines Log Analytics + Alert Rules + Action Groups

---

## 🔁 CCNA to Azure Mapping

| CCNA Concept | Azure Equivalent |
|-------------|-----------------|
| VLAN segmentation | Subnets |
| Access Control List (ACL) | NSG Rules |
| Default deny ACL | DenyAllInBound (65500) |
| Site-to-site VPN | Azure VPN Gateway |
| Network monitoring | Azure Monitor |
| Syslog server | Log Analytics Workspace |

---

## 💰 Estimated Cost

| Resource | Cost |
|----------|------|
| VNet + Subnets | $0.00 |
| NSGs | $0.00 |
| Storage Account (LRS) | ~$0.02/month |
| App Service (Free F1) | $0.00 |
| Log Analytics | $0.00 (under free limit) |
| *Total* | *~$0.02/month* |

---

## 🔗 Related Posts
- [LinkedIn](https://www.linkedin.com/in/sarath-c-m15111994)

---

## 📚 References
- [Azure Virtual Network Documentation](https://learn.microsoft.com/en-us/azure/virtual-network/)
- [NSG Overview](https://learn.microsoft.com/en-us/azure/virtual-network/network-security-groups-overview)
- [Azure Monitor Documentation](https://learn.microsoft.com/en-us/azure/azure-monitor/)
