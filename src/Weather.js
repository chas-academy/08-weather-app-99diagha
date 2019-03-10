import React, {Fragment} from 'react';
import moment from 'moment';
import useFetch from "./useFetch";

const Weather = (props) => {
    const [data, error, isLoading] = useFetch('weather', props);
    const { unit } = props;

    return (
        <section className="weather">
            {isLoading ? (
                <h1>Loading...</h1>
            ) : (
                error ? (
                    <h1>{error.message}</h1>
                ) : (
                    <Fragment>
                        <h2>{data.name}, {data.sys.country}</h2>
                        <h3>{moment.unix(data.dt).format('dddd, h a')}</h3>
                        <h2>{Math.round(data.main.temp)} {unit === 'metric' ? '℃' : '℉'}</h2>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Wind</td>
                                    <td>{data.wind.speed} {unit === 'metric' ? 'm/s' : 'm/h'}</td>
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
                                    <td>Sunset</td>
                                    <td>{moment.unix(data.sys.sunset).format('h:mm a')}</td>
                                </tr>
                            </tbody>
                        </table>
                    </Fragment>
                )
            )}
        </section>
    );
};

export default Weather;
