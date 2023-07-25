const UNSPLASH_API_KEY = 'kfnrPiOJ7AEEEXSGZAuu0T2m4FjwUGbzCNUC3y2sI3g' // Replace this with your actual Unsplash API key

export const getImages = async searchTerm => {
  try {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?query=${encodeURIComponent(
        searchTerm
      )}&per_page=20`,
      {
        headers: {
          Authorization: `Client-ID ${UNSPLASH_API_KEY}`
        }
      }
    )

    if (!response.ok) {
      throw new Error('Failed to fetch images')
    }

    const data = await response.json()
    return data.results
  } catch (error) {
    throw new Error('Error fetching images')
  }
}
