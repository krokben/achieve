import "../assets/scss/Task.scss";

const Task = ({ color }) => (
  <div
    className="task"
    style={{
      background: color,
    }}
  ></div>
);

export default Task;
