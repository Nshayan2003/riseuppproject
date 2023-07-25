import React, { useState } from 'react'

const SearchBox = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = e => {
    setSearchTerm(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    onSearch(searchTerm)
  }

  return (
    <form className='mt-6' onSubmit={handleSubmit}>
      <div className='max-w-lg mx-auto'>
        <div className='flex items-center border-b-2 border-blue-500 py-2'>
          <input
            type='text'
            placeholder='Search images...'
            className='appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none'
            value={searchTerm}
            onChange={handleChange}
          />
          <button
            type='submit'
            className='flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded'
          >
            Search
          </button>
        </div>
      </div>
    </form>
  )
}

export default SearchBox
