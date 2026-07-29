import { FaSun } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { IoSearch } from 'react-icons/io5';

function Navbar() {
  return (
    <nav className="w-full h-16  bg-(--bg) p-6 text-(--text) border-b border-(--border-muted) flex items-center justify-between ">
      <h1 className="text-xl font-semibold tracking-wide">ASCEND OS</h1>

      <div className="flex gap-14 items-center ">
        <button
          aria-label="Search"
          className="cursor-pointer rounded-full transition-transform duration-200  hover:scale-110 focus:outline-none "
        >
          <IoSearch size={28} />
        </button>

        <button
          aria-label="Light Mode"
          className="cursor-pointer transition-transform duration-200 hover:scale-110 focus:outline-none "
        >
          <FaSun size={28} />
        </button>

        <button
          aria-label="Profile"
          className="cursor-pointer transition-transform duration-200 hover:scale-110 focus:outline-none "
        >
          <CgProfile size={28} />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
