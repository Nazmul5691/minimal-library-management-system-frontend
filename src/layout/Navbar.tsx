
"use client"

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


// export function Navbar() {
//     return (
//         <div className=" max-w-7xl mx-auto flex justify-between py-3">
//             <div>
//                 <img src="https://i.ibb.co/HwBNRKs/Bookly.png" alt="bookly" />
//                 <h1>Bookly</h1>
//             </div>
//             <div className="flex">
//                 <div>
//                     <div>
//                         <NavigationMenu viewport={false}>
//                             <NavigationMenuList>
//                                 {/* home */}
//                                 <NavigationMenuItem>
//                                     <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
//                                         <Link to="/">Home</Link>
//                                     </NavigationMenuLink>
//                                 </NavigationMenuItem>

//                                 {/* all books */}
//                                 <NavigationMenuItem>
//                                     <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
//                                         <Link to="/books">All Books</Link>
//                                     </NavigationMenuLink>
//                                 </NavigationMenuItem>

//                                 {/* add books */}
//                                 <NavigationMenuItem>
//                                     <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
//                                         <Link to="/create-book">Add Books</Link>
//                                     </NavigationMenuLink>
//                                 </NavigationMenuItem>

//                                 {/* borrow summary */}
//                                 <NavigationMenuItem>
//                                     <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
//                                         <Link to="/borrow-summary">Borrow Summary</Link>
//                                     </NavigationMenuLink>
//                                 </NavigationMenuItem>

//                                 {/* features */}
//                                 <NavigationMenuItem>
//                                     <NavigationMenuTrigger>Features</NavigationMenuTrigger>
//                                     <NavigationMenuContent>
//                                         <ul className="grid w-[130px] gap-4">
//                                             <li>
//                                                 <NavigationMenuLink asChild>
//                                                     <Link to="/aboutUs">About Us</Link>
//                                                 </NavigationMenuLink>
//                                                 <NavigationMenuLink asChild>
//                                                     <Link to="/authors">Authors</Link>
//                                                 </NavigationMenuLink>
//                                                 <NavigationMenuLink asChild>
//                                                     <Link to="/contact">Contact Us</Link>
//                                                 </NavigationMenuLink>
//                                             </li>
//                                         </ul>
//                                     </NavigationMenuContent>
//                                 </NavigationMenuItem>

//                             </NavigationMenuList>
//                         </NavigationMenu>
//                     </div>
//                 </div>
//                 <div>
//                     <ModeToggle />
//                 </div>
//             </div>
//         </div>
//     )
// }


export function Navbar() {
    return (
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 ">
            {/* Logo and Brand */}
            <div className="flex items-center">
                <img src="https://i.ibb.co/HwBNRKs/Bookly.png" alt="bookly" className="h-14 w-14" />
                <h1 className="text-2xl font-semibold text-gray-800 dark:text-white">Bookly</h1>
            </div>

            {/* Navigation & Mode Toggle */}
            <div className="flex items-center gap-6">
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

                        {/* Features Dropdown */}
                        <NavigationMenuItem>
                            <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                            <NavigationMenuContent className="z-20">
                                <ul className="grid gap-2 p-2 w-36">
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <Link to="/aboutUs">About Us</Link>
                                        </NavigationMenuLink>
                                    </li>
                                    <li>
                                        <NavigationMenuLink asChild>
                                            <Link to="/authors">Authors</Link>
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

                {/* Dark/Light Mode Toggle */}
                <ModeToggle />
            </div>
        </div>
    );
}
