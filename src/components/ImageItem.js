import React from 'react'

const ImageItem = ({ image }) => {
  return (
    <div className='bg-white rounded-lg shadow-md'>
      <img
        src={image.urls.regular}
        alt={image.alt_description}
        className='object-cover w-full h-40 rounded-t-lg'
      />
      <div className='p-4'>
        <p className='text-sm text-gray-600'>{image.description}</p>
        {/* Add more image details here if needed */}
      </div>
    </div>
  )
}

export default ImageItem
