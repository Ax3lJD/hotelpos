import React, { useEffect, useState } from 'react';
import { deleteRoom, listRooms } from "../services/RoomService.js";
import { useNavigate } from "react-router-dom";

const ListRoomComponent = () => {
    const [rooms, setRooms] = useState([]);
    const navigator = useNavigate();

    useEffect(() => {
        getAllRooms();
    }, []);

    function getAllRooms() {
        listRooms()
            .then((response) => {
                setRooms(response.data);
            })
            .catch(error => {
                console.error(error);
            });
    }

    function addNewRoom() {
        navigator('/add-room');
    }

    function updateRoom(id) {
        navigator(`/edit-room/${id}`);
    }

    function removeRoom(id) {
        deleteRoom(id)
            .then(() => {
                getAllRooms();
            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800">Available Rooms</h2>
                <button
                    onClick={addNewRoom}
                    className="bg-blue-600 text-black px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                    + Add Room
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rooms.map(room => (
                    <div
                        key={room.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
                    >
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                                        {room.roomType}
                                    </h3>
                                    <p className="text-2xl font-bold text-blue-600">
                                        ${room.roomPrice}
                                    </p>
                                </div>
                                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                                    room.booked
                                        ? 'bg-red-100 text-red-800'
                                        : 'bg-green-100 text-green-800'
                                }`}>
                                    {room.booked ? 'Booked' : 'Available'}
                                </span>
                            </div>

                            <p className="text-gray-600 mb-4">
                                {room.roomDescription}
                            </p>

                            <div className="flex justify-end gap-2">
                                <button
                                    onClick={() => updateRoom(room.id)}
                                    className="px-3 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => removeRoom(room.id)}
                                    className="px-3 py-2 bg-red-100 text-red-700 rounded-md hover:bg-red-200 transition-colors"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListRoomComponent;