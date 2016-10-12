import React, {Component} from 'react';
import WordList from './WordList'
import Content from './Content'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [],
      chosenParentName: null,
      chosenParentId: null,
      chosenChildName: null,
      chosenChildId: null,
      content_definition: null,
      content_gif_url: null,
      current_user_id: null,
      form_text: ''
    }
    this.handleParentClick = this.handleParentClick.bind(this);
    this.handleChildClick = this.handleChildClick.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.getRootWords = this.getRootWords.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState({chosenChildName: null})
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
    let name = event.target.value.split(",")[1];
    let id = event.target.value.split(",")[0];
      $.ajax({
        url: 'api/level_two_words',
        contentType: 'application/json',
        data: { name: name, id: id }
      }).done((data)=> {
        this.setState({
          chosenChildName: name,
          chosenChildId: id,
          content_definition: data.definition,
          content_gif_url: data.gif_url
        });
      }
    );
	}

  handleParentClick(name){
    this.setState({chosenParentName: name});
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
                  handleChange={this.handleChange}
                  handleClose={this.handleClose}/>;
    }
    return (
      <div className="container row">
        <div className="words small-8 columns">
          <WordList handleParentClick={this.handleParentClick}
            handleChildClick={this.handleChildClick}
            chosenParentName={this.state.chosenParentName}
              words={this.state.words}
          />
        </div>
        <div className="content small-4 columns">
          {content}
        </div>
      </div>
    );
  }
}

export default App;
