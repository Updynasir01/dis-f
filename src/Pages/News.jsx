import { useState } from 'react'
import { FaCalendarAlt, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa'

function News() {
  const [activeTab, setActiveTab] = useState('news')

  const news = [
    {
      id: 1,
      title: 'New Community Center Opening',
      date: 'March 15, 2024',
      category: 'Announcement',
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80',
      excerpt:
        'Join us for the grand opening of our new community center, featuring state-of-the-art facilities and programs for all ages.',
    },
    {
      id: 2,
      title: 'Road Maintenance Schedule',
      date: 'March 10, 2024',
      category: 'Public Works',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
      excerpt:
        'Upcoming road maintenance work in the following areas. Please plan your routes accordingly.',
    },
    {
      id: 3,
      title: 'Public Safety Meeting',
      date: 'March 5, 2024',
      category: 'Community',
      image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=600&q=80',
      excerpt:
        'Monthly public safety meeting to discuss community concerns and initiatives.',
    },
  ]

  const events = [
    {
      id: 1,
      title: 'Spring Festival',
      date: 'April 1, 2024',
      time: '10:00 AM - 6:00 PM',
      location: 'Central Park',
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
      description:
        'Join us for our annual Spring Festival featuring local vendors, live music, and family activities.',
    },
    {
      id: 2,
      title: 'Community Clean-up Day',
      date: 'April 15, 2024',
      time: '9:00 AM - 12:00 PM',
      location: 'Various Locations',
      image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80',
      description:
        'Help keep our community clean and beautiful. All volunteers welcome!',
    },
    {
      id: 3,
      title: 'Youth Sports Tournament',
      date: 'April 20, 2024',
      time: '8:00 AM - 5:00 PM',
      location: 'District Sports Complex',
      image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80',
      description:
        'Annual youth sports tournament featuring basketball, soccer, and volleyball competitions.',
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 py-32">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-50"
            src="/news-hero.jpg"
            alt="News & Events"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            News & Events
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            Stay informed about the latest news, announcements, and upcoming events in
            our district.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('news')}
              className={`${
                activeTab === 'news'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Latest News
            </button>
            <button
              onClick={() => setActiveTab('events')}
              className={`${
                activeTab === 'events'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Upcoming Events
            </button>
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === 'news' ? (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {news.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-sm overflow-hidden"
                >
                  <img
                    className="w-full h-48 object-cover"
                    src={item.image}
                    alt={item.title}
                  />
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500">
                      <span>{item.date}</span>
                      <span className="mx-2">•</span>
                      <span>{item.category}</span>
                    </div>
                    <h3 className="mt-2 text-xl font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-gray-500">{item.excerpt}</p>
                    <a
                      href={`/news/${item.id}`}
                      className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-500"
                    >
                      Read More
                      <FaArrowRight className="ml-2" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="bg-white rounded-lg shadow-sm overflow-hidden"
                >
                  <img
                    className="w-full h-48 object-cover"
                    src={event.image}
                    alt={event.title}
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {event.title}
                    </h3>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center text-gray-500">
                        <FaCalendarAlt className="h-5 w-5 mr-2" />
                        <span>{event.date}</span>
                        <span className="mx-2">•</span>
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center text-gray-500">
                        <FaMapMarkerAlt className="h-5 w-5 mr-2" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <p className="mt-4 text-gray-500">{event.description}</p>
                    <a
                      href={`/events/${event.id}`}
                      className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-500"
                    >
                      Learn More
                      <FaArrowRight className="ml-2" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Stay Updated
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Subscribe to our newsletter to receive the latest news and event
              updates.
            </p>
            <div className="mt-8 max-w-md mx-auto">
              <form className="sm:flex">
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full px-5 py-3 border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500 sm:max-w-xs rounded-md"
                  placeholder="Enter your email"
                />
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default News 