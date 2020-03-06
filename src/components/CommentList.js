import React, { Component } from 'react';
import { connect } from 'react-redux'

export class CommentList extends Component {
    renderList = () => {
        return this.props.comments.map(comment => <li key={comment}>{comment}</li>)
    }

    render() {
        return (
            <div>
                {this.renderList()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {comments: state.comments};
}

export default connect(mapStateToProps)(CommentList);
