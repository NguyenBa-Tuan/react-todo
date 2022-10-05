import "./App.css";
import Todos from "./Todos";
import GetDateToday from "./GetDateToday";
import bgrHeaderNight from "./header-night.jpg";

function App() {
    return (
        <div className="app">
            <div className="content">
                <header
                    className="app-header"
                    style={{ backgroundImage: "url(" + bgrHeaderNight + ")" }}
                >
                    <GetDateToday />
                </header>
                <Todos />
            </div>
        </div>
    );
}

export default App;
