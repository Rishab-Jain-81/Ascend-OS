import { useState } from 'react';
import { dashboardData } from '../data/dashboardData.js';
import { useEffect } from 'react';
import { saveDashboard, loadDashboard } from '../services/dashboardStorage.js';

function useDashboard() {
  const [dashboard, setDashboard] = useState(() => {
    return loadDashboard() ?? dashboardData;
  });

  function toggleTask(id) {
    setDashboard((previousDashboard) => {
      return {
        ...previousDashboard,
        tasks: {
          ...previousDashboard.tasks,
          tasks: previousDashboard.tasks.tasks.map((task) => {
            if (task.id !== id) {
              return task;
            }

            return {
              ...task,
              completed: !task.completed,
            };
          }),
        },
      };
    });
  }

  const completedTasks = dashboard.tasks.tasks.filter((task) => task.completed);
  const totalTasks = dashboard.tasks.tasks.length;
  const progress = Math.round(
    totalTasks === 0 ? 0 : (completedTasks.length / totalTasks) * 100
  );

  useEffect(() => {
    saveDashboard(dashboard);
  }, [dashboard]);

  return { dashboard, toggleTask, progress };
}

export default useDashboard;
