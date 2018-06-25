import React, {Component} from 'react';

export default class NodeResponseElem extends Component {
    constructor(props) {
        super(props);

        console.log(props);
    }

    render() {
        return (
            <div>
                <span>{this.props.k} : {this.props.v} </span><i className="fa fa-link"></i>
            </div>
        );
    }
}