import DashboardGrid from '../components/DashboardGrid.jsx';
import WelcomeSection from '../components/WelcomeSection.jsx';
import PhaseCard from '../components/PhaseCard.jsx';
import StreakCard from '../components/StreakCard.jsx';
import ProgressCard from '../components/ProgressCard.jsx';
import TasksCard from '../components/TasksCard.jsx';
import useDashboard from '../hooks/useDaskboard.js';

function DashboardPage() {
  const { dashboard, toggleTask, progress } = useDashboard();

  return (
    <>
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <DashboardGrid>
        <WelcomeSection welcome={dashboard.welcome} />
        <PhaseCard phase={dashboard.phase} />
        <StreakCard streak={dashboard.streak} />
        <ProgressCard
          heading={dashboard.progress.heading}
          progress={progress}
        />
        <TasksCard tasks={dashboard.tasks} toggleTask={toggleTask} />
      </DashboardGrid>
    </>
  );
}

export default DashboardPage;
