import React, {Component} from 'react';
import './node-id.css';

export default class NodeId extends Component {
    constructor(props) {
        super(props);

        this.state = {editId: false};
        this.editId = this.editId.bind(this);
    }

    editId() {
        if(!this.state.editId) {
            this.nodeId.focus();
        }

        this.setState({editId: !this.state.editId});
    }

    render() {
        /**
         * Needs work on how value gets passed and set
         */

        return(
            <div className="node-header">
                <input className="node-id" value={this.props.name} readOnly={!this.state.editId} ref={el => this.nodeId = el}/>
                    <i className={"fa fa-pencil " + (this.state.editId ? 'edit-id' : '')} onClick={this.editId}></i>
            </div>
        );
    }
}