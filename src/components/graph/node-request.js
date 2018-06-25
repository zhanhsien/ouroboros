import React, {Component} from 'react';
import NodeRequestElem from "./node-request-elem";
import './node-request.css';

export default class NodeRequest extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let i = 0;

        return(
            <div>
                <span>Request</span>
                <ul className="node-request">
                    {this.props.request.map((elem) => {
                        return (
                            <NodeRequestElem key={i} index={i++} k={elem.key} v={elem.value}/>
                        )
                    })}
                </ul>
            </div>
        );
    }
}