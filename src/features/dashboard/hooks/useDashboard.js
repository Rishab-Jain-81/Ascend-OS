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
  const tasks = dashboard.tasks.tasks;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;
  const progress = Math.round(
    totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100
  );
  const completedDays = dashboard.weekly.data.filter(
    (day) => day.completed
  ).length;

  useEffect(() => {
    saveDashboard(dashboard);
  }, [dashboard]);

  return {
    dashboard,
    toggleTask,
    progress,
    completedTasks,
    totalTasks,
    completedDays,
  };
}

export default useDashboard;
