function DashboardGrid({ children }) {
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 p-6 gap-6">{children}</div>
  );
}

export default DashboardGrid;
