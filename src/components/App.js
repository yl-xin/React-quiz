import React from 'react';
import QuizDisplay from './QuizDisplay';
import Header from './Header'
import Instruction from './Instruction'
import {quesData} from './quesData';

class App extends React.Component{
    state = {start:false}
    startQuiz = () => {
        this.setState({start:true})
    }
    

    render(){
        const total = quesData.length;
        if (this.state.start) {
            return (
                <div className="ui container">
                    <Header title="Discover Canada"/>
                    <QuizDisplay total={total}/>
                </div>
            );
        } else {
            return (
                <div className="ui container">
                    <Header title="Discover Canada"/>
                    <Instruction total={total} startQuiz={this.startQuiz}/>
                </div>
            );
        }
    };
};

export default App;