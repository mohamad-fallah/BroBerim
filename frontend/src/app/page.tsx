'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden relative">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-500/10 rounded-full blur-2xl animate-spin-slow"></div>
      </div>

      {/* Mouse follower */}
      <div
        className="fixed w-4 h-4 bg-white/20 rounded-full blur-sm pointer-events-none transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: `scale(${Math.min(1 + Math.abs(mousePosition.x - window.innerWidth / 2) / 500, 2)})`
        }}
      ></div>

      {/* Main content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-6 animate-fade-in-up">
                Boro
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in-up delay-300">
                تجربه وب مدرن و شگفت‌انگیز
              </p>سشی
            </div>

            <div className="backdrop-blur-lg bg-white/10 rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl animate-fade-in-up delay-500">
              <p className="text-lg text-gray-200 mb-8 leading-relaxed">
                پلتفرم پیشرفته ما با استفاده از جدیدترین فناوری‌ها طراحی شده تا تجربه‌ای بی‌نظیر برای کاربران فراهم کند.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <span className="relative z-10">شروع کنید</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                <button className="px-8 py-4 border-2 border-white/30 rounded-full text-white font-semibold text-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  بیشتر بدانید
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
              ویژگی‌های منحصر به فرد
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "طراحی مدرن",
                  description: "رابط کاربری زیبا و مدرن با استفاده از جدیدترین ترندهای طراحی",
                  icon: "🎨"
                },
                {
                  title: "کارایی بالا",
                  description: "بهینه‌سازی شده برای سرعت و عملکرد فوق‌العاده در همه دستگاه‌ها",
                  icon: "⚡"
                },
                {
                  title: "امنیت کامل",
                  description: "سیستم امنیتی پیشرفته برای محافظت از داده‌های شما",
                  icon: "🔒"
                }
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group backdrop-blur-lg bg-white/5 rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer"
                >
                  <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="backdrop-blur-lg bg-white/5 rounded-3xl p-8 md:p-12 border border-white/20">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                {[
                  { number: "10K+", label: "کاربر فعال" },
                  { number: "99.9%", label: "در دسترس بودن" },
                  { number: "24/7", label: "پشتیبانی" },
                  { number: "5⭐", label: "رضایت کاربران" }
                ].map((stat, index) => (
                  <div key={index} className="group">
                    <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                      {stat.number}
                    </div>
                    <div className="text-gray-300 text-lg">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              آماده شروع هستید؟
            </h2>
            <p className="text-xl text-gray-300 mb-12">
              همین امروز عضو جامعه ما شوید و از امکانات بی‌نظیر بهره‌مند شوید.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group relative px-12 py-5 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full text-white font-bold text-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <span className="relative z-10">عضویت رایگان</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-pink-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              <button className="px-12 py-5 border-2 border-white/40 rounded-full text-white font-bold text-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:scale-105">
                تماس با ما
              </button>
            </div>
          </div>
        </section>
        </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes spin-slow {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .delay-300 {
          animation-delay: 0.3s;
        }

        .delay-500 {
          animation-delay: 0.5s;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
}
