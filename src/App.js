import {Route, Routes} from "react-router-dom";

import './App.css';
import Layout from "./Layout/Layout";
import JobsList from "./pages/JobsList/JobsList";


function App() {
    return (
        <div className="app">
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<JobsList/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
