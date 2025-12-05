import React, { useState, useEffect } from 'react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, AreaChart, Area } from 'recharts';
import { TrendingUp, DollarSign, ShoppingCart, Users, ArrowUp, ArrowDown } from 'lucide-react';

const SalesAnalyticsDashboard = () => {
  const [salesData, setSalesData] = useState([]);
  const [revenueData, setRevenueData] = useState([]);
  const [stats, setStats] = useState({
    totalRevenue: 0,
    revenueChange: 0,
    totalOrders: 0,
    ordersChange: 0,
    conversionRate: 0,
    conversionChange: 0,
    activeCustomers: 0,
    customersChange: 0
  });
  const [categoryData, setCategoryData] = useState([]);
  const [trafficData, setTrafficData] = useState([]);

  const COLORS = ['#8b5cf6', '#ec4899', '#f59e0b', '#10b981', '#3b82f6', '#ef4444'];

  useEffect(() => {
    const generateSalesData = () => {
      const now = new Date();
      const data = [];
      for (let i = 23; i >= 0; i--) {
        const time = new Date(now - i * 60 * 60 * 1000);
        data.push({
          time: time.getHours() + ':00',
          sales: Math.floor(Math.random() * 8000) + 4000,
          orders: Math.floor(Math.random() * 80) + 30,
          visitors: Math.floor(Math.random() * 500) + 200
        });
      }
      return data;
    };

    const generateRevenueData = () => {
      const data = [];
      for (let i = 11; i >= 0; i--) {
        data.push({
          month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][11 - i],
          revenue: Math.floor(Math.random() * 50000) + 80000,
          profit: Math.floor(Math.random() * 30000) + 40000
        });
      }
      return data;
    };

    const generateCategoryData = () => {
      return [
        { name: 'Electronics', value: Math.floor(Math.random() * 5000) + 25000, color: '#8b5cf6' },
        { name: 'Clothing', value: Math.floor(Math.random() * 4000) + 18000, color: '#ec4899' },
        { name: 'Food & Beverage', value: Math.floor(Math.random() * 3000) + 15000, color: '#f59e0b' },
        { name: 'Home & Garden', value: Math.floor(Math.random() * 3000) + 12000, color: '#10b981' },
        { name: 'Sports', value: Math.floor(Math.random() * 2000) + 8000, color: '#3b82f6' },
        { name: 'Books', value: Math.floor(Math.random() * 2000) + 5000, color: '#ef4444' }
      ];
    };

    const generateTrafficData = () => {
      return [
        { name: 'Direct', value: Math.floor(Math.random() * 1000) + 2500, color: '#8b5cf6' },
        { name: 'Organic', value: Math.floor(Math.random() * 1000) + 3500, color: '#10b981' },
        { name: 'Social', value: Math.floor(Math.random() * 800) + 1500, color: '#ec4899' },
        { name: 'Referral', value: Math.floor(Math.random() * 600) + 1000, color: '#f59e0b' },
        { name: 'Email', value: Math.floor(Math.random() * 500) + 800, color: '#3b82f6' }
      ];
    };

    const updateData = () => {
      const newSalesData = generateSalesData();
      setSalesData(newSalesData);
      setRevenueData(generateRevenueData());

      const totalSales = newSalesData.reduce((sum, item) => sum + item.sales, 0);
      const totalOrders = newSalesData.reduce((sum, item) => sum + item.orders, 0);
      const totalVisitors = newSalesData.reduce((sum, item) => sum + item.visitors, 0);

      setStats({
        totalRevenue: totalSales,
        revenueChange: (Math.random() * 20 - 5).toFixed(1),
        totalOrders: totalOrders,
        ordersChange: (Math.random() * 15 - 3).toFixed(1),
        conversionRate: ((totalOrders / totalVisitors) * 100).toFixed(1),
        conversionChange: (Math.random() * 10 - 2).toFixed(1),
        activeCustomers: Math.floor(Math.random() * 200) + 1200,
        customersChange: (Math.random() * 12 - 2).toFixed(1)
      });

      setCategoryData(generateCategoryData());
      setTrafficData(generateTrafficData());
    };

    updateData();
    const interval = setInterval(updateData, 2500);

    return () => clearInterval(interval);
  }, []);

  const StatCard = ({ title, value, change, icon: Icon, prefix = '', suffix = '' }) => {
    const isPositive = parseFloat(change) >= 0;
    return (
      <div className="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700">
        <div className="flex items-start justify-between mb-4">
          <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 p-3 rounded-lg">
            <Icon className="w-6 h-6 text-purple-400" />
          </div>
          <div className={`flex items-center gap-1 text-sm font-semibold ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
            {isPositive ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
            {Math.abs(change)}%
          </div>
        </div>
        <div>
          <p className="text-gray-400 text-sm font-medium mb-1">{title}</p>
          <p className="text-3xl font-bold text-white">
            {prefix}{typeof value === 'number' ? value.toLocaleString() : value}{suffix}
          </p>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-[1600px] mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Analytics Dashboard</h1>
              <p className="text-gray-400">Real-time sales and performance metrics</p>
            </div>
            <div className="flex items-center gap-2 bg-green-500/20 px-4 py-2 rounded-full border border-green-500/30">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-green-400">Live</span>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatCard 
            title="Total Revenue" 
            value={stats.totalRevenue} 
            change={stats.revenueChange}
            icon={DollarSign}
            prefix="$"
          />
          <StatCard 
            title="Total Orders" 
            value={stats.totalOrders} 
            change={stats.ordersChange}
            icon={ShoppingCart}
          />
          <StatCard 
            title="Conversion Rate" 
            value={stats.conversionRate} 
            change={stats.conversionChange}
            icon={TrendingUp}
            suffix="%"
          />
          <StatCard 
            title="Active Customers" 
            value={stats.activeCustomers} 
            change={stats.customersChange}
            icon={Users}
          />
        </div>

        {/* Main Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Sales Trend Chart */}
          <div className="lg:col-span-2 bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-white">Sales Trend (24h)</h2>
              <div className="flex gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                  <span className="text-gray-400">Sales</span>
                </div>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={salesData}>
                <defs>
                  <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.5}/>
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="time" stroke="#9ca3af" style={{ fontSize: '12px' }} />
                <YAxis stroke="#9ca3af" style={{ fontSize: '12px' }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1f2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
                    color: '#fff'
                  }} 
                />
                <Area type="monotone" dataKey="sales" stroke="#8b5cf6" strokeWidth={2} fillOpacity={1} fill="url(#colorSales)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Category Distribution Pie Chart */}
          <div className="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700">
            <h2 className="text-lg font-semibold text-white mb-4">Sales by Category</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1f2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
                    color: '#fff'
                  }} 
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="space-y-2 mt-4">
              {categoryData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-sm text-gray-300">{item.name}</span>
                  </div>
                  <span className="text-sm font-semibold text-white">${item.value.toLocaleString()}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Revenue & Profit Chart */}
          <div className="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700">
            <h2 className="text-lg font-semibold text-white mb-4">Revenue & Profit (12 Months)</h2>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="month" stroke="#9ca3af" style={{ fontSize: '12px' }} />
                <YAxis stroke="#9ca3af" style={{ fontSize: '12px' }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1f2937', 
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
                    color: '#fff'
                  }} 
                />
                <Bar dataKey="revenue" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
                <Bar dataKey="profit" fill="#10b981" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Traffic Sources Pie Chart */}
          <div className="bg-gray-800 rounded-xl shadow-lg p-6 border border-gray-700">
            <h2 className="text-lg font-semibold text-white mb-4">Traffic Sources</h2>
            <div className="flex items-center gap-8">
              <ResponsiveContainer width="50%" height={280}>
                <PieChart>
                  <Pie
                    data={trafficData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={90}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {trafficData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1f2937', 
                      border: '1px solid #374151',
                      borderRadius: '8px',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
                      color: '#fff'
                    }} 
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex-1 space-y-3">
                {trafficData.map((item, index) => {
                  const total = trafficData.reduce((sum, d) => sum + d.value, 0);
                  const percentage = ((item.value / total) * 100).toFixed(1);
                  return (
                    <div key={index}>
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                          <span className="text-sm text-gray-300">{item.name}</span>
                        </div>
                        <span className="text-sm font-semibold text-white">{percentage}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <div 
                          className="h-2 rounded-full transition-all duration-500" 
                          style={{ width: `${percentage}%`, backgroundColor: item.color }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesAnalyticsDashboard;
