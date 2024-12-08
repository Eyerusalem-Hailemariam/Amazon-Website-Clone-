import React from 'react';

function CategoryCard({ data }) {
  return (
    <div className='category'>
      <a href=''>
        <span>
          <h2>{data.title}</h2>
        </span>
        <img src={data.imgLink} alt={data.name} />
        <p>Shop Now</p>
      </a>
    </div>
  );
}

export default CategoryCard;
