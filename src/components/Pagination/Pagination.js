import React, {useEffect, useState} from 'react';
import {AiOutlineLeft, AiOutlineRight} from "react-icons/ai";

import './PaginationStyle.css';


const Pagination = () => {
    const endPagesFinal = Math.ceil(15);

    const [startPage, setStartPage] = useState(1);
    const [endPage, setEndPage] = useState(15);
    const [page, setPage] = useState(1);

    const pages = [];

    useEffect(() => {
        setEndPage(endPagesFinal);
    }, [endPagesFinal]);


    for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
    }

    const onPageChange = (page) => {
        setPage(page);
    };

    return (
        <div className={'pagination'}>
            <button className={'pagination-btn'} onClick={() => {
                if (page > 1) {
                    onPageChange(page - 1);
                }
            }}>
                <AiOutlineLeft
                    className={'AiOutline'}
                    size={35}
                    fill={'#3A4562'}
                />
            </button>

            {
                pages.map(item =>
                    <div key={item}
                         className={`pagination-pages ${page === item && 'active-page'}`}
                         onClick={() => {
                             onPageChange(item);
                         }}>{item}
                    </div>)
            }

            <button className={'pagination-btn'} onClick={() => {
                if (page < 15) {
                    onPageChange(page + 1);
                }
            }}>
                <AiOutlineRight
                    className={'AiOutline'}
                    size={35}
                    fill={'#3A4562'}
                />
            </button>
        </div>
    );
};
export default Pagination;