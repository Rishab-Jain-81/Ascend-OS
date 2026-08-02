import { navigation } from '../../config/navigation.js';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className=" w-64 h-[calc(100vh-4rem)] flex flex-col gap-2 bg-(--bg-dark) text-(--text) py-6 sticky top-16 z-40 border-r border-(--border-muted)">
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
