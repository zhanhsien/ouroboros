import React, {Component} from 'react';
import EditorCanvas from './editor-canvas';

var exampleInput = {
    "nodes":
    [
        {
            "id": 1,
            "name": "node.1",
            "request":
            [
                {"key": "param1", "value": "001"},
                {"key": "param2", "value": "002"}
            ],
            "expectedResponse":
            [
                {"key": "resp1", "value": "aaa"},
                {"key": "resp2", "value": "bbb"}
            ]
        },
        {
            "id": 2,
            "name": "node.2",
            "request":
            [
                {"key": "param1", "value": "001"}
            ],
            "expectedResponse":
            [
                {"key": "resp1", "value": "aaa"}
            ]
        },
        {
            "id": 3,
            "name": "node.3"
        }
    ]
}

export default class EditorPanel extends Component {
    constructor(props) {
        super(props);

        this.state = exampleInput;
    }

    render() {
        return (
            <div>
                <EditorCanvas data={this.state}/>
            </div>
        );
    }
}