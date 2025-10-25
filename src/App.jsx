import React, { useState } from 'react';
import { Search, Sparkles, Music, Zap, Star, Play } from 'lucide-react';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const recentSearches = [
    "gala choreography",
    "xg concept photos",
    "shooting star lyrics",
    "xg live performance"
  ];

  const artworks = [
    { id: 1, img: "/public/images/img2.jpg" },
    { id: 2, img: "/public/images/img3.jpg" },
    { id: 3, img: "/public/images/img4.jpg" },
    { id: 4, img: "/public/images/img5.jpg" }
  ];

  const miniCards = [
    { img: "/public/images/img7.jpg", label: "Electro Character", icon: Zap, color: "from-purple-400 to-purple-600" },
    { img: "/public/images/img8.jpg", label: "Inazuma", icon: Star, color: "from-indigo-400 to-indigo-600" }
  ];

  return (
    <div className="min-h-screen relative">
      {/* Background Image with Low Opacity */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: 'url(/public/images/img9.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          opacity: '1'
        }}
      ></div>
      
      {/* Gradient Overlay */}
      <div className="fixed inset-0 z-0 bg-white/5"></div>

      {/* Content */}
      <div className="relative z-10">
        <nav className="flex items-center justify-between px-8 py-4 bg-white bg-opacity- backdrop-blur-md relative z-10 shadow-sm">
          <div className="flex items-center gap-6">
            <button className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center hover:shadow-lg transition-all hover:scale-110">
              <div className="w-5 h-5 bg-white rounded-full opacity-30"></div>
            </button>
            <button className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-purple-100 hover:to-pink-100 transition-all">
              <Sparkles className="w-5 h-5 text-purple-600" />
            </button>
          </div>

          <div className="flex items-center gap-8 text-sm font-medium text-gray-700">
            <a href="#" className="hover:text-purple-600 transition-colors relative group">
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
            </a>
            <a href="#" className="hover:text-purple-600 transition-colors relative group">
              Search
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
            </a>
            <a href="#" className="hover:text-purple-600 transition-colors relative group">
              Message
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 transition-all group-hover:w-full"></span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button className="px-6 py-2 border-2 border-purple-200 rounded-full hover:bg-purple-50 transition-all text-gray-700 font-medium hover:border-purple-400">
              Log in
            </button>
            <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full hover:shadow-lg transition-all hover:scale-105 font-medium">
              Sign up
            </button>
          </div>
        </nav>

        <div className="container mx-auto px-8 py-6 max-w-7xl">
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-400 via-purple-500 to-purple-600 rounded-3xl p-6 relative overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              
              <div className="absolute top-5 left-5 z-10">
                <div className="text-white text-sm font-bold opacity-90 tracking-wider">XGALX</div>
              </div>

              <div className="flex items-center justify-between relative z-10 gap-2">
                <button 
                  onClick={() => setCurrentSlide(Math.max(0, currentSlide - 1))}
                  className="w-10 h-10 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all hover:scale-110 text-white shadow-lg flex-shrink-0"
                >
                  <span className="text-xl">‹</span>
                </button>

                <div className="flex--1 pr-4">
                  <h1 className="text-5xl font-bold mb-2 text-white drop-shadow-lg">
                    XG - GALA
                  </h1>
                  
                  <p className="text-base text-white text-opacity-95 mb-4 max-w-lg drop-shadow">
                    Step into the XGALX universe with their latest cosmic masterpiece
                  </p>

                  <button className="px-6 py-2.5 bg-white text-purple-600 rounded-full font-semibold hover:shadow-xl transition-all hover:scale-105 inline-flex items-center gap-2">
                    <span>Read More</span>
                    <span className="text-lg">→</span>
                  </button>

                  <div className="flex gap-2 mt-4">
                    {[0, 1, 2].map((i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentSlide(i)}
                        className={`h-1 rounded-full transition-all ${
                          i === currentSlide ? 'w-8 bg-white' : 'w-4 bg-white bg-opacity-40 hover:bg-opacity-60'
                        }`}
                      ></button>
                    ))}
                  </div>
                </div>

                <div className="w-[730px] h-98 relative group flex-shrink-0">
                  <div className="absolute inset-0 bg-white/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                  <img 
                    src="/public/images/img.jpg"
                    alt="Main character"
                    className="w-full h-full object-cover rounded-2xl shadow-2xl relative z-10 group-hover:scale-105 transition-transform"
                  />
                </div>

                <button 
                  onClick={() => setCurrentSlide(Math.min(2, currentSlide + 1))}
                  className="w-10 h-10 bg-white bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all hover:scale-110 text-white shadow-lg flex-shrink-0"
                >
                  <span className="text-xl">›</span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5 mt-5">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <h2 className="text-xl font-bold text-gray-800">Artwork</h2>
                  <span className="text-purple-600 text-xl">›</span>
                </div>
                
                <div className="grid grid-cols-2 gap-2.5">
                  {artworks.map((artwork) => (
                    <div
                      key={artwork.id}
                      className="aspect-square rounded-xl overflow-hidden hover:scale-105 transition-transform cursor-pointer shadow-md group"
                    >
                      <img 
                        src={artwork.img}
                        alt={`Artwork ${artwork.id}`}
                        className="w-full h-full object-cover group-hover:brightness-110 transition-all"
                      />
                    </div>
                  ))}
                </div>

                <button className="w-full mt-3 py-2 bg-gradient-to-r from-purple-50 to-pink-50 rounded-full border-2 border-purple-100 hover:border-purple-300 transition-all font-medium text-gray-700 hover:shadow-md text-sm">
                  View More
                </button>
              </div>

              <div className="flex flex-col gap-3">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow">
                  <h2 className="text-xl font-bold mb-3 text-gray-800">Recent Search</h2>
                  
                  <div className="space-y-2">
                    {recentSearches.map((search, index) => (
                      <button
                        key={index}
                        className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full hover:shadow-lg transition-all hover:scale-[1.02] flex items-center gap-3"
                      >
                        <Search className="w-3.5 h-3.5" />
                        <span className="text-left text-sm font-medium">{search}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  {miniCards.map((card, index) => {
                    const Icon = card.icon;
                    return (
                      <div
                        key={index}
                        className="bg-white/80 backdrop-blur-sm rounded-xl p-3 hover:shadow-lg transition-all cursor-pointer relative overflow-hidden h-28 group"
                      >
                        <img 
                          src={card.img}
                          alt={card.label}
                          className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity"
                        />
                        <div className="relative z-10">
                          <div className={`w-9 h-9 bg-gradient-to-br ${card.color} rounded-full flex items-center justify-center mb-1.5 shadow-md`}>
                            <Icon className="w-4 h-4 text-white" />
                          </div>
                          <h3 className="font-bold text-xs text-gray-800">{card.label}</h3>
                        </div>
                      </div>
                    );
                  })}
                  
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-3 hover:shadow-lg transition-all cursor-pointer text-white group hover:scale-105">
                    <div className="w-9 h-9 bg-white bg-opacity-20 rounded-full flex items-center justify-center mb-1.5 group-hover:bg-opacity-30 transition-all">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold text-xs">Constellation</h3>
                    <p className="text-xs opacity-80 mt-0.5">Explore more</p>
                  </div>
                </div>

                {/* Nova Seção: Featured Video/Media */}
                <div className="relative rounded-2xl overflow-hidden shadow-lg group cursor-pointer" style={{ height: '350px' }}>
                  <img 
                    src="/public/images/img1.jpg"
                    alt="Featured content"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-900/85 to-pink-900/70"></div>
                  <div className="relative z-10 h-full flex flex-col justify-center items-center text-center p-6">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all mb-4 group-hover:scale-110">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                    <h3 className="text-white font-bold text-2xl mb-2">Behind The Scenes</h3>
                    <p className="text-white/90 text-base max-w-xs">Watch exclusive GALA content and dive into the making of the cosmic journey</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}