import React, { useEffect, useState } from 'react'
import ImageItem from './ImageItem'
import { getImages } from '../api'

const ImageGrid = ({ searchTerm, selectedCategory }) => {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    if (selectedCategory) {
      getImages(selectedCategory)
        .then(data => {
          setImages(data)
          setLoading(false)
        })
        .catch(error => {
          console.error('Error fetching images:', error)
          setLoading(false)
        })
    } else {
      setImages([])
      setLoading(false)
    }
  }, [selectedCategory])

  return (
    <div className='mt-8 grid gap-8 grid-cols-2 md:grid-cols-4'>
      {loading ? (
        <div className='animate-pulse bg-gray-300 h-40 rounded-md'></div>
      ) : images.length === 0 ? (
        <p className='text-center text-red-500'>No images found.</p>
      ) : (
        images.map(image => <ImageItem key={image.id} image={image} />)
      )}
    </div>
  )
}

export default ImageGrid
