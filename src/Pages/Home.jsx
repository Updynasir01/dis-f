import { Link } from 'react-router-dom'
import { FaArrowRight, FaMoneyCheckAlt, FaFileAlt, FaExclamationTriangle, FaCalendarAlt, FaCommentDots, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { useEffect, useRef } from 'react'

function Home() {
  const latestNews = [
    {
      id: 1,
      title: 'New Community Center Opening',
      date: 'March 15, 2024',
      excerpt: 'Join us for the grand opening of our new community center...',
      image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
      featured: true,
    },
    {
      id: 2,
      title: 'Road Maintenance Schedule',
      date: 'March 10, 2024',
      excerpt: 'Upcoming road maintenance work in the following areas...',
      image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 3,
      title: 'Public Safety Meeting',
      date: 'March 5, 2024',
      excerpt: 'Monthly public safety meeting to discuss community concerns...',
      image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80',
    },
  ]

  const quickLinks = [
    { name: 'Pay Taxes', path: '/services/taxes', icon: <FaMoneyCheckAlt className="text-white text-2xl mb-2" />, desc: 'Easily pay your district taxes online.' },
    { name: 'Apply for Permits', path: '/services/permits', icon: <FaFileAlt className="text-white text-2xl mb-2" />, desc: 'Submit and track your permit applications.' },
    { name: 'Report an Issue', path: '/services/report', icon: <FaExclamationTriangle className="text-white text-2xl mb-2" />, desc: 'Let us know about local issues or concerns.' },
    { name: 'Community Calendar', path: '/news/calendar', icon: <FaCalendarAlt className="text-white text-2xl mb-2" />, desc: 'Stay updated on upcoming events.' },
  ]

  // Typewriter effect for tagline
  const tagline = "Empowering People. Building Community.";
  const taglineRef = useRef();
  useEffect(() => {
    let i = 0;
    const el = taglineRef.current;
    if (!el) return;
    el.textContent = '';
    const interval = setInterval(() => {
      el.textContent = tagline.slice(0, i + 1);
      i++;
      if (i === tagline.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Animate scroll indicator
  useEffect(() => {
    const indicator = document.getElementById('scroll-indicator');
    if (indicator) {
      indicator.animate([
        { transform: 'translateY(0)' },
        { transform: 'translateY(16px)' },
        { transform: 'translateY(0)' }
      ], {
        duration: 1500,
        iterations: Infinity
      });
    }
  }, []);

  // Fade-in animation for news cards
  useEffect(() => {
    const cards = document.querySelectorAll('.news-card');
    cards.forEach((card, idx) => {
      card.style.opacity = 0;
      setTimeout(() => {
        card.style.transition = 'opacity 0.8s';
        card.style.opacity = 1;
      }, 200 + idx * 200);
    });
  }, []);

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative h-[600px] flex items-center justify-center bg-gray-900 overflow-hidden">
        {/* Animated SVG Wave */}
        <svg className="absolute top-0 left-0 w-full h-40" viewBox="0 0 1440 320"><path fill="#2563eb" fillOpacity="0.4" d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,133.3C672,107,768,85,864,101.3C960,117,1056,171,1152,186.7C1248,203,1344,181,1392,170.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
            alt="District Hero"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/60 to-blue-600/40" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
          <span className="inline-block bg-yellow-400 text-yellow-900 font-bold px-4 py-1 rounded-full mb-4 shadow-lg animate-pulse">Grand Opening: New Community Center!</span>
          <h1 className="text-5xl sm:text-6xl font-extrabold drop-shadow-lg">Welcome to Our District</h1>
          <p ref={taglineRef} className="mt-6 text-2xl sm:text-2xl font-medium text-blue-100 drop-shadow-md min-h-[2.5rem]" />
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/about"
              className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-lg transition"
            >
              Learn More
              <FaArrowRight className="ml-2" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 border border-white text-lg font-semibold rounded-md text-blue-100 bg-transparent hover:bg-white hover:text-blue-700 shadow-lg transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
        {/* Scroll Down Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
          <span className="text-white text-xs mb-1">Scroll Down</span>
          <svg id="scroll-indicator" className="w-6 h-6 text-white animate-bounce" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      {/* SVG Wave Divider */}
      <svg className="w-full h-12 -mb-2" viewBox="0 0 1440 60"><path fill="#f1f5f9" fillOpacity="1" d="M0,32L1440,60L1440,0L0,0Z"></path></svg>

      {/* Quick Links Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-10 text-center">Quick Links</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickLinks.map((link, idx) => (
              <Link
                key={link.name}
                to={link.path}
                className={`flex flex-col items-center bg-gradient-to-br from-blue-500 via-blue-400 to-blue-600 p-8 rounded-xl shadow-md hover:shadow-2xl transition-all transform hover:-translate-y-2 group relative overflow-hidden ${idx % 2 === 0 ? 'hover:from-blue-600 hover:to-blue-400' : 'hover:from-blue-400 hover:to-blue-600'}`}
              >
                <div className="z-10">{link.icon}</div>
                <h3 className="text-lg font-semibold text-white group-hover:text-yellow-200 mt-2 mb-1 z-10">{link.name}</h3>
                <p className="text-blue-100 text-sm text-center z-10">{link.desc}</p>
                <span className="absolute inset-0 opacity-0 group-hover:opacity-20 transition bg-white rounded-xl z-0" />
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* SVG Wave Divider */}
      <svg className="w-full h-12 -mt-2" viewBox="0 0 1440 60"><path fill="#e0e7ef" fillOpacity="1" d="M0,0L1440,32L1440,60L0,60Z"></path></svg>

      {/* Latest News Section */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-10 text-center">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {latestNews.map((news, idx) => (
              <div
                key={news.id}
                className={`news-card bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow transform hover:-translate-y-2 relative border-4 ${news.featured ? 'border-yellow-400' : 'border-transparent'}`}
                style={{ opacity: 0 }}
              >
                <img src={news.image} alt={news.title} className="w-full h-40 object-cover" />
                {news.featured && (
                  <span className="absolute top-4 left-4 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full shadow">FEATURED</span>
                )}
                <div className="p-6">
                  <p className="text-sm text-gray-500">{news.date}</p>
                  <h3 className="mt-2 text-xl font-bold text-gray-900">{news.title}</h3>
                  <p className="mt-3 text-gray-600">{news.excerpt}</p>
                  <Link
                    to={`/news/${news.id}`}
                    className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-500 font-semibold"
                  >
                    Read More
                    <FaArrowRight className="ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/news"
              className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 shadow-lg transition"
            >
              View All News
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <Link
        to="/contact"
        className="fixed bottom-8 right-8 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-5 shadow-2xl flex items-center justify-center transition-all animate-bounce"
        title="Contact Us"
      >
        <FaCommentDots className="text-2xl" />
      </Link>
    </div>
  )
}

export default Home