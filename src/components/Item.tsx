import React from 'react';
import './Item.css';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface ItemData {
  id: string;
  title: string;
  image: string;
  subtitle: string;
  brand: string;
  reviews: {
    customer: string;
    review: string;
    score: number;
  }[];
  retailer: string;
  details: string[];
  tags: string[];
  sales: {
    weekEnding: string;
    retailSales: number;
    wholesaleSales: number;
    unitsSold: number;
    retailerMargin: number;
  }[];
}

interface ItemProps {
  data: ItemData;
}

const Item: React.FC<ItemProps> = ({ data }) => {
  // Format the date to show only month
  const formattedSalesData = data.sales.map(sale => ({
    ...sale,
    month: new Date(sale.weekEnding).toLocaleString('default', { month: 'short' })
  }));

  return (
    <div className="item">
      <div className="item-layout">
        <div className="item-left-pane">
          <div className="item-card">
            <img src={data.image} alt={data.title} className="item-image" />
            <div className="item-card-content">
              <h2>{data.title}</h2>
              <h3>{data.subtitle}</h3>
              <div className="tags">
                {data.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="item-right-pane">
          <div className="sales-graph">
            <h4>Retail Sales</h4>
            <ResponsiveContainer width="100%" height={400}>
              <LineChart data={formattedSalesData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="unitsSold" 
                  stroke="#8884d8" 
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="sales-table">
            <table>
              <thead>
                <tr>
                  <th>Week Ending</th>
                  <th>Retail Sales</th>
                  <th>Wholesale Sales</th>
                  <th>Units Sold</th>
                  <th>Retailer Margin</th>
                </tr>
              </thead>
              <tbody>
                {data.sales.map((sale, index) => (
                  <tr key={index}>
                    <td>{sale.weekEnding}</td>
                    <td>${sale.retailSales.toLocaleString()}</td>
                    <td>${sale.wholesaleSales.toLocaleString()}</td>
                    <td>{sale.unitsSold.toLocaleString()}</td>
                    <td>${sale.retailerMargin.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item; 