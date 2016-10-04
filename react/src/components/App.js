import React, {Component} from 'react';
import WordList from './WordList'
import Content from './Content'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [],
      chosenChildName: null,
      chosenChildId: null,
      content_definition: null,
      content_gif_url: null,
      current_user_id: null,
      form_text: ''
    }
    this.handleChildClick = this.handleChildClick.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getRootWords = this.getRootWords.bind(this);
  }

  getRootWords() {
    $.ajax({
      url: "/api/level_one_words",
      contentType: 'application/json',
    })
    .done(data => {
      if(data.current_user != null){
        this.setState({words: data.words, current_user_id: data.current_user.id, form_text:''});
      } else {
        this.setState({words: data.words, form_text: ''});
      }
    });
  }

  handleFormSubmit(event){
    debugger;
    event.preventDefault();
    $.ajax({
      type: "POST",
      url: '/api/posts',
      contentType: 'application/json',
      data: JSON.stringify({ post: {text: this.state.form_text, level_two_word_id: this.state.chosenChildId, user_id: this.state.current_user_id}})
    }).done(()=>{
      this.getRootWords();
    });
  }

  handleChildClick(event){
    debugger;
    let name = event.target.value.split(",")[1];
    let id = event.target.value.split(",")[0];
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
          chosenChildId: id,
          content_definition: def[0].results[0].definition,
          content_gif_url: url[0].data[Math.floor((Math.random() * url[0].data.length))].images.fixed_height.url
        });
      }
    );
	}

  handleChange(event) {
    let newText = event.target.value;
    this.setState({ form_text: newText });
  }

  componentDidMount() {
    this.getRootWords();
  }

  render() {
    let content;

    if(this.state.chosenChildName == null){
      content = null;
    } else {
      content = <Content name={this.state.chosenChildName}
                  id={this.state.chosenChildId} form_text={this.state.form_text}
                  definition={this.state.content_definition}
                  gif_url={this.state.content_gif_url}
                  handleFormSubmit={this.handleFormSubmit}
                  handleChange={this.handleChange} />;
    }
    return (
      <div className="container row">
        <div className="words small-8 columns">
          <WordList handleChildClick={this.handleChildClick} words={this.state.words} />
        </div>
        <div className="content small-4 columns">
          {content}
        </div>
      </div>
    );
  }
}

export default App;
