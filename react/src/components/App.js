import React, {Component} from 'react';
import WordList from './WordList'
import Content from './Content'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [],
      chosenChildName: null,
      content: null
    }
    this.handleChildClick = this.handleChildClick.bind(this);
  }

  handleChildClick(name){
    let newChosenWord = name
    this.setState({ chosenChildName: newChosenWord, content: <Content name={newChosenWord}/>});
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
    return (
      <div className="container">
        <div className="words">
          <WordList handleChildClick={this.handleChildClick} words={this.state.words} />
        </div>
        <div className="content">
          {this.state.content}
        </div>
      </div>
    );
  }
}

export default App;
