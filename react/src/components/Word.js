import React, {Component} from 'react';
import SecondLevelWordList from './SecondLevelWordList'


class Word extends Component {
  constructor(props) {
    super(props);
    this.state = {
      next_level_words: [],
      clicked: false,
      wordChildrenClass: "wordChildren hidden",
      definition: null,
      gif_url: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    if(this.state.clicked === false){
      this.setState({ clicked: true, wordChildrenClass: "wordChildrenClass"});
    } else {
      clicked: false,
      this.setState({ clicked: false, wordChildrenClass: "wordChildrenClass hidden"});
    }
  }

  componentDidMount(){
    let url = `api/level_one_words/${this.props.id}`
    $.ajax({
      url: url,
      contentType: 'application/json'
    })
    .done(data => {
      this.setState({ next_level_words: data.level_two_words});
    });

    let url2 = `https://wordsapiv1.p.mashape.com/words/${this.props.name}`
    $.ajax({
      url: url2,
      headers: {"X-Mashape-Key": "tWoEhzcNoImshNr61g8SmApOU9LBp1Llbr2jsn2vvnaJD0KZrj"},
      contentType: 'application/json'
    })
    .done(data => {
      this.setState({ definition: data.results[0].definition});
    });

    let url3 = `http://api.giphy.com/v1/gifs/search?q=${this.props.name}&api_key=dc6zaTOxFJmzC`
    $.ajax({
      url: url3,
      contentType: 'application/json'
    })
    .done(data => {
      this.setState({ gif_url: data.data[Math.floor((Math.random() * data.data.length))].images.fixed_height.url});
    });
  }

  render(){
    return (
      <div className="small-4 columns">
        <li className="rootWord">
        <div onClick={this.handleClick}>
          {this.props.name}
        </div>
          <p>
            Definition: {this.state.definition}
          </p>
          <div className="gif">
            <img src={this.state.gif_url}/>
          </div>
          <div className={this.state.wordChildrenClass}>
            <SecondLevelWordList handleChildClick={this.props.handleChildClick} words={this.state.next_level_words} />
          </div>
        </li>
      </div>
    );
  }
};

export default Word;
