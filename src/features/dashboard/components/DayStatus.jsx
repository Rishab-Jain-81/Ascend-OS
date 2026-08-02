function DayStatus({ status }) {
  const DayStatus = {
    true: '✅',
    false: '❌',
    null: '⏳',
  };
  return <span>{DayStatus[String(status)]}</span>;
}

export default DayStatus;
