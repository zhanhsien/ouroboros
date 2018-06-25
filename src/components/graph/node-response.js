import React, {Component} from 'react';
import NodeResponseElem from './node-response-elem';

export default class NodeResponse extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let i = 0;

        return(
            <div>
                <span>Response</span>
                <ul className="node-response">
                    {this.props.response.map((elem) => {
                        return (
                            <NodeResponseElem key={i} index={i++} k={elem.key} v={elem.value}/>
                        )
                    })}
                </ul>
            </div>
        );
    }
}