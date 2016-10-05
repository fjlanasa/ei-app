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
        <ul>
          {this.state.posts.map(post=>{
            return <li>{post.name}<br/>
                        {post.text}<br/>
                        Created at: {post.created_at}<br/>
                   </li>
          })
        }
        </ul>
      </div>
    );
  }
}

export default Profile;
