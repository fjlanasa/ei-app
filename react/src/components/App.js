import React, {Component} from 'react';
import WordList from './WordList'
import Content from './Content'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [],
      chosenChildName: null,
      content_definition: null,
      content_gif_url: null
    }
    this.handleChildClick = this.handleChildClick.bind(this);
  }

  handleChildClick(name){
    let url2 = `https://wordsapiv1.p.mashape.com/words/${name}`;
    let url3 = `http://api.giphy.com/v1/gifs/search?q=${name}&api_key=dc6zaTOxFJmzC`;
    $.when(
      $.ajax({
        url: url2,
        headers: {"X-Mashape-Key": "tWoEhzcNoImshNr61g8SmApOU9LBp1Llbr2jsn2vvnaJD0KZrj"},
        contentType: 'application/json'
      }),
      $.ajax({
        url: url3,
        contentType: 'application/json'
      })).done((def, url)=> {
        this.setState({
          chosenChildName: name,
          content_definition: def[0].results[0].definition,
          content_gif_url: url[0].data[Math.floor((Math.random() * url[0].data.length))].images.fixed_height.url
        });
      }
    );
	}

  componentDidMount() {
    let url = 'api/level_one_words'
    $.ajax({
      url: "/api/level_one_words",
      contentType: 'application/json'
    })
    .done(data => {
      this.setState({words: data.words})
    });
  }

  render() {
    let content;

    if(this.state.chosenChildName == null){
      content = null;
    } else {
      content = <Content name={this.state.chosenChildName}
                  definition={this.state.content_definition}
                  gif_url={this.state.content_gif_url} />;
    }
    return (
      <div className="container">
        <div className="words small-8 columns">
          <WordList handleChildClick={this.handleChildClick} words={this.state.words} />
        </div>
        <div className="content small-3 columns">
          {content}
        </div>
      </div>
    );
  }
}

export default App;
