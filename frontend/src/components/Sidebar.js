import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ items }) => {
  if (!items) {
    return <div>No items available</div>;
  }

  return (
    <div className="sidebar">
      {items.map((item, index) => (
        <Link key={index} to={item.link}>
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;