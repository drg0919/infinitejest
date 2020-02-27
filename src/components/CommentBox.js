import React, { Component } from 'react'

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

export default CommentBox;
