import { FaEnvelope, FaPhone, FaLinkedin } from 'react-icons/fa'

function Leadership() {
  const leaders = [
    {
      name: 'John Smith',
      position: 'District Commissioner',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
      bio: 'With over 20 years of public service experience, John leads our district with vision and dedication.',
      email: 'john.smith@district.gov',
      phone: '+1 234 567 8901',
      linkedin: 'https://linkedin.com/in/johnsmith',
    },
    {
      name: 'Sarah Johnson',
      position: 'Deputy Commissioner',
      image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80',
      bio: 'Sarah brings extensive experience in urban planning and community development to her role.',
      email: 'sarah.johnson@district.gov',
      phone: '+1 234 567 8902',
      linkedin: 'https://linkedin.com/in/sarahjohnson',
    },
    {
      name: 'Michael Chen',
      position: 'Chief Financial Officer',
      image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400&q=80',
      bio: "Michael oversees the district's financial operations and budget planning with expertise and integrity.",
      email: 'michael.chen@district.gov',
      phone: '+1 234 567 8903',
      linkedin: 'https://linkedin.com/in/michaelchen',
    },
    {
      name: 'Emily Rodriguez',
      position: 'Director of Public Works',
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
      bio: 'Emily leads our infrastructure and public works initiatives with a focus on sustainability.',
      email: 'emily.rodriguez@district.gov',
      phone: '+1 234 567 8904',
      linkedin: 'https://linkedin.com/in/emilyrodriguez',
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 py-32">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-50"
            src="/leadership-hero.jpg"
            alt="District Leadership"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            District Leadership
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            Meet the dedicated team of professionals leading our district forward.
          </p>
        </div>
      </div>

      {/* Leadership Grid */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-2">
            {leaders.map((leader) => (
              <div
                key={leader.name}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <div className="md:flex">
                  <div className="md:flex-shrink-0">
                    <img
                      className="h-48 w-full object-cover md:w-48"
                      src={leader.image}
                      alt={leader.name}
                    />
                  </div>
                  <div className="p-8">
                    <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">
                      {leader.position}
                    </div>
                    <h3 className="mt-2 text-xl font-semibold text-gray-900">
                      {leader.name}
                    </h3>
                    <p className="mt-3 text-gray-500">{leader.bio}</p>
                    <div className="mt-4 space-y-2">
                      <a
                        href={`mailto:${leader.email}`}
                        className="flex items-center text-gray-600 hover:text-blue-600"
                      >
                        <FaEnvelope className="h-5 w-5 mr-2" />
                        {leader.email}
                      </a>
                      <a
                        href={`tel:${leader.phone}`}
                        className="flex items-center text-gray-600 hover:text-blue-600"
                      >
                        <FaPhone className="h-5 w-5 mr-2" />
                        {leader.phone}
                      </a>
                      <a
                        href={leader.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-gray-600 hover:text-blue-600"
                      >
                        <FaLinkedin className="h-5 w-5 mr-2" />
                        LinkedIn Profile
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Contact Our Leadership Team
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Have questions or need to get in touch with our leadership team? We're
              here to help.
            </p>
            <div className="mt-8">
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Leadership 