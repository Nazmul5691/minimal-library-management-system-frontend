

import Form from "@/components/form";
import { FaMobileAlt } from "react-icons/fa";
import { IoMailUnreadSharp } from "react-icons/io5";


const ContactUs = () => {
    return (
        <div className="py-10 lg:py-20 px-5 md:px-10 lg:px-20">
            <h1 className="text-2xl md:text-3xl lg:text-4xl text-center">Get in Touch</h1>
            <div className="pt-5 lg:pt-10 flex flex-col lg:flex-row items-center justify-center gap-8">
                <div className="w-full">
                    <h1 className="text-xl lg:text-2xl text-center">Let's Connect!</h1>
                    <div className="flex justify-center items-center text-center pt-3 lg:pt-4 pb-5">
                        <p className="w-[90%] md:w-[80%]">
                            Have questions about Bookly or want to collaborate? We’re always excited to hear from libraries, schools, and book lovers. Reach out and let’s simplify library management together.
                        </p>
                    </div>
                    <div className="flex flex-col gap-8">
                        <div className="max-w-xs mx-auto bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
                            <div className="flex flex-col items-center p-6">
                                <div className="text-blue-700 text-4xl mb-4">
                                    <FaMobileAlt className="w-10 h-10" />
                                </div>
                                <h3 className="text-xl lg:text-2xl font-semibold">+44 (0) 1154 5470946</h3>
                                <p className="text-gray-600 mt-2 text-center">
                                    Call us to learn more about how Bookly can streamline your library system.
                                </p>
                            </div>
                            
                            <div className="h-1 bg-purple-500 mt-4"></div>
                        </div>

                        <div className="max-w-xs mx-auto bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300">
                            <div className="flex flex-col items-center p-6">
                                <div className="text-blue-700 text-4xl mb-4">
                                    <IoMailUnreadSharp className="w-10 h-10" />
                                </div>
                                <h3 className="text-xl lg:text-2xl font-semibold">booklyinfo@gmail.com</h3>
                                <p className="text-gray-600 mt-2 text-center">
                                    Send us a message anytime — our team is here to support your Bookly journey.
                                </p>
                            </div>
                            <div className="h-1 bg-purple-500 mt-4"></div>
                        </div>
                    </div>
                </div>


                <div className="w-full lg:pt-10 pt-0">
                    <Form />
                </div>
            </div>
        </div>
    );
};

export default ContactUs;




