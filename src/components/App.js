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
    renderContext(){
        const total = quesData.length;
        if (this.state.start) {
            return <QuizDisplay total={total}/>;
        } else {
            return <Instruction total={total} startQuiz={this.startQuiz}/>
        }
    }
    render(){
            return (
                <div className="ui container">
                    <Header title="Discover Canada"/>
                    {this.renderContext()}
                    <footer>YL &copy Copyright 2020 March</footer>
                </div>
            );
    };
};

export default App;