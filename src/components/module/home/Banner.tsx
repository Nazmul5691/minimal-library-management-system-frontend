
import { BookOpen, Sparkles } from 'lucide-react'; 

export default function Banner() {
    return (
        <section className="relative overflow-hidden mt-5 bg-gradient-to-r from-indigo-700 to-purple-800 text-white py-16 md:py-24 lg:py-32 shadow-xl">
           
            <div className="absolute h-[50px] w-[50px] inset-0 z-0 opacity-10">
                <svg
                    // className="w-full h-full"
                    fill="none"
                    viewBox="0 0 1600 900"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0 0h1600v900H0z"
                        fill="url(#gradient-banner)"
                    />
                    <defs>
                        <linearGradient id="gradient-banner" x1="0" y1="0" x2="1" y2="1">
                            <stop offset="0%" stopColor="#4338CA" />
                            <stop offset="100%" stopColor="#6D28D9" /> 
                        </linearGradient>
                    </defs>
                   
                    <circle cx="200" cy="150" r="100" fill="rgba(255,255,255,0.05)" />
                    <circle cx="1400" cy="750" r="150" fill="rgba(255,255,255,0.05)" />
                    <rect x="500" y="50" width="200" height="100" rx="20" ry="20" fill="rgba(255,255,255,0.03)" transform="rotate(15 500 50)" />
                    <rect x="900" y="800" width="150" height="70" rx="15" ry="15" fill="rgba(255,255,255,0.03)" transform="rotate(-25 900 800)" />
                </svg>
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-6 text-center">
                <div className="flex items-center justify-center mb-6 text-white">
                    <BookOpen className="w-12 h-12 md:w-16 md:h-16 mr-4 animate-bounce-slow" />
                    <h2 className="text-2xl md:text-3xl lg:text-5xl font-extrabold leading-tight animate-fade-in-down">
                        Welcome to Bookly!
                    </h2>
                </div>

                <p className="text-lg md:text-xl lg:text-xl max-w-4xl mx-auto mb-8 opacity-90 animate-fade-in-up">
                    Discover a world of stories, connect with authors, and manage your literary journey with ease.
                    Your next great read is just a click away!
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 animate-fade-in-up delay-300">
                    <a
                        href="/books" 
                        className="inline-flex items-center bg-white text-indigo-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                    >
                        <BookOpen className="w-5 h-5 mr-2" /> Browse Books
                    </a>
                    <a
                        href="/aboutUs"
                        className="inline-flex items-center border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-purple-800 transition-all duration-300 transform hover:scale-105"
                    >
                        <Sparkles className="w-5 h-5 mr-2" /> Learn More
                    </a>
                </div>
            </div>
        </section>
    );
}