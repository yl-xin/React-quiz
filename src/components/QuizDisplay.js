import React from 'react';
import {quesData} from './quesData';
import Result from './Result';

class QuizDisplay extends React.Component {
    state = {
        total:this.props.total,
        currentQues: 0, userAnswer: null, btnDisabled:true, correct:0,userAnswers:[],
        question: '', choices: [],answer:''
    };
    // initialize state 
    componentDidMount(){
        this.setState({
            question:quesData[this.state.currentQues].ques,
            choices:quesData[this.state.currentQues].choices,
            answer:quesData[this.state.currentQues].answ
        });   
    };
    // update state
    componentDidUpdate(prevProps, prevState){
        if (this.state.currentQues !== prevState.currentQues && this.state.currentQues < this.state.total) {
            this.setState({
                btnDisabled:true,
                question:quesData[this.state.currentQues].ques,
                choices:quesData[this.state.currentQues].choices,
                answer:quesData[this.state.currentQues].answ
            });
          }
    }

    selectAnswer = choice=>{
        this.setState({userAnswer:choice,btnDisabled:false})
    }
    nextQuestion= ()=>{
        const {userAnswer,answer,correct,currentQues,userAnswers} =this.state;
        userAnswers[currentQues] = userAnswer;
        // console.log(userAnswers);
        if (userAnswer===answer){
            this.setState({correct:correct+1});
        }
        this.setState({currentQues:currentQues+1});
       
    }
 
    render() {
        const {userAnswer,currentQues,total}=this.state
        if (currentQues <total){
            return (
                <div>
                    <form >
                        <h3 className="questions">{this.state.question} </h3>
                        { this.state.choices.map((choice)=>{return (
                            <div key={choice.charAt(0)} 
                            onClick={()=>this.selectAnswer(choice)}
                            className={`ui floating message ${userAnswer=== choice ? "selected" : null}`}
                            >{choice}</div>
                            )
                       })}
                    </form>
                    <button disabled={this.state.btnDisabled} 
                        className="small ui animated fluid button" tabIndex="0" type="button" value="Next"
                        onClick={this.nextQuestion}
    
                    >
                        <div className="visible content">Next</div>
                        <div className="hidden content">
                            <i className="right arrow icon"></i>
                        </div>
                    </button>
                </div>
            );

        } else {
            return <Result score={this.state.correct} total={this.state.total} userAnswers={this.state.userAnswers}/>
        }
        
    };
};

export default QuizDisplay;