import React, { useState, useEffect } from "react";
import "./Navbar.css"; // Import your external CSS file for styling

const Navbar = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    // Toggle dropdown visibility when clicking on the profile
    const toggleDropdown = (e) => {
        e.stopPropagation(); // Prevent event from propagating
        setDropdownVisible(prevState => !prevState);
    };

    // Close dropdown if click is outside of the profile
    const closeDropdown = (e) => {
        if (e.target.closest('.nav-profile') === null) {
            setDropdownVisible(false);
        }
    };

    // Close dropdown when clicked outside of the navbar profile section
    useEffect(() => {
        document.addEventListener('click', closeDropdown);
        return () => {
            document.removeEventListener('click', closeDropdown);
        };
    }, []);

    return (
        <header>
            <div className="navbar">
                {/* Logo */}
                <div className="nav-logo">
                    <p>HealthCare</p>
                </div>

                {/* Search Bar */}
                <div className="nav-search">
                    <i className="fa-solid fa-stethoscope search-logo"></i>
                    <input className="search-input" type="text" placeholder="Search..." />
                    <div className="search-icon">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </div>
                </div>

                {/* Dashboard Navigation */}
                <div className="nav-links">
                    <p>Dashboard</p>
                </div>
                <div className="nav-links">
                    <p>About</p>
                </div>
                <div className="nav-links">
                    <p>Reports</p>
                </div>

                {/* Notifications */}
                <div className="nav-notifications">
                    <i className="fa-solid fa-bell"></i>
                    <p>Notifications</p>
                </div>

                {/* Profile with Dropdown */}
                <div className="nav-profile" onClick={toggleDropdown}>
                    <i className="fa-regular fa-user profile-icon"></i>
                    {/* Dropdown visibility is controlled by state */}
                    {dropdownVisible && (
                        <div className="dropdown">
                            <p className="dropdown-item">Appointments</p>
                            <p className="dropdown-item">Settings</p>
                            <p className="dropdown-item">Logout</p>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Navbar;
