import axios from 'axios';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import useServiceDetails from '../../../hooks/useServiceDetails';

const Checkout = () => {
    const [service] = useServiceDetails();
    const [user] = useAuthState(auth);
    const {serviceId} = useParams();

    // const [user, setUser] = useState({
    //     name:'Moazzem Nahid',
    //     email: 'moazzemhossainnahid@gmail.com',
    //     address: 'Kapasia, Gazipur',
    //     phone: '01927962955'
    // });

    // const handleAddressChange = (event) => {
    //     console.log(event.target.value);
    //     const {address, ...rest} = user;
    //     const newAddress = event.target.value;
    //     const newUser = {address: newAddress, ...rest};
    //     setUser(newUser);
    // }

    const handlePlaceOrder = (event) => {
        event.preventDefault();
        const order = {
            service: service.name,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value,
            name: user.displayName,
            email: user.email
         };

         axios.post('http://localhost:5000/order', order)
             .then(response => {
                 console.log(response);
                const {data} = response;
                if(data.serviceId){
                    toast('Your Order is Booked');
                    event.target.reset();
                }
             })
         
    }

    return (
        <div className='w-50 mx-auto'>
            <h2>Please Order: {service.name}</h2>
            <form onSubmit={handlePlaceOrder} className='mx-4 my-5' action="">
                <input className='form-control bg-success text-light' value={`Name: ${user.displayName}`} type="text" name="name" id="name" placeholder='name' required readOnly disabled/><br />
                <input className='form-control bg-dark text-light' value={`Email: ${user.email}`} type="email" name="email" id="email" placeholder='email' required readOnly disabled/><br />
                <input className='form-control bg-secondary text-light' value={`Service: ${service.name}`} type="text" name="service" id="service" placeholder='service' required /><br />
                <input className='form-control bg-primary text-light' type="text" name="address" id="address" placeholder='address' required autoComplete='off' /><br />
                <input className='form-control bg-info text-light' type="text" name="phone" id="phone" placeholder='phone' required autoComplete='on'/><br />
                <input className='form-control btn btn-danger' type="submit" value="Place Order" />
            </form>
        </div>
    );
};

export default Checkout;