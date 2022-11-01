import {Route, Routes} from "react-router-dom";

import './App.css';
import Layout from "./Layout/Layout";
import JobsList from "./pages/JobsList/JobsList";
import JobDetails from "./pages/JobDetails/JobDetails";


function App() {
    return (
        <div className="app">
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<JobsList/>}/>
                    <Route path={':id'} element={<JobDetails/>}/>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
