import React, {useState } from "react";
import axios from 'axios';
import './DataFetch.css';
import DataFetchButton from "./DataFetchButton";
import './DataFetchButton.css';
import UserDetails from "./UserDetails";



const DataFetch = () => {
    const [data , setData] = useState([]);    
    const [error , setError] = useState(null);
    const [searchTerm , setSearchTerm] = useState("");
    const [currentPage , setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    const [selectedUser , setSelectedUser] = useState(null);


    const handleFetchData = () => {
        setError(null);

        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                setError(error);
            });
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    }

    const handleUserClick = (user) => {
        setSelectedUser(user);
    };

    const handleCloseDetail = () => {
        setSelectedUser(null);
    }

    const filteredData = data.filter(user => 
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    //Calculation for Pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirsttItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirsttItem , indexOfLastItem);
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    // useEffect(()=> {
    //     axios.get('https://jsonplaceholder.typicode.com/users')
    //         .then(response => {
    //             setData(response.data);
    //             setLoading(false);
    //         })
    //         .catch(error => {
    //             setError(error);
    //             setLoading(false);
    //         });
    // },[]);

    // if(loading) {
    //     return <p>Loading....</p>;
    // }
    // if(error) {
    //     return <p>Error fetching data: {error.message}</p>
    // }

    return (
        <div className="data-container">
            <DataFetchButton  onClick={handleFetchData} />
            
            <h2>Users List</h2>

            <input 
                type="text"
                className="search-input"
                placeholder="Search by name or email"
                value={searchTerm}
                onChange={handleSearchChange}            
            />

            {error && <p>Error on fetching Data: {error.message}</p>}

            <ul>
                {currentItems.map(user => (
                    <li key={user.id} onClick={() => handleUserClick(user)}>
                        <p>Name: {user.name}</p>
                        <p>Email: {user.email}</p>
                    </li>
                ))}
            </ul>
            <div className="pagination">
                {Array.from({ length: totalPages}, (_, index) => (
                    <button
                        key={index+1}
                        className={index +1 === currentPage ? "active" : ""}
                        onClick={() => handlePageChange(index + 1)}
                    >
                        {index+1}
                    </button>
                ))}
            </div>
            {selectedUser && <UserDetails user={selectedUser} onClose={handleCloseDetail} /> }
        </div>
    )
}
export default DataFetch;