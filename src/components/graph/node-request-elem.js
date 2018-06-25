import React, {Component} from 'react';

export default class NodeRequestElem extends Component {
    constructor(props) {
        super(props);

        console.log(props);
    }

    render() {
        return (
            <div>
                <i className="fa fa-circle-o"></i>
                <span> {this.props.k} : {this.props.v}</span>
            </div>
        );
    }
}