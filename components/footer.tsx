import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 dark:bg-black dark:text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Section 1 */}
          <div>
            <h3 className="text-lg font-bold mb-4">Apple Books</h3>
            <ul>
              <li>
                <a className="hover:underline" href="/">
                  About Apple Books
                </a>
              </li>
              <li>
                <a className="hover:underline" href="/">
                  Contact Us
                </a>
              </li>
              <li>
                <a className="hover:underline" href="/">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Section 2 */}
          <div>
            <h3 className="text-lg font-bold mb-4">Explore</h3>
            <ul>
              <li>
                <a className="hover:underline" href="/">
                  Browse Sections
                </a>
              </li>
              <li>
                <a className="hover:underline" href="/">
                  Top Charts
                </a>
              </li>
              <li>
                <a className="hover:underline" href="/">
                  New Releases
                </a>
              </li>
            </ul>
          </div>

          {/* Section 3 */}
          <div>
            <h3 className="text-lg font-bold mb-4">Legal</h3>
            <ul>
              <li>
                <a className="hover:underline" href="/">
                  Terms of Use
                </a>
              </li>
              <li>
                <a className="hover:underline" href="/">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a className="hover:underline" href="/">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-8">
          <p>
            &copy; {new Date().getFullYear()} Apple Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>

    // <footer className="w-full flex items-center justify-center py-3">
    //   <Link
    //     isExternal
    //     className="flex items-center gap-1 text-current"
    //     href="/"
    //     title="My Website"
    //   >
    //     <span className="text-default-600">My Footer is here</span>
    //     <p className="text-primary">NextUI</p>
    //   </Link>
    // </footer>
  );
}
