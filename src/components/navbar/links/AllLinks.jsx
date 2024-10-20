import React, { useState, useEffect, useRef } from "react";
import Navlink from "../navlink/Navlink";

const AllLinks = () => {
    const [openDropdown, setOpenDropdown] = useState(false);
    const [hoveredSubLink, setHoveredSubLink] = useState(null);
    const dropdownRef = useRef(null);

    const links = [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        {
            title: "Services",
            path: "/service",
            subLinks: [
                { title: "Consultation", path: "/service/consultation" },
                {
                    title: "Personality Transformation",
                    path: "/service/personality-transformation",
                    subLinks: [
                        { title: "Personality Transformation for Men", path: "/service/personality-transformation/Men" },
                        { title: "Personality Transformation for Women", path: "/service/personality-transformation/Women" }
                    ]
                },
{
                    title: "Corporate Grooming",
                    path: "/service/corporate-grooming",
                    subLinks: [
                        { title: "Bespoke Business Etiquette & Corporate Grooming ", path: "/service/bespoke-business-etiquette-&-corporate-grooming" },
                        { title: "In-house Corporate Training", path: "/service/In-house-Corporate-Training" }

            ]},
{
                    title: "Children's Etiquette",
                    path: "/service/children's-etiquette",
                   
                },

{
                    title: "Young Adult Etiquette",
                    path: "/service/young-adult-etiquette",
                   
                },

{
                    title: "Latest Workshop",
                    path: "/service/latest workshop",
                    subLinks: [
                        { title: "Ladies Grooming & Social Etiquette Programme", path: "/service/Latest Workshop/Business Etiquette & Corporate Grooming Programme" },
                        { title: "Young Adult-Grooming & Etiquette", path: "/service/Latest Workshop/Young Adult-Grooming & Etiquette" },
                        { title: "Young Adult Training", path: "/service/Latest Workshop/young-adult" },
                        { title: "Dining Etiquette Workshop", path: "/service/Latest Workshop/Dining Etiquette Workshop" }
                    ]
                },
{
                    title: "Train the Trainer",
                    path: "/service/train-the-trainer",
                   
                },
            ]
        },
        { title: "Blog", path: "/blog" }
    ];

    // Close dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpenDropdown(false);
                setHoveredSubLink(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    const toggleDropdown = () => {
        setOpenDropdown((prev) => !prev);
    };

    return (
        <div className="flex space-x-6 items-center">
            {links.map((link, i) => (
                <div key={i} className="relative" ref={dropdownRef}>
                    {!link.subLinks ? (
                        <Navlink item={link} />
                    ) : (
                        <div className="inline-block">
                            {/* Main Dropdown Button */}
                            <button
                                className=" font-medium text-base cursor-pointer hover:text-[#933469] flex items-center"
                                onClick={toggleDropdown}
                                onMouseEnter={() => setOpenDropdown(true)} // Open on hover
                                onMouseLeave={() => setOpenDropdown(false)} // Close on mouse leave
                            >
                                {link.title}
                                <svg
                                    className="ml-2 w-4 h-4"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>

                            {/* Dropdown for Services */}
                            {openDropdown && (
                                <div className="absolute mt-2 bg-white rounded-lg shadow-lg w-48">
                                    {link.subLinks.map((subLink, j) => (
                                        <div
                                            key={j}
                                            className="relative group"
                                            onMouseEnter={() => setHoveredSubLink(subLink.title)} // Set hovered subLink
                                            onMouseLeave={() => setHoveredSubLink(null)} // Reset hovered subLink
                                        >
                                            <button
                                                className="block px-4 py-2 text-left w-full hover:bg-gray-100"
                                            >
                                                {subLink.title}
                                            </button>

                                            {/* Sub-dropdown Content */}
                                            {hoveredSubLink === subLink.title && subLink.subLinks && (
                                                <div className="absolute left-48 mt-0 bg-white shadow-lg rounded-lg w-48">
                                                    <div className="flex flex-col">
                                                        {subLink.subLinks.map((nestedLink, k) => (
                                                            <Navlink key={k} item={nestedLink} />
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default AllLinks;