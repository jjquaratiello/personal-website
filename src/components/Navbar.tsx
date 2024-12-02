import { FaYoutube, FaLinkedin } from "react-icons/fa";

const Navbar: React.FC = () => {
    return (
        <nav className="fixed inset-x-5 top-5 max-w-2xl text-white mx-auto rounded-xl z-50">
            <div className="max-w-2xl mx-auto flex justify-between items-center py-4">
                {/* Logo */}
                <div className="text-lg font-bold text-black bg-white rounded-full w-12 h-12 flex items-center justify-center">
                    <a href="#">JQ</a>
                </div>

                {/* YouTube and LinkedIn Icons */}
                <div className="flex">
                    <a
                        href="https://www.youtube.com/@joequ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center bg-red-900 rounded-full hover:bg-red-500 transition-colors mr-3"
                    >
                        <FaYoutube className="text-white w-6 h-6" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/josephquaratiello/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 flex items-center justify-center bg-blue-900 rounded-full hover:bg-blue-500 transition-colors"
                    >
                        <FaLinkedin className="text-white w-6 h-6" />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
