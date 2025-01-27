import React from 'react';
import { Link } from 'react-router-dom';
import './Category.css';
const CategoryCard = React.memo(({ data }) => {
  console.log(data);
  return (
    <div className='category'>
      <Link to={`/category/${data.name}`}>
        <span>
          <h2>{data?.title}</h2>
        </span>
        <img src={data?.imgLink} alt={data?.name} />
        <p>Shop Now</p>
      </Link>
    </div>
  );
});

export default CategoryCard;
