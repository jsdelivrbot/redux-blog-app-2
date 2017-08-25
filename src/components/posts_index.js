import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class PostsIndex extends Component {
    componentDidMount(){
        this.props.fetchPosts();
    }

    renderPosts(){
        _.map(this.props.posts, post => {
            return(
                <li>Hi</li>
            );
        });
    }

    render(){
        return(
            <div>
                <h3>Posts</h3>
                <ul className="group-list">
                {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state){
    return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
