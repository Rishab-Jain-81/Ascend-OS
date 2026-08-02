export const dashboardData = {
  welcome: {
    heading: 'Welcome Back',
    body: 'Small progress every day compounds.',
    footer: 'Thursday, 30 July',
  },
  phase: {
    heading: 'Current Phase',
    body: 'Backend',
  },

  streak: {
    heading: 'Current Streak',
    body: '12 days 🔥',
  },

  progress: {
    heading: 'Overall Progress',
    progress: '0%',
  },

  tasks: {
    heading: "Today's Tasks",
    tasks: [
      {
        id: 0,
        task: 'Backend',
        completed: false,
      },
      {
        id: 1,
        task: 'DSA',
        completed: false,
      },
      {
        id: 2,
        task: 'Reading',
        completed: false,
      },
      {
        id: 3,
        task: 'Workout',
        completed: false,
      },
      {
        id: 4,
        task: 'Reflection',
        completed: false,
      },
    ],
  },
  weekly: {
    heading: 'Weekly Consistency',
    data: [
      { id: 0, day: 'Monday', completed: true },
      { id: 1, day: 'Tuesday', completed: true },
      { id: 2, day: 'Wednesday', completed: true },
      { id: 3, day: 'Thursday', completed: null },
      { id: 4, day: 'Friday', completed: null },
      { id: 5, day: 'Saturday', completed: null },
      { id: 6, day: 'Sunday', completed: false },
    ],
    footer: '3/7',
  },
};
