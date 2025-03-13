"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Github, Star, GitFork, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [stars, setStars] = useState<number | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Fetch GitHub stars
    fetch("https://api.github.com/repos/Grenish/licenseinator")
      .then((response) => response.json())
      .then((data) => {
        if (data.stargazers_count) {
          setStars(data.stargazers_count);
        }
      })
      .catch((error) => console.error("Error fetching GitHub stars:", error));

    // Add scroll event listener
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`bg-white border-b border-gray-200 sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-md py-2" : "shadow-sm py-3"
      }`}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-5">
            <Link href="/" className="group">
              <span className="text-xl font-bold text-primary-600 group-hover:text-primary-700 transition-colors duration-200">
                Licenseinator
                <span className="block h-0.5 w-0 group-hover:w-full bg-primary-600 transition-all duration-300"></span>
              </span>
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link
                href="/licenses"
                className="text-gray-700 hover:text-primary-600 transition-colors duration-200 relative group"
              >
                Explore Licenses
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>
          </div>

          {/* GitHub stats and contribution button */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/Grenish/licenseinator"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 transition-colors duration-200 bg-gray-50 hover:bg-gray-100 px-3 py-1.5 rounded-md"
            >
              <Star className="h-4 w-4" />
              <span>{stars !== null ? stars : "..."}</span>
            </a>
            <a
              href="https://github.com/Grenish/licenseinator/fork"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-white bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-md transition-colors duration-200 shadow-sm hover:shadow"
            >
              <GitFork className="h-4 w-4" />
              <span>Contribute</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary-600 transition-colors duration-200"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 border-t border-gray-100 py-3">
            <div className="space-y-2">
              <Link
                href="/licenses"
                className="block text-gray-700 hover:text-primary-600 transition-colors duration-200 py-2 pl-3"
                onClick={() => setIsMenuOpen(false)}
              >
                Explore Licenses
              </Link>
              <div className="flex flex-col space-y-2">
                <a
                  href="https://github.com/Grenish/licenseinator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 transition-colors duration-200 px-3"
                >
                  <Github className="h-4 w-4" />
                  <span>{stars !== null ? `${stars} stars` : "GitHub"}</span>
                </a>
                <a
                  href="https://github.com/Grenish/licenseinator/fork"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-white bg-primary-600 px-4 py-2 rounded-md"
                >
                  <GitFork className="h-4 w-4" />
                  <span>Contribute</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
