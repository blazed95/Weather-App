import React from 'react';

/*
class Weather extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    {this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p>}
                    {this.props.temperature && <p> Temperature: {parseFloat(this.props.temperature - 273.15).toFixed(2)} </p>}
                    {this.props.description && <p>Description: {this.props.description}</p>}
                    {this.props.error && <p> {this.props.error}</p>}
                </h1>
            </div>

        )
    }
}
*/
const Weather = (props) => {
    return (
        <div>
            <h1>
                {props.city && props.country && <p className="style_letters">Location: {props.city}, {props.country}</p>}
                {props.temperature && <p className="style_letters"> Temperature: {parseFloat(props.temperature - 273.15).toFixed(2)} </p>}
                {props.description && <p className="style_letters">Description: {props.description}</p>}
                {props.error && <p className="weather__error"> {props.error}</p>}
            </h1>
        </div>
    )
}

export default Weather;