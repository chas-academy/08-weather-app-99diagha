import React, { Fragment } from 'react';
import { groupBy, map } from 'lodash';
import moment from 'moment';

import useFetch from './useFetch';

const chunk = (arr) => groupBy(arr, n => {
    return (n.dt_txt).match(/\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])*/);
});

const Forecast = (props) => {
    const [data, error, isLoading] = useFetch('forecast', props);
    const { unit } = props;

    return (
        <section className="forecast">
            {isLoading ? (
                <h1>Loading...</h1>
            ) : (
                error ? (
                    <h1>{error.message}</h1>
                ) : (
                    <Fragment>
                        {map(chunk(data.list), (day, index) => (
                            <table key={index}>
                                <thead>
                                    <tr>
                                        <th>&nbsp;</th>
                                        <th>Temp.</th>
                                        <th>Wind</th>
                                        <th>Humidity</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {map(day, hour => (
                                        <tr key={hour.dt}>
                                            <td>{moment.unix(hour.dt).format('ddd, MMMM D, h a')}</td>
                                            <td>{Math.round(hour.main.temp)} {unit === 'metric' ? '℃' : '℉'}</td>
                                            <td>{hour.wind.speed} {unit === 'metric' ? 'm/s' : 'm/h'}</td>
                                            <td>{hour.main.humidity}%</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ))}
                    </Fragment>
                )
            )}
        </section>
    );
};

export default Forecast;
