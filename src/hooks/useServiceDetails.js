import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const useServiceDetails = () => {
    const [service, setService] = useState({});
    const { serviceId } = useParams();

    useEffect( () =>{
        const url = `http://localhost:5000/service/${serviceId}`;
        console.log(url);
        fetch(url)
        .then(res=> res.json())
        .then(data => setService(data));

    }, [serviceId])

    return[service, setService]

};

export default useServiceDetails;