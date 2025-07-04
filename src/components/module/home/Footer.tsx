import { FaFacebookSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareYoutube } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="bg-[#F1F1F8] dark:bg-gray-900">
            <footer>
                <div>
                    <div className="px-5 md:px-10 lg:px-20 py-10 text-black dark:text-gray-300 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
                        <div className="w-full col-span-1 lg:col-span-2">
                            <h1 className="font-bold text-blue-900 dark:text-blue-400 text-2xl lg:text-3xl pb-3">
                                Bookly
                            </h1>
                            <p className="text-sm lg:text-base">
                                Bookly is your trusted book management system.
                            </p>
                            <p className="pt-1 text-sm lg:text-base">
                                Manage your books, members, and borrowing easily.
                            </p>
                            <div className="flex gap-5 pt-4 text-blue-700 dark:text-blue-400 text-xl">
                                <a href="#" aria-label="Facebook" className="hover:text-blue-900 dark:hover:text-blue-600">
                                    <FaFacebookSquare />
                                </a>
                                <a href="#" aria-label="Instagram" className="hover:text-pink-600">
                                    <FaInstagramSquare />
                                </a>
                                <a href="#" aria-label="LinkedIn" className="hover:text-blue-700 dark:hover:text-blue-500">
                                    <FaLinkedin />
                                </a>
                                <a href="#" aria-label="YouTube" className="hover:text-red-600">
                                    <FaSquareYoutube />
                                </a>
                            </div>
                        </div>


                        <div className="w-full text-sm pl-0 lg:pl-5">
                            <h1 className="text-xl lg:text-2xl pb-3">Company</h1>
                            <div><a href="/authors" className="link link-hover">Authors</a></div>
                            <div><a href="/aboutUs" className="link link-hover">About Us</a></div>
                            <div><a href="/contact" className="link link-hover">Contact Us</a></div>
                        </div>

                        <div className="w-full text-sm">
                            <h1 className="text-xl lg:text-2xl pb-3">Legal</h1>
                            <div><a href="#" className="link link-hover">Terms of Use</a></div>
                            <div><a href="#" className="link link-hover">Privacy Policy</a></div>
                            <div><a href="#" className="link link-hover">Cookie Policy</a></div>
                        </div>
                    </div>

                    <div className="pb-10 text-black dark:text-gray-400">
                        <p className="text-center">
                            <span className="text-blue-800 dark:text-blue-400">
                                <a href="#">Bookly</a>
                            </span>{" "}
                            © 2024 - All rights reserved
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
