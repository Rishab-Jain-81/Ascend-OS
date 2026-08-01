export function saveDashboard(dashboard) {
  localStorage.setItem('dashboard', JSON.stringify(dashboard));
}
export function loadDashboard() {
  const dashboard = localStorage.getItem('dashboard');
  if (dashboard) {
    return JSON.parse(dashboard);
  }
  return null;
}
