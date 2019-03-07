import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (endpoint) => {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const getPosition = () => {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
    };

    const fetchData = async () => {
        try {
            const position = await getPosition();
            const latitude  = position.coords.latitude;
            const longitude = position.coords.longitude;

            const response = await axios.get(`http://api.openweathermap.org/data/2.5/${endpoint}?lat=${latitude}&lon=${longitude}&units=metric&appid=357f6367246387e904e60567cda606c7`);
            setData(response.data);
            setIsLoading(false);
        } catch (e) {
            setError(e);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return [data, error, isLoading];
};

export default useFetch;
