import Card from '../../../components/ui/Card.jsx';

function DashboardPage() {
  return (
    <>
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <div className="grid sm:grid-cols-2 grid-cols-1 p-6 gap-6">
        <Card className="col-span-2">
          <h2 className="text-lg/9 ">Welcome Back</h2>
          <p className="text-base text-(--text-muted) pb-3">
            Small progress every day compounds.
          </p>
          <span className="text-xs/8 text-(--text-muted)">
            Thursday, July 30
          </span>
        </Card>

        <Card className="col-span-2 sm:col-span-1">
          <h2 className="text-lg/9">Current Phase</h2>
          <span className="text-base text-(--text-muted)">Backend</span>
        </Card>

        <Card className="col-span-2 sm:col-span-1">
          <h2 className="text-lg/9">Current Streak</h2>
          <span className="text-base text-(--text-muted)">12 days 🔥</span>
        </Card>

        <Card className="col-span-2">
          <h2 className="text-lg/9">Overall Progress</h2>
          <div className="flex items-center  gap-2 pt-2">
            <div className="w-40 h-4 border border-(--border) rounded-lg ">
              <div className="w-[65%] h-4 bg-(--primary) rounded-lg"></div>
            </div>
            <span className="text-sm text-(--text-muted) ">65%</span>
          </div>
        </Card>

        <Card className="col-span-2">
          <h2 className="text-lg/9">Today's Tasks</h2>
          <ul>
            <li>☐ Backend</li>
            <li>☐ DSA</li>
            <li>☐ Reading</li>
            <li>☐ Workout</li>
            <li>☐ Reflection</li>
          </ul>
        </Card>
      </div>
    </>
  );
}

export default DashboardPage;
