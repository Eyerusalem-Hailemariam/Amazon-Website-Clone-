import React, { useCallback } from 'react';
import { categoryImage } from './categoryfull.js';
import CategoryCard from './CategoryCard';
import './Category.css';

function Category() {
  const renderCategoryCard = useCallback(
    (info, index) => <CategoryCard key={index} data={info} />,
    []
  );

  return (
    <div className='category_container'>
      {categoryImage.map((info, index) => renderCategoryCard(info, index))}
    </div>
  );
}

export default Category;
