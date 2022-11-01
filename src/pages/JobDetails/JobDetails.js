import React from 'react';
import {NavLink, useParams} from "react-router-dom";
import {useSelector} from "react-redux";

import './JobDetailsStyle.css';
import rectangle from '../../images/Rectangle.png';
import share from '../../images/Share.png';
import arrow from '../../images/Arrow.png';


const JobDetails = () => {
    const {jobsArr} = useSelector(store => store.jobs);
    const {id} = useParams();
    const jobDetails = jobsArr.filter(val => val.id === id);
    console.log(jobDetails);

    const {
        address,
        benefits,
        createdAt,
        description,
        email,
        employment_type,
        location,
        name,
        phone,
        pictures,
        salary,
        title,
        updatedAt
    } = jobDetails[0];


    return (
        <div className={"jobDetails"}>
            <div className={"jobDetails-content"}>
                <header className={"jobDetails-header"}>
                    <p className={"jobDetails-header-header"}>Job Details</p>
                    <div className={"jobDetails-header-menu"}>

                        <div className={"jobDetails-header-menu-block1"}>
                            <div className={"jobDetails-header-menu-block1-img margin"}><img src={rectangle}
                                                                                             alt="rectangle"/></div>
                            <p>Save to my list</p>
                        </div>

                        <div className={"jobDetails-header-menu-block1"}>
                            <div className={"jobDetails-header-menu-block1-img margin"}><img src={share}
                                                                                             alt="rectangle"/></div>
                            <p>Share</p>
                        </div>

                    </div>
                </header>

                <div className={"jobDetails-button-app"}>
                    <button className={"button"}>applay now</button>
                </div>

                <div className={'jobDetails-price'}>
                    <p className={"jobDetails-price-inf"}>
                        {title}
                    </p>

                    <div className={"jobDetails-price-price"}>
                        <div className={"jobDetails-price-price-salary"}>{salary}</div>
                        <p className={"jobDetails-price-price-text"}>Brutto, per year</p>
                    </div>
                </div>

                <p className={"jobDetails-posted"}>Posted 2 days ago</p>

                <div className={"jobDetails-text"}>
                    <p>{description}</p>
                    <h3>Responsopillities</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dolorum magnam neque
                        repudiandae ullam vel vitae. Consectetur dicta dolore, ea ipsa numquam provident veniam
                        voluptatum. Delectus in qui vel! Vero.
                    </p>
                    <p>
                        Cucum ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto dicta dolores
                        ex fugiat hic iste laborum minima modi mollitia nam necessitatibus, nemo nobis obcaecati
                        omnis quia quo sed sunt suscipit ut vel velit veniam vero vitae voluptatibus! Aut, ea.
                    </p>
                    <p>
                        Rurun ipsum dolor sit amet, consectetur adipisicing elit. Aliquid atque cupiditate error est
                        eum inventore iusto officiis? Aliquid asperiores beatae dicta dignissimos doloremque dolorum
                        eveniet, fuga, harum in ipsa iure necessitatibus quis quos reiciendis similique sit, temporibus
                        ullam voluptatem. Accusamus aspernatur dolor error exercitationem, illo iure maxime minus natus
                        obcaecati omnis perspiciatis sed voluptatibus? Aspernatur dignissimos itaque modi quidem vel.
                    </p>
                </div>

                <div className={"jobDetails-ul"}>
                    <h3>Compensation & Benefits:</h3>
                    <ul>Our physicians enjoy awide range of benefits, including:
                        <li>Very competitive compensation package with bonuses </li>
                        <li>{benefits[0]}</li>
                        <li>{benefits[1] ? benefits[1] : 'Veniam minim nisi incididunt aliquip'}</li>
                        <li>Reprehenderit Lorem consectetur</li>
                    </ul>
                </div>

                <div className={"jobDetails-button-app"}>
                    <button className={"button"}>applay now</button>
                </div>

                <h2>Additional info</h2>

                <div className={"jobDetails-block-buttons1"}>
                    <p>Employment type</p>

                    <div className={"jobDetails-block-buttons1-block"}>
                        <button className={"buttons-block-three"}>Full time</button>
                        <button className={"buttons-block-three"}>Part time</button>
                        <button className={"buttons-block-three"}>Temporary</button>
                    </div>
                </div>

                <div className={"jobDetails-block-buttons2"}>
                    <p>Benefits</p>

                    <div className={"jobDetails-block-buttons2-block"}>
                        <button className={"buttons-block-two"}>Flexible shedule</button>
                        <button className={"buttons-block-two"}>Relocation assistance</button>
                    </div>
                </div>

                <h2>Attached images</h2>

                <div className={"jobDetails-images"}>
                    <div className={"jobDetails-images-img"}><img src={pictures[0]} alt="pictures"/></div>
                    <div className={"jobDetails-images-img"}><img src={pictures[1]} alt="pictures"/></div>
                    <div className={"jobDetails-images-img"}><img src={pictures[2]} alt="pictures"/></div>
                </div>

                <NavLink to={'/'}>
                    <div className={"go-back"}>
                        <div><img src={arrow} alt="arrow"/></div>
                        <p>return to job board</p>
                    </div>
                </NavLink>
            </div>

            <div className={"jobDetails-map"}>map</div>
        </div>
    );
};

export default JobDetails;