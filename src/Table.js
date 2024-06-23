import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import './Table.css'; 

const itemsPerPage = 10;

export default function Table (props) {
    const {data}=props;
    const [currentPage, setCurrentPage] = useState(0);
    const [row, setRow] =  useState(null);
    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    const handleClick = (selectedRow)=>{
        setRow(selectedRow);
        const subscription = 2+row?.CreditLines+row?.CreditScore
        alert(subscription+' Rs')
    }
  
    const offset = currentPage * itemsPerPage;
    const currentPageData = data.slice(offset, offset + itemsPerPage);

    return (
        <div>
            <table id='table'>
                <thead>
                    <tr style={{textAlign:'left'}}>
                        <th>Email</th>
                        <th>Name</th>
                        <th>Credit Score</th>
                        <th>Credit Lines</th>
                        <th>Masked Phone Number</th>
                        <th>Subscription</th>
                    </tr>
                </thead>
                <tbody>
                    {currentPageData.map((item) => (
                        <tr key={item.Email}>
                            <td>{item.Email}</td>
                            <td>{item.Name}</td>
                            <td>{item.CreditScore}</td>
                            <td>{item.CreditLines}</td>
                            <td>{item.MaskedPhoneNumber}</td>
                            <td><button onClick={()=>handleClick(item)}>Subscription</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <ReactPaginate
                className='pagination'
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={Math.ceil(data.length / itemsPerPage)}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                activeClassName={'active'}
            />
        </div>
    );
};
