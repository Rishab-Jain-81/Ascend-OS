function ProgressBar({ progress }) {
  return (
    <div className="w-40 h-4 border border-(--border) rounded-lg ">
      <div
        className="h-4 bg-(--secondary) rounded-lg"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}

export default ProgressBar;
