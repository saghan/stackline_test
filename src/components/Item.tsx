import React from 'react';
import './Item.css';

interface ItemData {
  id: string;
  title: string;
  subtitle: string;
  brand: string;
  reviews: {
    customer: string;
    review: string;
    rating: number;
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
  data: any; // We'll type this properly once we see data.json
}

const Item: React.FC<ItemProps> = ({ data }) => {
  return (
    <div className="item">
      {/* We'll add the appropriate JSX once we see your data structure */}
    </div>
  );
};

export default Item; 