import React, {Component} from 'react';
import WordDetails from './WordDetails'

class Word extends Component {
  constructor(props) {
    super(props);
    this.state = {
      next_level_words: [],
      clicked: false,
      definition: null,
      gif_url: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    let url = `api/level_one_words/${this.props.id}`;
    let url2 = `https://wordsapiv1.p.mashape.com/words/${this.props.name}`;
    let url3 = `http://api.giphy.com/v1/gifs/search?q=${this.props.name}&api_key=dc6zaTOxFJmzC`
    $.when(
      $.ajax({
        url: url,
        contentType: 'application/json'
      }),
      $.ajax({
        url: url2,
        headers: {"X-Mashape-Key": "tWoEhzcNoImshNr61g8SmApOU9LBp1Llbr2jsn2vvnaJD0KZrj"},
        contentType: 'application/json'
      }),
      $.ajax({
        url: url3,
        contentType: 'application/json'
      })).done((words, def, url)=> {
        this.setState({
          next_level_words: words[0].level_two_words,
          definition: def[0].results[0].definition,
          gif_url: url[0].data[Math.floor((Math.random() * url[0].data.length))].images.fixed_height.url,
          clicked: true
        });
      }
    );
  }

  componentWillReceiveProps(nextProps){
    if(this.props.name == nextProps.chosenParentName) {
      if(this.state.clicked != true){
        this.handleClick();
      }
    } else {
      this.setState({clicked: false});
    }
  }

  render(){
    let wordDetailsComponent;
    if(this.state.clicked == true){
      wordDetailsComponent = <WordDetails handleChildClick = {this.props.handleChildClick}
                              words={this.state.next_level_words} definition={this.state.definition}
                              gif_url={this.state.gif_url} />;
    } else {
      wordDetailsComponent = null;
    }


    return (
      <div className="rootWord small-4 columns">
          <div className="button" onClick={this.props.handleParentClick}>
            {this.props.name}
          </div>
          {wordDetailsComponent}
      </div>
    );
  }
};

export default Word;
