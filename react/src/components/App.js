import React, {Component} from 'react';
import Home from './Home'
import Profile from './Profile'
import Posts from './Posts'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      view: "home"
    }
    this.handleHomeClick = this.handleHomeClick.bind(this);
    this.handleProfileClick = this.handleProfileClick.bind(this);
    this.handlePostsClick = this.handlePostsClick.bind(this);
  }

  handleHomeClick(){
    this.setState({view: "home"});
  }

  handleProfileClick(){
    this.setState({view: "profile"});
  }

  handlePostsClick(){
    this.setState({view: "posts"});
  }

  render(){
    let page;
    if(this.state.view == "home"){
      page= <Home />
    } else if(this.state.view == "profile"){
      page = <Profile/>
    } else if(this.state.view == "posts"){
      page = <Posts/>
    }
    return (
      <div className="view">
        <div className="nav-buttons">
          <button onClick={this.handleHomeClick} className="home">
            Home
          </button>
          <button onClick={this.handleProfileClick} className="profile">
            Profile
          </button>
          <button onClick={this.handlePostsClick} className="posts">
            All Posts
          </button>
        </div>
        {page}
      </div>
    )
  }
}

export default App;
