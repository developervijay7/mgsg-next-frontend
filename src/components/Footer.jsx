import React from 'react';

function Footer() {
    return (
        <footer className="bg-gray-100 dark:bg-gray-800 text-center p-4 mt-8 border-t dark:border-gray-700">
            <p className="text-sm text-gray-700 dark:text-gray-300 flex flex-col sm:flex-row justify-center items-center gap-2">
                &copy; {new Date().getFullYear()} MGSG Construction Bharat Pvt Ltd. All rights reserved.
            </p>

            {/* Links with Heart Icon */}
            <div className="mt-2 flex justify-center items-center gap-3 text-sm">
                <span className="flex items-center gap-1">
                    Made with
                    <svg className="w-4 h-4 text-red-600 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
                        2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81
                        14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4
                        6.86-8.55 11.54L12 21.35z" />
                    </svg>
                    by
                </span>
                <a href="https://www.attrixtech.com" target="_blank" rel="noopener noreferrer"
                   className="text-blue-600 dark:text-blue-400 hover:underline">
                    Attrix Technologies
                </a>
                <span>&</span>
                <a href="https://vijaygoswami.com" target="_blank" rel="noopener noreferrer"
                   className="text-blue-600 dark:text-blue-400 hover:underline">
                    Vijay Goswami
                </a>
            </div>
        </footer>
    );
}

export default Footer;
