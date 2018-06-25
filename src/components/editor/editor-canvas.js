import React, {Component} from 'react';
import Node from '../graph/node';

export default class EditorCanvas extends Component {
    constructor(props) {
        super(props);

        this.state = {mouseX: 0, mouseY: 0, canvasWidth: 0, canvasHeight: 0};
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({canvasWidth: window.innerWidth, canvasHeight: window.innerHeight});
    }

    _onMouseMove(e) {
        this.setState({mouseX: e.nativeEvent.offsetX, mouseY: e.nativeEvent.offsetY});
    }

    bezierCurve(a, b, cp1x, cp1y, cp2x, cp2y, x, y) {
        return `M${a},${b} C${cp1x},${cp1y} ${cp2x},${cp2y}  ${x},${y}`;
    }

    render() {
        let nodes = this.props.data.nodes;

        const {mouseX, mouseY, canvasWidth, canvasHeight} = this.state;
        let pathString = this.bezierCurve(100, 100, 175, 100, 300, 350, mouseX, mouseY);
        // console.log(canvasWidth, canvasHeight);

        return (
            <div>
                {nodes.map((node) => {
                    return <Node key={node.id} name={node.name} request={node.request} expect={node.expectedResponse}/>
                })}
                <svg className="svg-panel" onMouseMove={this._onMouseMove.bind(this)} height={canvasHeight} width={canvasWidth}>
                    {/*<path d={pathString}*/}
                        {/*stroke="#000000"*/}
                        {/*fill="none"*/}
                    {/*/>*/}
                </svg>
            </div>
        );
    }
}