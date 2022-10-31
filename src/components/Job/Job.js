import React from 'react';

import './JobStyle.css';
import {ImLocation2} from "react-icons/im";
import {NavLink} from "react-router-dom";


const Job = ({job}) => {
    const {
        address,
        benefits,
        createdAt,
        description,
        email,
        employment_type,
        id,
        location,
        name,
        phone,
        pictures,
        salary,
        title,
        updatedAt
    } = job;

    return (
        <div className={"job"}>
            <div className={"job-img"}>
                <img src={pictures[0]} alt="pictures"/>
            </div>


            <div className={"job-information"}>
                <NavLink to={id.toString()}>
                    <div className={"job-information-title"}>{title}</div>
                </NavLink>

                <div className={"job-information-name"}>
                    <div className={"job-information-name-address"}>Department name: {address}</div>
                    <div className={"job-information-name-name"}>- {name}</div>
                </div>

                <div className={"job-information-location"}><ImLocation2/> lat: {location.lat} long: {location.long}
                </div>

            </div>


            <div className={"job-rating"}></div>
        </div>
    );
};

export default Job;