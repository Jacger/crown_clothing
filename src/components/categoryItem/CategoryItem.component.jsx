import React from 'react'
import './CategoryItem.style.scss'

function CategoryItem({category}) {
  const { title, imageUrl } = category;

  return (
    <div className="category-container">
      <img src={imageUrl} className="background-image" alt="Category background" />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop now</p>
      </div>
    </div>
  )
}

export default CategoryItem;
