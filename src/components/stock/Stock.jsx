import React, { Component } from 'react';

export default class Stock extends Component {
    constructor(props) {
        super(props);
        // this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        console.log('From React');
        // window.launchWindow('https://openfin.co/documentation/getting-started/')
        window.launchWindow('http://127.0.0.1:8087'); // http-server must be running on port 8087 from utility/highcharts
    }
    render() {
        return (
            <div style={{ padding: '25px' }} className="ui inverted segment">
                <h3>Hightcharts</h3>
                {/* semantic ui */}
                <div className="ui inverted labeled button" tabIndex="0" onClick={this.handleClick}>
                    <div className="ui basic blue button">
                        {/* <i className="fork icon"></i> Forks</div> */}
                        <i className="stock icon"></i> IBM</div>
                    <a className="ui basic left pointing blue label">
                        1,048</a>
                </div>

                {/* semantic ui */}
            </div >
        )
    }
}
