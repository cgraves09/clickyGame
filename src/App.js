import React, { Component } from 'react';
import Header from './components/header/Header';
import images from './familyGuy.json';
import Results from './components/results/Results';
import Row from './components/Row';
import SubHeader from './components/subHeader/SubHeader';
import Score from './components/score/Score';
class App extends Component {
  state = {
    score: 0,
    images,
    status: '',
    clickedImagesArr: []
  };
  shuffleImages = id => {
    let clickedImagesArr = this.state.clickedImagesArr;
    
    for(let i = images.length -1; i > 0; i--){
      let j = Math.floor(Math.random() * (i +1));
      [images[i], images[j]] = [images[j], images[i]];
    };
  
    if(clickedImagesArr.includes(id)) {
      this.setState({clickedImagesArr: [], score: 0, status: 'Game Over Try Again'});
      return
    }else {
      clickedImagesArr.push(id);

      if(clickedImagesArr.length === 9){
        this.setState({clickedImagesArr: [],score: 9, status: 'Great Job You Won!'});
        return
      }
      this.setState({images,topScore: clickedImagesArr.length ,clickedImagesArr,score: clickedImagesArr.length, status: ' '});
    }
  }

render() {
  return ( 
    <div>
      <SubHeader />
      <Header />
      <div className='container'>
      <Row>
        <div className='col-md-8'>
          <Row>
            {this.state.images.map(image => (
              <Results image={image.image} id={image.id} key={image.id} shuffleImages= {this.shuffleImages} />
            ))}
          </Row>
        </div>
        <Score score={this.state.score} status={this.state.status} />
      </Row>
      </div>
    </div>
  );
}
}
export default App;
