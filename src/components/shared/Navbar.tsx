import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white p-4 sm:p-6 md:flex md:justify-between md:items-center">
           <div className="container mx-auto flex justify-between items-center">
            <a href="" className="text-2xl font-bold">Tutor</a>
            <div className="hidden md:flex">
                <Link href="/" className="mx-2 hover:text-gray-300">
                    Home
                </Link>
                <Link href="/browse" className="mx-2 hover:text-gray-300">
                    Browse Tutors
                </Link>
                <Link href="/about" className="mx-2 hover:text-gray-300">
                    About us
                </Link>
                <Link href="/faq" className="mx-2 hover:text-gray-300">
                    FAQ
                </Link>
            </div>
           </div>
        </nav>
    );
};

export default Navbar;