import Card from '../../../components/ui/Card.jsx';
import ProgressBar from '../../../components/ui/ProgressBar.jsx';
import { dashboardData } from '../data/dashboardData.js';

function DashboardPage() {
  return (
    <>
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="grid sm:grid-cols-2 grid-cols-1 p-6 gap-6">
        <Card className="col-span-2">
          <h2 className="text-lg/9 ">{dashboardData.welcome.heading}</h2>
          <p className="text-base text-(--text-muted) pb-3">
            {dashboardData.welcome.body}
          </p>
          <span className="text-xs/8 text-(--text-muted)">
            {dashboardData.welcome.footer}
          </span>
        </Card>

        <Card className="col-span-2 sm:col-span-1">
          <h2 className="text-lg/9">{dashboardData.phase.heading}</h2>
          <span className="text-base text-(--text-muted)">
            {dashboardData.phase.body}
          </span>
        </Card>

        <Card className="col-span-2 sm:col-span-1">
          <h2 className="text-lg/9">{dashboardData.streak.heading}</h2>
          <span className="text-base text-(--text-muted)">
            {dashboardData.streak.body}
          </span>
        </Card>

        <Card className="col-span-2">
          <h2 className="text-lg/9">{dashboardData.progress.heading}</h2>
          <div className="flex items-center gap-2 pt-2">
            <ProgressBar progress={dashboardData.progress.body} />
            <span className="text-sm text-(--text-muted) ">
              {dashboardData.progress.body}
            </span>
          </div>
        </Card>

        <Card className="col-span-2">
          <h2 className="text-lg/9">{dashboardData.tasks.heading}</h2>
          <ul>
            {dashboardData.tasks.body.map(({ task, id }) => (
              <li key={id}>
                <label>
                  <input type="checkbox" value={task} disabled />
                  {task}
                </label>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </>
  );
}

export default DashboardPage;
