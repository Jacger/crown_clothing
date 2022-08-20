import CategoryItems from '../categoryItem/CategoryItem.component'
import './Directory.style.scss';

function Directory({categories}) {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItems category={category} key={category.id} />
      ))}
    </div>
  )
}

export default Directory;
