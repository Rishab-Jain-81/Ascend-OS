import DashboardGrid from '../components/DashboardGrid.jsx';
import WelcomeSection from '../components/WelcomeSection.jsx';
import PhaseCard from '../components/PhaseCard.jsx';
import StreakCard from '../components/StreakCard.jsx';
import ProgressCard from '../components/ProgressCard.jsx';
import TasksCard from '../components/TasksCard.jsx';
import useDashboard from '../hooks/useDaskboard.js';
import useDateTime from '../hooks/useDateTime.js';

function DashboardPage() {
  const { dashboard, toggleTask, progress, totalTasks, completedTasks } =
    useDashboard();
  const { formattedDate, formattedTime, greeting } = useDateTime();
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <span className="text-xs bg-(--highlight) text-(--text) rounded-lg border border-(--border-muted) px-2 py-1">
          {formattedTime}
        </span>
      </div>

      <DashboardGrid>
        <WelcomeSection
          greeting={greeting}
          body={dashboard.welcome.body}
          date={formattedDate}
        />
        <PhaseCard phase={dashboard.phase} />
        <StreakCard streak={dashboard.streak} />
        <ProgressCard
          heading={dashboard.progress.heading}
          progress={progress}
        />
        <TasksCard
          tasks={dashboard.tasks}
          toggleTask={toggleTask}
          completedTasks={completedTasks}
          totalTasks={totalTasks}
        />
      </DashboardGrid>
    </>
  );
}

export default DashboardPage;
