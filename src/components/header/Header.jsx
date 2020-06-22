import React, {Component} from 'react';

class Header extends Component {
   state = {
       score: 0,
       topScore: 0,
       answer: true
   };

   componentDidMount() {
       this.guess()
   }

   guess = page => {
       if (this.state.answer){
           this.setState({score: this.state.score + 1});
           console.log(this.state.score)  
             return  <h1>You Guess Correctly</h1>           


       } else {
           this.setState({score: 0});
           return (
               <h1>You Guess Incorrectly</h1>
           ) 
       }
   }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h1 className="logo">Clicky Game</h1>
                        <h3 className="subLogo">Family Guy Edition</h3>
                    </div>
                    <div className="col-md-4">
                        {this.guess}
                    </div>
                    <div className="col-nd-4"></div>
                </div>
            </div>
        )
    }
}

export default Header;