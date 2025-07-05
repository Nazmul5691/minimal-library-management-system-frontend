
import { useState } from "react"
import { ModeToggle } from "@/components/mood-toggler"
import { Link } from "react-router-dom"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import { Menu, X } from "lucide-react"

export function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900 shadow-md">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">

                <div className="flex items-center">
                    <img src="https://i.ibb.co/HwBNRKs/Bookly.png" alt="bookly" className="h-14 w-14" />
                    <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">Bookly</h1>
                </div>

                <div className="lg:hidden flex items-center gap-4">
                    <ModeToggle />
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-gray-800 dark:text-white focus:outline-none"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Desktop Navigation & Mode Toggle  */}
                <div className="hidden lg:flex items-center gap-6">
                    <NavigationMenu viewport={false}>
                        <NavigationMenuList className="flex items-center gap-2">

                            <NavigationMenuItem>
                                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                    <Link to="/">Home</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                    <Link to="/books">All Books</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                    <Link to="/create-book">Add Books</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                    <Link to="/borrow-summary">Borrow Summary</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <NavigationMenuTrigger>About</NavigationMenuTrigger>
                                <NavigationMenuContent className="z-20">
                                    <ul className="grid gap-2 p-2 w-36">
                                        <li>
                                            <NavigationMenuLink asChild>
                                                <Link to="/authors">Authors</Link>
                                            </NavigationMenuLink>
                                        </li>
                                        <li>
                                            <NavigationMenuLink asChild>
                                                <Link to="/aboutUs">About Us</Link>
                                            </NavigationMenuLink>
                                        </li>
                                        <li>
                                            <NavigationMenuLink asChild>
                                                <Link to="/contact">Contact Us</Link>
                                            </NavigationMenuLink>
                                        </li>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>


                    <ModeToggle />
                </div>
            </div>

            {/* Mobile Menu Content  */}
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-white dark:bg-gray-800 shadow-lg pb-4">
                    <nav className="flex flex-col items-start space-y-2 py-2 pl-4 pr-4">
                        <Link
                            to="/"
                            className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            to="/books"
                            className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            All Books
                        </Link>
                        <Link
                            to="/create-book"
                            className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Add Books
                        </Link>
                        <Link
                            to="/borrow-summary"
                            className="block px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Borrow Summary
                        </Link>

                        <NavigationMenu viewport={false} className="w-full">
                            <NavigationMenuList className="flex flex-col w-full">
                                <NavigationMenuItem className="w-full">
                                    <NavigationMenuTrigger className="px-4 py-2 text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 w-full text-left">
                                        About
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent className="z-30 w-full !relative !top-0 !left-0 flex justify-center">
                                        <ul className="grid gap-2 p-2 w-36 bg-white dark:bg-gray-700">
                                            <li>
                                                <NavigationMenuLink asChild>
                                                    <Link
                                                        to="/authors"
                                                        className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 w-full text-center"
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                    >
                                                        Authors
                                                    </Link>
                                                </NavigationMenuLink>
                                            </li>
                                            <li>
                                                <NavigationMenuLink asChild>
                                                    <Link
                                                        to="/aboutUs"
                                                        className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 w-full text-center"
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                    >
                                                        About Us
                                                    </Link>
                                                </NavigationMenuLink>
                                            </li>
                                            <li>
                                                <NavigationMenuLink asChild>
                                                    <Link
                                                        to="/contact"
                                                        className="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 w-full text-center"
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                    >
                                                        Contact Us
                                                    </Link>
                                                </NavigationMenuLink>
                                            </li>
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </nav>
                </div>
            )}
        </div>
    )
}
