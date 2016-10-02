import React, {Component} from 'react'

class Content extends Component {
  constructor(props){
    super(props);
    this.state={
      name: this.props.name,
      definition: null,
      gif_url: null
    }
  }
  componentDidMount(){
    this.setState({name: this.props.name});
    let url1 = `https://wordsapiv1.p.mashape.com/words/${this.props.name}`
    $.ajax({
      url: url1,
      headers: {"X-Mashape-Key": "tWoEhzcNoImshNr61g8SmApOU9LBp1Llbr2jsn2vvnaJD0KZrj"},
      contentType: 'application/json'
    })
    .done(data => {
      this.setState({ definition: data.results[0].definition});
    });

    let url2 = `http://api.giphy.com/v1/gifs/search?q=${this.props.name}&api_key=dc6zaTOxFJmzC`
    $.ajax({
      url: url2,
      contentType: 'application/json'
    })
    .done(data => {
      this.setState({ gif_url: data.data[Math.floor((Math.random() * data.data.length))].images.fixed_height.url});
    });
  }

  componentDidUpdate(){
    this.setState({name: this.props.name});
    let url1 = `https://wordsapiv1.p.mashape.com/words/${this.props.name}`
    $.ajax({
      url: url1,
      headers: {"X-Mashape-Key": "tWoEhzcNoImshNr61g8SmApOU9LBp1Llbr2jsn2vvnaJD0KZrj"},
      contentType: 'application/json'
    })
    .done(data => {
      this.setState({ definition: data.results[0].definition});
    });

    let url2 = `http://api.giphy.com/v1/gifs/search?q=${this.props.name}&api_key=dc6zaTOxFJmzC`
    $.ajax({
      url: url2,
      contentType: 'application/json'
    })
    .done(data => {
      this.setState({ gif_url: data.data[Math.floor((Math.random() * data.data.length))].images.fixed_height.url});
    });
  }
  render(){
    return (
      <div>
        <p>
          {this.state.name}
        </p>
        <p>
          {this.state.definition}
        </p>
        <div>
          <img src={this.state.gif_url}/>
        </div>
      </div>
    );
  };
}


export default Content;
