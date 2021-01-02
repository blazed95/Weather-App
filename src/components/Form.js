import React from 'react';




class Form extends React.Component {
    render() {

        return (
            <form onSubmit={this.props.getWeather}>
                <input type="text" name="city" placeholder="What City..?"></input>
                <input type="text" name="country" placeholder="What Country..?"></input>
                <br></br>
                <br></br>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xs-4">
                            <button className="btn btn-primary" >Get Weather Info</button>
                        </div>
                    </div>
                </div>
            </form >
        )
    }
}

export default Form;