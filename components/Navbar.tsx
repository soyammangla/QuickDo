import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-black text-white shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-4">
        {/* Left - Logo */}
        <div className="text-2xl font-bold tracking-tight">
          <Link href="/">QuickDo</Link>
        </div>

        {/* Center - Menu */}
        <div>
          <ul className="flex space-x-8 text-lg font-medium">
            <li>
              <Link href="/" className="hover:text-blue-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/tasks" className="hover:text-blue-400 transition">
                Tasks
              </Link>
            </li>
            <li>
              <Link href="/calendar" className="hover:text-blue-400 transition">
                Calendar
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard"
                className="hover:text-blue-400 transition"
              >
                Dashboard
              </Link>
            </li>
          </ul>
        </div>

        {/* Right - Sign In */}
        <div>
          <Link
            href="/signin"
            className="px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition font-medium"
          >
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
