import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const NotificationsPage = () => {
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        axios.get('/api/notifications')
            .then(response => {
                setNotifications(response.data);
                response.data.forEach(notif => {
                    toast(`${notif.title}: ${notif.message}`);
                });
            })
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <Toaster />
            <h1>Notifications</h1>
            {notifications.map(notif => (
                <div key={notif._id}>
                    <h2>{notif.title}</h2>
                    <p>{notif.message}</p>
                </div>
            ))}
        </div>
    );
};

export default NotificationsPage;