import { navigation } from '../../config/navigation.js';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className=" w-64 min-h-screen flex flex-col gap-2 bg-(--bg-dark) text-(--text) py-6">
      {navigation.map(({ id, label, path }) => (
        <NavLink
          key={id}
          to={path}
          className={({ isActive }) =>
            `${isActive ? 'bg-(--border-muted)' : ''} w-full text-left px-4 py-2 rounded-md hover:bg-(--border-muted) transition-colors duration-200`
          }
        >
          {label}
        </NavLink>
      ))}
    </aside>
  );
}

export default Sidebar;
