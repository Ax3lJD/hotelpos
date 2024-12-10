import React from 'react';
import './PaymentModal.css';

const PaymentModal = ({ room, reservationDetails, onClose, onSubmit }) => {
    const calculateTotal = () => {
        const checkIn = new Date(reservationDetails.checkInDate);
        const checkOut = new Date(reservationDetails.checkOutDate);
        const nights = (checkOut - checkIn) / (1000 * 60 * 60 * 24);
        return room.roomPrice * nights;
    };

    return (
        <div className="payment-modal-overlay">
            <div className="payment-modal">
                <h3>Payment Details</h3>

                <div className="reservation-summary">
                    <h4>Reservation Summary</h4>
                    <p>Room: {room.roomType} - Room {room.roomNumber}</p>
                    <p>Check-in: {new Date(reservationDetails.checkInDate).toLocaleDateString()}</p>
                    <p>Check-out: {new Date(reservationDetails.checkOutDate).toLocaleDateString()}</p>
                    <p>Number of Guests: {reservationDetails.numberOfGuests}</p>
                    <p className="total">Total Amount: ${calculateTotal()}</p>
                </div>

                <div className="payment-form">
                    <div className="form-group">
                        <label>Card Number</label>
                        <input type="text" placeholder="**** **** **** ****" disabled />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Expiry Date</label>
                            <input type="text" placeholder="MM/YY" disabled />
                        </div>
                        <div className="form-group">
                            <label>CVV</label>
                            <input type="text" placeholder="***" disabled />
                        </div>
                    </div>
                </div>

                <div className="modal-buttons">
                    <button className="btn btn-secondary" onClick={onClose}>
                        Cancel
                    </button>
                    <button className="btn btn-primary" onClick={onSubmit}>
                        Confirm Payment
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PaymentModal;