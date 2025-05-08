import { FaHistory, FaUsers, FaChartLine, FaHandshake } from 'react-icons/fa'

function About() {
  const features = [
    {
      icon: <FaHistory className="h-6 w-6" />,
      title: 'Our History',
      description:
        'Founded in 1990, our district has grown from a small community to a vibrant urban center while maintaining its rich cultural heritage.',
    },
    {
      icon: <FaUsers className="h-6 w-6" />,
      title: 'Our Community',
      description:
        'Home to over 100,000 residents, our district is known for its diverse population, strong community values, and inclusive atmosphere.',
    },
    {
      icon: <FaChartLine className="h-6 w-6" />,
      title: 'Growth & Development',
      description:
        'We are committed to sustainable development, economic growth, and improving the quality of life for all our residents.',
    },
    {
      icon: <FaHandshake className="h-6 w-6" />,
      title: 'Community Engagement',
      description:
        'We actively encourage community participation in decision-making processes and local initiatives.',
    },
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 py-32">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover opacity-50"
            src="/about-hero.jpg"
            alt="District Office"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            About Our District
          </h1>
          <p className="mt-6 text-xl text-gray-300 max-w-3xl">
            Learn about our history, mission, and the dedicated team working to serve
            our community.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
              Our Mission
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Building a Better Community Together
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              We are committed to providing excellent services, fostering community
              development, and ensuring a high quality of life for all residents.
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="relative p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-blue-600">{feature.icon}</div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Administrative Structure */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
              Administrative Structure
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              How We're Organized
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Our district is governed by an elected council and managed by a team of
              dedicated professionals working together to serve our community.
            </p>
          </div>

          <div className="mt-12">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-gray-900">
                  District Council
                </h3>
                <p className="mt-2 text-gray-500">
                  Elected representatives who make policy decisions and oversee
                  district operations.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-gray-900">
                  Executive Office
                </h3>
                <p className="mt-2 text-gray-500">
                  Led by the District Commissioner, responsible for implementing
                  council decisions.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-medium text-gray-900">
                  Departments
                </h3>
                <p className="mt-2 text-gray-500">
                  Specialized teams handling various aspects of district services and
                  operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About 