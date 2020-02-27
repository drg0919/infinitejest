import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

class CommentBox extends Component {
    constructor() {
        super();
        this.state = {
            comment: ''
        }
    }

    handleChange = (eve) => {
        this.setState({
            comment: eve.target.value
        });
    }

    handleSubmit = (eve) => {
        eve.preventDefault();
        this.setState({
            comment: ''
        });
        this.props.saveComment(this.state.comment);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4>Add a comment</h4>
                    <textarea onChange={this.handleChange} value={this.state.comment}/>
                    <div>
                        <button>Submit comment</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null,actions)(CommentBox);
