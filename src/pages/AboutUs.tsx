import { BookOpenText, Target, Users, Lightbulb } from 'lucide-react';

export default function AboutUs() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 font-inter text-gray-800 dark:text-gray-100">
            
            <section className="relative bg-gradient-to-r from-indigo-600 to-purple-700 py-20 md:py-28 text-white shadow-md rounded-b-3xl">
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fade-in-down">
                        About Bookly
                    </h1>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto opacity-90 animate-fade-in-up">
                        Your ultimate destination for discovering, borrowing, and managing your favorite books.
                        We're passionate about connecting readers with stories.
                    </p>
                </div>
            </section>

            
            <main className="container mx-auto px-6 py-16 text-gray-800 dark:text-gray-100"> 
                {/* Our Mission Section */}
                <section className="mb-16 bg-white dark:bg-gray-800 rounded-2xl shadow-xl dark:shadow-2xl p-8 md:p-12 transform transition-transform duration-300 hover:scale-[1.01] border border-gray-100 dark:border-gray-700"> 
                    <div className="flex items-center justify-center mb-6 text-indigo-600 dark:text-indigo-400"> 
                        <Target className="w-10 h-10 mr-3" />
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">Our Mission</h2> 
                    </div>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center max-w-4xl mx-auto"> 
                        At Bookly, our mission is to foster a vibrant community of readers and make literature
                        accessible to everyone. We strive to provide a seamless and enjoyable experience for
                        borrowing, managing, and exploring a diverse collection of books, empowering knowledge
                        and imagination.
                    </p>
                </section>

                {/* Our Story Section */}
                <section className="mb-16 bg-white dark:bg-gray-800 rounded-2xl shadow-xl dark:shadow-2xl p-8 md:p-12 transform transition-transform duration-300 hover:scale-[1.01] border border-gray-100 dark:border-gray-700"> 
                    <div className="flex items-center justify-center mb-6 text-purple-600 dark:text-purple-400"> 
                        <BookOpenText className="w-10 h-10 mr-3" />
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">Our Story</h2> 
                    </div>
                    <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto"> 
                        <p className="mb-4">
                            Bookly was born out of a simple idea: to simplify the process of book borrowing and
                            management for both individuals and small libraries. Frustrated by outdated systems
                            and limited access to diverse titles, our founders envisioned a modern, intuitive
                            platform that puts books at your fingertips.
                        </p>
                        <p>
                            Starting as a small passion project, Bookly has grown into a comprehensive platform,
                            constantly evolving with user feedback and the latest technology. We believe in the
                            power of reading to transform lives, and we're dedicated to building a tool that
                            supports this journey.
                        </p>
                    </div>
                </section>

                {/* Our Values Section */}
                <section className="mb-16 bg-white dark:bg-gray-800 rounded-2xl shadow-xl dark:shadow-2xl p-8 md:p-12 transform transition-transform duration-300 hover:scale-[1.01] border border-gray-100 dark:border-gray-700"> 
                    <div className="flex items-center justify-center mb-6 text-emerald-600 dark:text-emerald-400"> 
                        <Lightbulb className="w-10 h-10 mr-3" />
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">Our Values</h2> 
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
                        <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl shadow-inner dark:shadow-md border border-gray-100 dark:border-gray-700"> 
                            <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-400 mb-3">Accessibility</h3> 
                            <p className="text-gray-600 dark:text-gray-300"> 
                                Making books and knowledge available to everyone, everywhere.
                            </p>
                        </div>
                        <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl shadow-inner dark:shadow-md border border-gray-100 dark:border-gray-700"> 
                            <h3 className="text-xl font-semibold text-purple-700 dark:text-purple-400 mb-3">Community</h3> 
                            <p className="text-gray-600 dark:text-gray-300">
                                Building connections through shared stories and literary discussions.
                            </p>
                        </div>
                        <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-xl shadow-inner dark:shadow-md border border-gray-100 dark:border-gray-700"> 
                            <h3 className="text-xl font-semibold text-emerald-700 dark:text-emerald-400 mb-3">Innovation</h3>
                            <p className="text-gray-600 dark:text-gray-300"> 
                                Continuously improving our platform to enhance the reading experience.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Meet the Team Section */}
                <section className="mb-16 bg-white dark:bg-gray-800 rounded-2xl shadow-xl dark:shadow-2xl p-8 md:p-12 transform transition-transform duration-300 hover:scale-[1.01] border border-gray-100 dark:border-gray-700"> 
                    <div className="flex items-center justify-center mb-8 text-blue-600 dark:text-blue-400"> 
                        <Users className="w-10 h-10 mr-3" />
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">Meet Our Team</h2> 
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        

                        <div className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-900 rounded-xl shadow-md dark:shadow-lg border border-gray-100 dark:border-gray-700"> 
                            <img
                                src="https://placehold.co/120x120/a78bfa/ffffff?text=John+D."
                                alt="Team Member John Doe"
                                className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-indigo-200"
                            />
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">John Doe</h3> 
                            <p className="text-indigo-600 dark:text-indigo-400 text-sm mb-2">Founder & Lead Developer</p> 
                            <p className="text-gray-600 dark:text-gray-300 text-sm"> 
                                Passionate about technology and literature, John brought Bookly to life.
                            </p>
                        </div>
                        

                        <div className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-900 rounded-xl shadow-md dark:shadow-lg border border-gray-100 dark:border-gray-700"> 
                            <img
                                src="https://placehold.co/120x120/c084fc/ffffff?text=Jane+S."
                                alt="Team Member Jane Smith"
                                className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-purple-200" 
                            />
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Jane Smith</h3> 
                            <p className="text-purple-600 dark:text-purple-400 text-sm mb-2">Content Strategist</p> 
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                Curating diverse collections and engaging content for our readers.
                            </p>
                        </div>
                        

                        <div className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-900 rounded-xl shadow-md dark:shadow-lg border border-gray-100 dark:border-gray-700"> 
                            <img
                                src="https://placehold.co/120x120/6ee7b7/ffffff?text=Alex+P."
                                alt="Team Member Alex P."
                                className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-emerald-200" 
                            />
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Alex P.</h3> 
                            <p className="text-emerald-600 dark:text-emerald-400 text-sm mb-2">Community Manager</p> 
                            <p className="text-gray-600 dark:text-gray-300 text-sm">
                                Connecting with our users and building a thriving reading community.
                            </p>
                        </div>
                    </div>
                </section>

                
                <section className="text-center py-12 bg-indigo-50 dark:bg-indigo-900 rounded-2xl shadow-inner dark:shadow-md border border-indigo-100 dark:border-indigo-800"> 
                    <h2 className="text-3xl font-bold text-indigo-800 dark:text-indigo-200 mb-4">Ready to Explore?</h2>
                    <p className="text-lg text-indigo-700 dark:text-indigo-300 mb-8"> 
                        Dive into our vast collection and find your next great read today!
                    </p>
                    <a
                        href="/books" 
                        className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105"
                    >
                        Browse Books
                    </a>
                </section>
            </main>
        </div>
    );
}