import React from 'react';
import {ImLocation2} from "react-icons/im";
import {NavLink} from "react-router-dom";

import './JobStyle.css';
import imageMenu from '../../images/Rectangle.png';


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


            <div className={"job-time"}>
                <div className={"job-time-menu"}><img src={imageMenu} alt="icon"/></div>
                <div className={"job-time-day"}>{createdAt.toString()}</div>
            </div>
        </div>
    );
};

export default Job;