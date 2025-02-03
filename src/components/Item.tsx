import React from 'react';
import './Item.css';

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
          <div className="item-info">
            <p>Retailer: {data.retailer}</p>
          </div>
          <div className="details">
            <h4>Details:</h4>
            <ul>
              {data.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item; 