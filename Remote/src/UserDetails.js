import React from "react";
import './UserDetails.css';

const UserDetails = ({ user , onClose }) => {
    if(!user) return null;

    return  (
        <div className="user-detail-overlay">
            <div className="user-detail-container">
                <button className="close-button" onClick={onClose}></button>

                <h2>{user.name}</h2>
                <p><strong>Email:</strong>{user.email}</p>
                <p><strong>Phone:</strong>{user.phone}</p>
                <p><strong>Address:</strong></p>

                <p>{user.address.street},{user.address.suite}</p>
                <p>{user.address.city}, {user.address.zipcode}</p>
            </div>
        </div>
    )

}
export default UserDetails;