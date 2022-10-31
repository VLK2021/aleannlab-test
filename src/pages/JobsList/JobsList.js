import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import './JobsListStyle.css';
import Job from "../../components/Job/Job";
import {getAllJobs} from "../../store";


const JobsList = () => {
    const {jobsArr, error} = useSelector(store => store.jobs);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllJobs())
    }, [])


    return (
        <div className={"jobsList"}>
            {error && <h1>{error.message()}</h1>}

            {jobsArr && jobsArr.map(value => <Job key={value.id} job={value}/>)}
        </div>
    );
};

export default JobsList;