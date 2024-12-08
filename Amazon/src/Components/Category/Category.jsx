import React from 'react';
import { categoryImage } from './categoryfull.js';
import CategoryCard from './CategoryCard';
import './Category.css'
function Category() {
  return (
    <div className='category_container'>
      {categoryImage.map((info, index) => (
        <CategoryCard key={index} data={info} />
      ))}
    </div>
  );
}

export default Category;
