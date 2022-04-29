import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Order = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(() => {
        
        const getOrders = async() => {
            const email = user.email;
            const url = `http://localhost:5000/orders?email=${email}`;
            const {data} = await axios.get(url);
            setOrders(data);

        }

        getOrders();
    },[user]);
    return (
        <div>
            <h3>Your Order: {orders.length}</h3>
        </div>
    );
};

export default Order;