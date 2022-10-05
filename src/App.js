import "./App.css";
import Todos from "./Todos";
import GetDateToday from "./GetDateToday";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <GetDateToday />
            </header>
            <Todos />
        </div>
    );
}

export default App;
