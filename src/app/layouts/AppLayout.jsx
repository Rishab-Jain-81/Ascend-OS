import Navbar from '../../components/common/Navbar';
// import Sidebar from '../../components/common/Sidebar';
import { Outlet } from 'react-router-dom';

function AppLayout() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex">
        {/* <Sidebar /> */}
        <main className="flex-1 p-6 bg-(--bg-light) text-(--text)">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default AppLayout;
