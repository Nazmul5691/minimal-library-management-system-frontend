
"use client"

import { ModeToggle } from "@/components/mood-toggler"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Link } from "react-router-dom"



export function Navbar() {
    return (
        <div className="flex justify-between py-3">
            <div>
                <h1>boi puka</h1>
            </div>
            <div className="flex">
                <div>
                    <div>
                        <NavigationMenu viewport={false}>
                            <NavigationMenuList>
                                {/* home */}
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                        <Link to="/">Home</Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                                {/* all books */}
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                        <Link to="/books">All Books</Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                                {/* borrow summary */}
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                        <Link to="/borrow-summary">Borrow Summary</Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                                {/* features */}
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>Features</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid w-[130px] gap-4">
                                            <li>
                                                <NavigationMenuLink asChild>
                                                    <Link to="/aboutUs">About Us</Link>
                                                </NavigationMenuLink>
                                                <NavigationMenuLink asChild>
                                                    <Link to="/authors">Authors</Link>
                                                </NavigationMenuLink>
                                                <NavigationMenuLink asChild>
                                                    <Link to="/contact">Contact Us</Link>
                                                </NavigationMenuLink>
                                            </li>
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                </div>
                <div>
                    <ModeToggle />
                </div>
            </div>
        </div>
    )
}


