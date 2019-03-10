import React from "react";

const Unit = (props) => {
    const { unit } = props;

    return (
        <form>
            <input
                id="celsius"
                type="radio"
                value="metric"
                checked={unit === 'metric'}
                onChange={() => {props.changeUnitTo('metric')}}/>
            <label htmlFor="celsius">&#8451;</label>
            <input
                id="fahrenheit"
                type="radio"
                value="imperial"
                checked={unit === 'imperial'}
                onChange={() => {props.changeUnitTo('imperial')}}/>
            <label htmlFor="fahrenheit">&#8457;</label>
        </form>
    );
};

export default Unit;
