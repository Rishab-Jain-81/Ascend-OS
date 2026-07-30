import DashboardGrid from '../components/DashboardGrid.jsx';
import WelcomeSection from '../components/WelcomeSection.jsx';
import PhaseCard from '../components/PhaseCard.jsx';
import StreakCard from '../components/StreakCard.jsx';
import ProgressCard from '../components/ProgressCard.jsx';
import TasksCard from '../components/TasksCard.jsx';
import { dashboardData } from '../data/dashboardData.js';

function DashboardPage() {
  return (
    <>
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <DashboardGrid>
        <WelcomeSection welcome={dashboardData.welcome} />
        <PhaseCard phase={dashboardData.phase} />
        <StreakCard streak={dashboardData.streak} />
        <ProgressCard progress={dashboardData.progress} />
        <TasksCard tasks={dashboardData.tasks} />
      </DashboardGrid>
    </>
  );
}

export default DashboardPage;
