import React, { Component } from 'react';
import Header from './components/header/Header';
import ImageContainer from './components/images/ImagesContainer';
class App extends Component {
  state = {
    score: 0,
    topScore: 0,
    answer: true,
    images: [
      './images/brian.jpg'
    ]
  };

render() {
  return (
    <div>
      <Header score={this.state.score} answer={this.state.answer} topScore={this.state.topScore} />
      <ImageContainer images={this.state.images} />      
    </div>
  );
}
}
export default App;
