import React, {Component} from 'react';
import Draggable from 'react-draggable';
import NodeId from './node-id';
import NodeRequest from './node-request';
import NodeResponse from './node-response';
import './node.css';

export default class Node extends Component {
    constructor(props){
        super(props);
    }

    handleStart() {
        // console.log("Start drag");
    }

    handleDrag() {
        // console.log("Dragging");
    }

    handleStop() {
        // console.log("Stop");
    }

    handleDragLine(e) {
        e.stopPropagation();
        e.preventDefault();

        console.log(e);
    }

    render() {
        return (
            <Draggable
                defaultPosition={{x: 50, y: 50}}
                handle=".node-header"
                onStart={this.handleStart}
                onDrag={this.handleDrag}
                onStop={this.handleStop}>
                <div className="node-container">
                    <NodeId name={this.props.name}/>
                    <div className="node-panel">
                        {this.props.request && <NodeRequest request={this.props.request}/>}
                        {this.props.expect && <NodeResponse response={this.props.expect}/>}
                    </div>
                </div>
            </Draggable>
        );
    }
}