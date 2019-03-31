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
            <div style={{ backgroundColor: 'lightyellow', padding: '25px' }}>
                <h3>Hightcharts</h3>
                <button type="button"
                    onClick={this.handleClick}>Launch New Window</button>
                {/* semantic ui */}
                <div className="ui labeled button" tabIndex="0">
                    <div className="ui basic blue button">
                        <i className="fork icon"></i> Forks</div>
                    <a className="ui basic left pointing blue label" >
                        1,048</a>
                </div>

                {/* semantic ui */}
            </div >
        )
    }
}
