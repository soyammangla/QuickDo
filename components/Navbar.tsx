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
              <Link href="/" className="transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/task" className="transition">
                Tasks
              </Link>
            </li>
            <li>
              <Link href="/calendar" className="transition">
                Calendar
              </Link>
            </li>
          </ul>
        </div>

        {/* Right - Sign In */}
        <div>
          <Link
            href="/signin"
            className="px-5 py-2 bg-neutral-800 text-white rounded-lg transition font-medium"
          >
            Sign In
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
