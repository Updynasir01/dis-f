import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FaHome,
  FaCog,
  FaUsers,
  FaNewspaper,
  FaCalendarAlt,
  FaBars,
  FaTimes,
  FaPlus,
  FaEdit,
  FaTrash,
  FaSave,
  FaArrowLeft
} from 'react-icons/fa'

function AdminDashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const [activeSection, setActiveSection] = useState('services')
  const [services, setServices] = useState([
    { id: 1, name: 'Pay Taxes', path: '/services/taxes', icon: 'FaMoneyCheckAlt', desc: 'Easily pay your district taxes online.' },
    { id: 2, name: 'Apply for Permits', path: '/services/permits', icon: 'FaFileAlt', desc: 'Submit and track your permit applications.' },
    { id: 3, name: 'Report an Issue', path: '/services/report', icon: 'FaExclamationTriangle', desc: 'Let us know about local issues or concerns.' },
    { id: 4, name: 'Community Calendar', path: '/news/calendar', icon: 'FaCalendarAlt', desc: 'Stay updated on upcoming events.' },
  ])
  const [editingService, setEditingService] = useState(null)

  // News state
  const [news, setNews] = useState([
    { id: 1, title: 'Grand Opening', date: '2024-03-15', content: 'Join us for the grand opening of our new community center.', image: '' },
    { id: 2, title: 'Road Maintenance', date: '2024-03-10', content: 'Upcoming road maintenance work in the following areas.', image: '' },
  ])
  const [showAddNews, setShowAddNews] = useState(false)
  const [newNews, setNewNews] = useState({ title: '', date: '', content: '', image: '' })
  const [newsImagePreview, setNewsImagePreview] = useState('')

  // Events state
  const [events, setEvents] = useState([
    { id: 1, name: 'Community Picnic', date: '2024-04-01', location: 'Central Park', image: '' },
    { id: 2, name: 'Safety Meeting', date: '2024-04-10', location: 'Town Hall', image: '' },
  ])
  const [showAddEvent, setShowAddEvent] = useState(false)
  const [newEvent, setNewEvent] = useState({ name: '', date: '', location: '', image: '' })
  const [eventImagePreview, setEventImagePreview] = useState('')

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  const handleEditService = (service) => {
    setEditingService({ ...service })
  }

  const handleSaveService = () => {
    if (editingService) {
      setServices(services.map(service => 
        service.id === editingService.id ? editingService : service
      ))
      setEditingService(null)
    }
  }

  const handleDeleteService = (serviceId) => {
    setServices(services.filter(service => service.id !== serviceId))
  }

  const handleAddService = () => {
    const newService = {
      id: services.length + 1,
      name: 'New Service',
      path: '/services/new',
      icon: 'FaPlus',
      desc: 'Description of the new service.'
    }
    setServices([...services, newService])
    setEditingService(newService)
  }

  // News handlers
  const handleAddNews = () => {
    setShowAddNews(true)
    setNewNews({ title: '', date: '', content: '', image: '' })
    setNewsImagePreview('')
  }
  const handleNewsImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setNewNews(prev => ({ ...prev, image: reader.result }))
        setNewsImagePreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }
  const handleSaveNews = () => {
    if (newNews.title && newNews.date && newNews.content) {
      setNews([...news, { ...newNews, id: news.length + 1 }])
      setShowAddNews(false)
    }
  }

  // Event handlers
  const handleAddEvent = () => {
    setShowAddEvent(true)
    setNewEvent({ name: '', date: '', location: '', image: '' })
    setEventImagePreview('')
  }
  const handleEventImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setNewEvent(prev => ({ ...prev, image: reader.result }))
        setEventImagePreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }
  const handleSaveEvent = () => {
    if (newEvent.name && newEvent.date && newEvent.location) {
      setEvents([...events, { ...newEvent, id: events.length + 1 }])
      setShowAddEvent(false)
    }
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-gradient-to-br from-blue-900 to-blue-800 text-white transition-transform duration-300 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex items-center justify-between p-4 border-b border-blue-700">
          <h2 className="text-xl font-bold">Admin Dashboard</h2>
          <button onClick={toggleSidebar} className="p-2 rounded-lg hover:bg-blue-700">
            <FaTimes className="text-xl" />
          </button>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => setActiveSection('services')}
                className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${activeSection === 'services' ? 'bg-blue-700' : 'hover:bg-blue-700'}`}
              >
                <FaCog className="text-xl" />
                <span>Services</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection('users')}
                className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${activeSection === 'users' ? 'bg-blue-700' : 'hover:bg-blue-700'}`}
              >
                <FaUsers className="text-xl" />
                <span>Users</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection('news')}
                className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${activeSection === 'news' ? 'bg-blue-700' : 'hover:bg-blue-700'}`}
              >
                <FaNewspaper className="text-xl" />
                <span>News</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveSection('events')}
                className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${activeSection === 'events' ? 'bg-blue-700' : 'hover:bg-blue-700'}`}
              >
                <FaCalendarAlt className="text-xl" />
                <span>Events</span>
              </button>
            </li>
          </ul>
        </nav>
        <div className="absolute bottom-0 w-full p-4 border-t border-blue-700">
          <Link to="/" className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-700 transition-colors">
            <FaHome className="text-xl" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
        <div className="p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <button onClick={toggleSidebar} className="p-2 rounded-lg hover:bg-gray-200">
                <FaBars className="text-xl" />
              </button>
              <h1 className="text-2xl font-bold text-gray-800">
                {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)} Management
              </h1>
            </div>
            {activeSection === 'services' && (
              <button
                onClick={handleAddService}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <FaPlus />
                <span>Add Service</span>
              </button>
            )}
            {activeSection === 'news' && (
              <button
                onClick={handleAddNews}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <FaPlus />
                <span>Add News</span>
              </button>
            )}
            {activeSection === 'events' && (
              <button
                onClick={handleAddEvent}
                className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <FaPlus />
                <span>Add Event</span>
              </button>
            )}
          </div>

          {/* Services Section */}
          {activeSection === 'services' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map(service => (
                <div key={service.id} className="bg-white rounded-lg shadow-md p-6">
                  {editingService?.id === service.id ? (
                    <div className="space-y-4">
                      <input
                        type="text"
                        value={editingService.name}
                        onChange={(e) => setEditingService({ ...editingService, name: e.target.value })}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Service Name"
                      />
                      <input
                        type="text"
                        value={editingService.path}
                        onChange={(e) => setEditingService({ ...editingService, path: e.target.value })}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Service Path"
                      />
                      <textarea
                        value={editingService.desc}
                        onChange={(e) => setEditingService({ ...editingService, desc: e.target.value })}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Service Description"
                        rows="3"
                      />
                      <div className="flex justify-end space-x-2">
                        <button
                          onClick={() => setEditingService(null)}
                          className="px-4 py-2 text-gray-600 hover:text-gray-800"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={handleSaveService}
                          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-lg font-semibold text-gray-800">{service.name}</h3>
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleEditService(service)}
                            className="p-2 text-blue-600 hover:text-blue-800"
                          >
                            <FaEdit />
                          </button>
                          <button
                            onClick={() => handleDeleteService(service.id)}
                            className="p-2 text-red-600 hover:text-red-800"
                          >
                            <FaTrash />
                          </button>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-2">{service.desc}</p>
                      <p className="text-sm text-gray-500">Path: {service.path}</p>
                    </>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* News Section */}
          {activeSection === 'news' && (
            <div>
              {showAddNews && (
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                  <h3 className="text-lg font-semibold mb-4">Add News</h3>
                  <input
                    type="text"
                    value={newNews.title}
                    onChange={e => setNewNews({ ...newNews, title: e.target.value })}
                    className="w-full px-3 py-2 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Title"
                  />
                  <input
                    type="date"
                    value={newNews.date}
                    onChange={e => setNewNews({ ...newNews, date: e.target.value })}
                    className="w-full px-3 py-2 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <textarea
                    value={newNews.content}
                    onChange={e => setNewNews({ ...newNews, content: e.target.value })}
                    className="w-full px-3 py-2 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Content"
                    rows="3"
                  />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleNewsImageChange}
                    className="mb-3"
                  />
                  {newsImagePreview && (
                    <img src={newsImagePreview} alt="Preview" className="mb-3 w-full max-h-40 object-contain rounded" />
                  )}
                  <div className="flex justify-end space-x-2">
                    <button
                      onClick={() => setShowAddNews(false)}
                      className="px-4 py-2 text-gray-600 hover:text-gray-800"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSaveNews}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      Save
                    </button>
                  </div>
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {news.map(item => (
                  <div key={item.id} className="bg-white rounded-lg shadow-md p-6">
                    {item.image && <img src={item.image} alt="News" className="mb-3 w-full max-h-40 object-contain rounded" />}
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                    <p className="text-gray-600">{item.content}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Events Section */}
          {activeSection === 'events' && (
            <div>
              {showAddEvent && (
                <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                  <h3 className="text-lg font-semibold mb-4">Add Event</h3>
                  <input
                    type="text"
                    value={newEvent.name}
                    onChange={e => setNewEvent({ ...newEvent, name: e.target.value })}
                    className="w-full px-3 py-2 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Event Name"
                  />
                  <input
                    type="date"
                    value={newEvent.date}
                    onChange={e => setNewEvent({ ...newEvent, date: e.target.value })}
                    className="w-full px-3 py-2 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    value={newEvent.location}
                    onChange={e => setNewEvent({ ...newEvent, location: e.target.value })}
                    className="w-full px-3 py-2 border rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Location"
                  />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleEventImageChange}
                    className="mb-3"
                  />
                  {eventImagePreview && (
                    <img src={eventImagePreview} alt="Preview" className="mb-3 w-full max-h-40 object-contain rounded" />
                  )}
                  <div className="flex justify-end space-x-2">
                    <button
                      onClick={() => setShowAddEvent(false)}
                      className="px-4 py-2 text-gray-600 hover:text-gray-800"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleSaveEvent}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      Save
                    </button>
                  </div>
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map(event => (
                  <div key={event.id} className="bg-white rounded-lg shadow-md p-6">
                    {event.image && <img src={event.image} alt="Event" className="mb-3 w-full max-h-40 object-contain rounded" />}
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{event.name}</h3>
                    <p className="text-sm text-gray-500 mb-2">{event.date}</p>
                    <p className="text-gray-600">{event.location}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Placeholder for other sections */}
          {activeSection !== 'services' && activeSection !== 'news' && activeSection !== 'events' && (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)} Management Coming Soon
              </h2>
              <p className="text-gray-600">
                This section is under development. Please check back later.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard 