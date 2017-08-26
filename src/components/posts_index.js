import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import { Link } from 'react-router-dom';

class PostsIndex extends Component {
    componentDidMount(){
        this.props.fetchPosts();
    }

    renderPosts(){
        return _.map(this.props.posts, post => {
            return(
                <li className="list-group-item" key={post.id}>
                    {post.title}
                </li>
            );
        });
    }

    render(){
        return(
            <div>
                <div className="text-xs-right">
                    <Link
                        className="btn btn-primary"
                        to="/posts/new"
                    >
                        Add Post
                    </Link>
                </div>
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
