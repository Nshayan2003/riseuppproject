import React from 'react'

const CategoryButtons = ({ setSelectedCategory }) => {
  const categories = ['mountain', 'beaches', 'cities', 'flowers']

  return (
    <div className='flex justify-center mt-4'>
      {categories.map(category => (
        <button
          key={category}
          className='mr-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          onClick={() => setSelectedCategory(category)}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  )
}

export default CategoryButtons
