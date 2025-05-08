import { useState } from 'react'
import { FaSearch, FaTimes } from 'react-icons/fa'

function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)

  const categories = [
    { id: 'all', name: 'All Photos' },
    { id: 'events', name: 'Events' },
    { id: 'facilities', name: 'Facilities' },
    { id: 'community', name: 'Community' },
    { id: 'projects', name: 'Projects' },
  ]

  const images = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
      alt: 'Community Festival',
      category: 'events',
      title: 'Annual Community Festival',
      description: 'Residents enjoying the annual community festival with live music and local vendors.',
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
      alt: 'Community Center',
      category: 'facilities',
      title: 'New Community Center',
      description: 'State-of-the-art community center offering various programs and activities.',
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
      alt: 'Community Garden',
      category: 'community',
      title: 'Community Garden',
      description: 'Residents working together in our community garden project.',
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80',
      alt: 'Road Construction',
      category: 'projects',
      title: 'Road Improvement Project',
      description: 'Ongoing road improvement project to enhance transportation infrastructure.',
    },
    {
      id: 5,
      src: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
      alt: 'Youth Sports',
      category: 'events',
      title: 'Youth Sports Tournament',
      description: 'Annual youth sports tournament promoting physical activity and teamwork.',
    },
    {
      id: 6,
      src: 'https://images.unsplash.com/photo-1465101178521-c1a9136a3c8b?auto=format&fit=crop&w=600&q=80',
      alt: 'Public Library',
      category: 'facilities',
      title: 'Public Library',
      description: 'Modern public library serving as a hub for learning and community engagement.',
    },
    {
      id: 7,
      src: 'https://images.unsplash.com/photo-1468421870903-4df1664ac249?auto=format&fit=crop&w=600&q=80',
      alt: 'Neighborhood Meeting',
      category: 'community',
      title: 'Neighborhood Meeting',
      description: 'Residents participating in a neighborhood planning meeting.',
    },
    {
      id: 8,
      src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
      alt: 'Park Renovation',
      category: 'projects',
      title: 'Park Renovation',
      description: 'Renovation project to enhance our public parks and recreational spaces.',
    },
  ]

  const filteredImages =
    selectedCategory === 'all'
      ? images
      : images.filter((image) => image.category === selectedCategory)

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 py-32">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-50"
            src="/gallery-hero.jpg"
            alt="Photo Gallery"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Photo Gallery
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            Explore our collection of photos showcasing district events, facilities,
            and community life.
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Photo Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <div className="relative h-64 overflow-hidden rounded-lg">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-300">
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <FaSearch className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">
                {image.title}
              </h3>
              <p className="mt-1 text-sm text-gray-500">{image.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
              onClick={() => setSelectedImage(null)}
            >
              <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
            </div>

            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-4xl sm:w-full">
              <div className="relative">
                <button
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-500"
                  onClick={() => setSelectedImage(null)}
                >
                  <FaTimes className="h-6 w-6" />
                </button>
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="w-full h-auto"
                />
                <div className="p-6">
                  <h3 className="text-xl font-medium text-gray-900">
                    {selectedImage.title}
                  </h3>
                  <p className="mt-2 text-gray-500">
                    {selectedImage.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery 