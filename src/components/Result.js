import React from 'react';
import win from '../imgs/win.gif';
import meh from '../imgs/meh.gif';
import lose from '../imgs/lose.gif';
import { quesData } from './quesData';


class Result extends React.Component {
    state = { showAll: false};
    

feedback = () => {
    const {score,total} = this.props;


    if (score === total) {
        return (
            <div>
                <p>Good Job! You Know Canada very well!</p>
                <img alt="win" src={win} />
            </div>
        );
    } else if (score > total / 2) {
        return (
            <div>
                <p>Not Bad! Do better next time!</p>
                <img alt="meh" src={meh} />
            </div>
        );

    } else {
        return (
            <div>
                <p>Oops...Try it Again!</p>
                <img alt="lose" src={lose} />
            </div>
        );
    }
};


showAnswers = () => {
    const {userAnswers} = this.props;
    if (this.state.showAll) {
        return (
            <div>
                <div >
                    {quesData.map((item, index) => (
                        <div key={index}>
                            <h3 className="ResultQues"> {item.ques} </h3>
                            <div className="ui floating message options" >Your Answer: {userAnswers[index]}</div>
                            <div className="ui floating positive message options">
                                Correct Answer: {item.answ}
                            </div>
                        </div>
                    ))}
                     <button id="reloadbtn" className="small ui primary button " type="button" onClick={ ()=>{ window.location.reload(false)}} > Start Again</button>
                </div>
            </div>
        );
    }
}


render(){
    const score = this.props.score;
    return (
        <div className="ui center aligned  grid">
            <div className=" sixteen wide column">
                <p>You got {score} questions correct</p>
                {this.feedback()}
                <button className="small ui primary button" type="button" onClick={() => { this.setState({ showAll: true }) }}>Check Answers</button>
               
                {this.showAnswers()}
            </div>

        </div>
    );

};
}

export default Result;

