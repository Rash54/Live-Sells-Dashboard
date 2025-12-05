# Real-time Sales Analytics Dashboard

A beautiful, dark-themed analytics dashboard built with React that displays live sales data, charts, and key performance metrics in real-time.

![Dashboard Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![React](https://img.shields.io/badge/React-18.x-blue)
![Recharts](https://img.shields.io/badge/Recharts-2.x-purple)

## ✨ Features

- **Real-time Data Updates** - All metrics and charts refresh automatically every 2.5 seconds
- **Live Sales Tracking** - Monitor sales trends over the last 24 hours
- **KPI Cards** - Track Total Revenue, Orders, Conversion Rate, and Active Customers
- **Interactive Charts**:
  - Area chart for sales trends
  - Bar chart for revenue vs profit comparison
  - Donut pie charts for category distribution and traffic sources
- **Dark Theme** - Modern dark UI with white fonts for reduced eye strain
- **Responsive Design** - Fully responsive layout that works on desktop, tablet, and mobile
- **Performance Metrics** - Real-time percentage changes with visual indicators

## 📊 Dashboard Components

### KPI Cards
- **Total Revenue** - Aggregate sales with percentage change
- **Total Orders** - Order volume tracking
- **Conversion Rate** - Customer conversion percentage
- **Active Customers** - Current active user count

### Charts & Visualizations
1. **Sales Trend (24h)** - Area chart showing hourly sales performance
2. **Sales by Category** - Donut chart breaking down sales across 6 categories
3. **Revenue & Profit (12 Months)** - Bar chart comparing monthly performance
4. **Traffic Sources** - Donut chart with progress bars showing visitor origins

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/sales-dashboard.git
cd sales-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

## 📦 Dependencies

```json
{
  "react": "^18.0.0",
  "recharts": "^2.5.0",
  "lucide-react": "^0.263.1"
}
```

## 🛠️ Tech Stack

- **React** - UI framework
- **Recharts** - Charting library for data visualization
- **Lucide React** - Icon library
- **Tailwind CSS** - Utility-first CSS framework for styling

## 📁 Project Structure

```
sales-dashboard/
├── src/
│   ├── components/
│   │   └── SalesAnalyticsDashboard.jsx
│   ├── App.js
│   └── index.js
├── public/
├── package.json
└── README.md
```

## 🎨 Customization

### Changing Update Interval
The dashboard updates every 2.5 seconds by default. To change this, modify the interval in the `useEffect` hook:

```javascript
const interval = setInterval(updateData, 2500); // Change 2500 to your desired milliseconds
```

### Connecting to Real API
Replace the mock data generation functions with actual API calls:

```javascript
const updateData = async () => {
  try {
    const response = await fetch('YOUR_API_ENDPOINT');
    const data = await response.json();
    setSalesData(data.sales);
    setStats(data.stats);
    // ... update other data
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};
```

### Customizing Colors
The dashboard uses a predefined color palette. Update the `COLORS` array to customize:

```javascript
const COLORS = ['#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#3b82f6', '#ef4444'];
```

## 📊 Data Structure

### Sales Data
```javascript
{
  time: "14:00",
  sales: 5234,
  orders: 45,
  visitors: 320
}
```

### Category Data
```javascript
{
  name: "Electronics",
  value: 28500,
  color: "#8b5cf6"
}
```

### Traffic Data
```javascript
{
  name: "Organic",
  value: 4200,
  color: "#10b981"
}
```

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the root directory:

```env
REACT_APP_API_URL=https://your-api-endpoint.com
REACT_APP_UPDATE_INTERVAL=2500
```

## 🎯 Use Cases

- E-commerce sales monitoring
- SaaS dashboard analytics
- Business intelligence reporting
- Marketing campaign tracking
- Customer behavior analysis

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [Recharts](https://recharts.org/) for the amazing charting library
- [Lucide Icons](https://lucide.dev/) for the beautiful icon set
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework

## 📧 Contact

- frashop54@gmail.com

Project Link: [https://github.com/yourusername/sales-dashboard](https://github.com/yourusername/sales-dashboard)

---

**Made with ❤️ using React**
