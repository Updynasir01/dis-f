import { useState } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const contactInfo = [
    {
      icon: <FaPhone className="h-6 w-6" />,
      title: 'Phone',
      content: '+1 234 567 8900',
      link: 'tel:+12345678900',
    },
    {
      icon: <FaEnvelope className="h-6 w-6" />,
      title: 'Email',
      content: 'info@district.gov',
      link: 'mailto:info@district.gov',
    },
    {
      icon: <FaMapMarkerAlt className="h-6 w-6" />,
      title: 'Address',
      content: '123 District Street, City, State 12345',
      link: 'https://maps.google.com',
    },
    {
      icon: <FaClock className="h-6 w-6" />,
      title: 'Office Hours',
      content: 'Monday - Friday: 8:00 AM - 5:00 PM',
      link: null,
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 py-32">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-50"
            src="/contact-hero.jpg"
            alt="Contact Us"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Contact Us
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            Get in touch with us. We're here to help and answer any questions you
            may have.
          </p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="bg-white rounded-lg shadow-sm p-6 text-center"
              >
                <div className="text-blue-600 flex justify-center">
                  {info.icon}
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  {info.title}
                </h3>
                {info.link ? (
                  <a
                    href={info.link}
                    className="mt-2 text-gray-500 hover:text-blue-600"
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={
                      info.link.startsWith('http')
                        ? 'noopener noreferrer'
                        : undefined
                    }
                  >
                    {info.content}
                  </a>
                ) : (
                  <p className="mt-2 text-gray-500">{info.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form and Map */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">
                Send Us a Message
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Fill out the form below and we'll get back to you as soon as
                possible.
              </p>
              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>

            {/* Map */}
            <div className="h-96 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30591910525!2d-74.25986432970718!3d40.697149422113014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1645564750987!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="District Location"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact 