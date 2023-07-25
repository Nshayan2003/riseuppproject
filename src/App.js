import './tailwind.css'
import React, { useState, useEffect } from 'react'
import SearchBox from './components/SearchBox'
import CategoryButtons from './components/CategoryButtons'
import ImageGrid from './components/ImageGrid'
import './App.css'

const App = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(null)

  useEffect(() => {
    // Fetch images when selectedCategory changes
    if (selectedCategory) {
      setSearchTerm('')
    }
  }, [selectedCategory])

  return (
    <div className='min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12'>
      <div className='relative py-3 sm:max-w-xl sm:mx-auto'>
        <div className='absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl'></div>
        <div className='relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20'>
          <h1 className='text-4xl font-extrabold text-center text-gray-900 sm:text-5xl'>
            RiseUpp Image Search
          </h1>
          <SearchBox
            setSearchTerm={setSearchTerm}
            setSelectedCategory={setSelectedCategory}
          />
          <CategoryButtons setSelectedCategory={setSelectedCategory} />
          <ImageGrid
            searchTerm={searchTerm}
            selectedCategory={selectedCategory}
          />
        </div>
      </div>
    </div>
  )
}

export default App
