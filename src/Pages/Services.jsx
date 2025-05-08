import { FaFileAlt, FaDownload, FaExternalLinkAlt } from 'react-icons/fa'

function Services() {
  const services = [
    {
      category: 'Permits & Licenses',
      items: [
        {
          name: 'Business License',
          description: 'Apply for or renew your business license',
          form: '/forms/business-license.pdf',
        },
        {
          name: 'Building Permit',
          description: 'Get approval for construction or renovation projects',
          form: '/forms/building-permit.pdf',
        },
        {
          name: 'Special Event Permit',
          description: 'Request permission for community events',
          form: '/forms/event-permit.pdf',
        },
      ],
    },
    {
      category: 'Public Works',
      items: [
        {
          name: 'Road Maintenance',
          description: 'Report road issues or request maintenance',
          form: '/forms/road-maintenance.pdf',
        },
        {
          name: 'Waste Collection',
          description: 'Schedule waste collection or report issues',
          form: '/forms/waste-collection.pdf',
        },
        {
          name: 'Street Lighting',
          description: 'Report street light issues',
          form: '/forms/street-lighting.pdf',
        },
      ],
    },
    {
      category: 'Community Services',
      items: [
        {
          name: 'Recreation Programs',
          description: 'Register for community programs and activities',
          form: '/forms/recreation.pdf',
        },
        {
          name: 'Senior Services',
          description: 'Access services for senior citizens',
          form: '/forms/senior-services.pdf',
        },
        {
          name: 'Youth Programs',
          description: 'Enroll in youth development programs',
          form: '/forms/youth-programs.pdf',
        },
      ],
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 py-32">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-50"
            src="/services-hero.jpg"
            alt="District Services"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            District Services
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            Access the services and resources you need to thrive in our community.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((category) => (
            <div key={category.category} className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                {category.category}
              </h2>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {category.items.map((service) => (
                  <div
                    key={service.name}
                    className="bg-white rounded-lg shadow-sm overflow-hidden"
                  >
                    <div className="p-6">
                      <h3 className="text-lg font-medium text-gray-900">
                        {service.name}
                      </h3>
                      <p className="mt-2 text-gray-500">{service.description}</p>
                      <div className="mt-4">
                        <a
                          href={service.form}
                          className="inline-flex items-center text-blue-600 hover:text-blue-500"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaFileAlt className="h-5 w-5 mr-2" />
                          Download Form
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Resources */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Additional Resources
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Find more information and resources to help you navigate our services.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <a
                href="/faq"
                className="flex items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <FaFileAlt className="h-6 w-6 text-blue-600" />
                <span className="ml-3 text-gray-900">Frequently Asked Questions</span>
                <FaExternalLinkAlt className="ml-auto h-5 w-5 text-gray-400" />
              </a>
              <a
                href="/forms"
                className="flex items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <FaDownload className="h-6 w-6 text-blue-600" />
                <span className="ml-3 text-gray-900">All Forms & Documents</span>
                <FaExternalLinkAlt className="ml-auto h-5 w-5 text-gray-400" />
              </a>
              <a
                href="/contact"
                className="flex items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <FaFileAlt className="h-6 w-6 text-blue-600" />
                <span className="ml-3 text-gray-900">Contact Service Department</span>
                <FaExternalLinkAlt className="ml-auto h-5 w-5 text-gray-400" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services 