import React from "react";
import './UserDetails.scss';

const UserDetails = ({ user , onClose }) => {
    if(!user) return null;

    return  (
        <div className="user-detail__overlay">
            <div className="user-detail__container">
                <button className="user-detail__close-button" onClick={onClose}>X</button>

                <h2 className="user-detail__title">{user.name}</h2>
                <p className="user-detail__info"><strong>Email:</strong>{user.email}</p>
                <p className="user-detail__info"><strong>Phone:</strong>{user.phone}</p>
                <p className="user-detail__info"><strong>Address:</strong></p>

                <p className="user-detail__info">{user.address.street},{user.address.suite}</p>
                <p className="user-detail__info">{user.address.city}, {user.address.zipcode}</p>
            </div>
        </div>
    )

}
export default UserDetails;