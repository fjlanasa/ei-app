import React, {Component} from 'react';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }

  componentDidMount(){
    $.ajax({
      url: "/api/posts",
      contentType: 'application/json',
    })
    .done(data=>{
      if(data.posts != null){
        this.setState({posts: data.posts});
      }
    });
  }


  render(){
    return (
      <div>
        <h5>All posts:</h5>
        <ul>
          {this.state.posts.map(post=>{
            return (
                <div className='callout'>
                  <li className='post-content'><strong>{post.name}</strong><br/>
                        <em>{post.text}</em><br/>
                        Created at: {post.created_at}<br/>
                   </li>
                </div>
            );
          })
        }
        </ul>
      </div>
    );
  }
}

export default Profile;
