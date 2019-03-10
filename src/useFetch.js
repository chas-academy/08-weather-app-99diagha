import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (endpoint, props) => {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const { unit } = props;

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

            const response = await axios.get(`https://api.openweathermap.org/data/2.5/${endpoint}?lat=${latitude}&lon=${longitude}&units=${unit}&appid=e78d4d4e83ff8a8dbca1bba369c08e6c`);
            setData(response.data);
            setIsLoading(false);
        } catch (e) {
            setError(e);
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [unit]);

    return [data, error, isLoading];
};

export default useFetch;
