import React from 'react';

function Footer(props) {
    return (
        <footer className="bg-gray-100 dark:bg-gray-800 text-center p-4 mt-8 border-t dark:border-gray-700">
            <p className="text-sm">
                &copy; {new Date().getFullYear()} MGSG Construction Bharat Pvt Ltd. All rights reserved.
            </p>
        </footer>
    );
}

export default Footer;