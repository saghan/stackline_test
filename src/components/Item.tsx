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
  data: ItemData;
}

const Item: React.FC<ItemProps> = ({ data }) => {
  return (
    <div className="item-container">
      <h2>{data.title}</h2>
      <h3>{data.subtitle}</h3>
      <div className="item-details">
        <p>Brand: {data.brand}</p>
        <p>Retailer: {data.retailer}</p>
        <div className="tags">
          {data.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
        <div className="details">
          <h4>Product Details:</h4>
          <ul>
            {data.details.map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Item; 