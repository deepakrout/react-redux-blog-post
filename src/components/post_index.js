import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import _ from 'lodash';

class PostsIndex extends Component {

  constructor(props, context) {
      super(props, context);
      
  }
  
  componentDidMount() {
      this.props.fetchPosts();
  }
  
  renderPost(){
      _.map(this.props.post, post=>{
          <li className="list-group-item" key={post.id}>
            {post.title}
          </li>
      })
  }
    
    render() {
        console.log(this.props.posts);
        return (
            <div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPost()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts
    };
}

export default connect(mapStateToProps,{fetchPosts})(PostsIndex);