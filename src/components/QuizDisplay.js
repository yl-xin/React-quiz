import React from 'react';
import {quesData} from './quesData';

class QuizDisplay extends React.Component {
    state = {
        currentQues: 0, userAnswer: null,
        question: '', choices: [],answer:0
    };
    componentDidMount(){
        this.setState({
            question:quesData[this.state.currentQues].ques,
            choices:quesData[this.state.currentQues].choices,
            answer:quesData[this.state.currentQues].answ
        });
         
    };
 
 
    render() {
        const userAnswer = this.state.userAnswer;
        return (
            <div>
                <form >
                    <div>{this.state.question} </div>
                    { this.state.choices.map((choice)=>{return (
                        <div key={choice.charAt(0)} 
                        className={`ui floating message ${userAnswer=== choice ? "selected" : null}`}
                        >{choice}</div>
                        )
                   })}
                </form>
                <div className="small ui animated button" tabIndex="0" type="button" value="Next"
                    >
                    <div className="visible content">Next</div>
                    <div className="hidden content">
                        <i className="right arrow icon"></i>
                    </div>
                </div>
            </div>
        );
    };
};

export default QuizDisplay;