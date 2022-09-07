import Task from "./components/Task";
import "./assets/scss/App.scss";

const Category = ({ children }) => <div className="category">{children}</div>;

const App = () => {
  return (
    <div className="app">
      {["pink", "deepskyblue", "lightgreen"].map((color, index) => (
        <div key={index}>
          <Category>
            {[...Array(Math.round(Math.random() * 100))].map((_, index) => (
              <Task key={index} color={color} />
            ))}
          </Category>
        </div>
      ))}
    </div>
  );
};

export default App;
