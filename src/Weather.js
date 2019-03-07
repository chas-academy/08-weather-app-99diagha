import React, { Fragment } from 'react';
import moment from 'moment';
import useFetch from "./useFetch";

const Weather = () => {
    const [data, error, isLoading] = useFetch('weather');
    return (
        <Fragment>
            {error && <h1>{error.message}</h1>}
            {isLoading ? (
                <h1>Loading...</h1>
            ) : (
                <Fragment>
                    <h2>{data.name}</h2>
                    <h3>{moment.unix(data.dt).format('dddd, h a')}</h3>
                    <h1>{Math.round(data.main.temp)} &#8451;</h1>
                    <table>
                        <tbody>
                        <tr>
                            <td>Wind</td>
                            <td>{data.wind.speed} m/s</td>
                        </tr>
                        <tr>
                            <td>Humidity</td>
                            <td>{data.main.humidity}%</td>
                        </tr>
                        <tr>
                            <td>Sunrise</td>
                            <td>{moment.unix(data.sys.sunrise).format('h:mm a')}</td>
                        </tr>
                        <tr>
                            <td>Wind</td>
                            <td>{moment.unix(data.sys.sunset).format('h:mm a')}</td>
                        </tr>
                        </tbody>
                    </table>
                </Fragment>
            )}
        </Fragment>
    );
};

export default Weather;
