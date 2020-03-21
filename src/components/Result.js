import React from 'react';
import win from '../imgs/win.gif';
import meh from '../imgs/meh.gif';
import lose from '../imgs/lose.gif';

function Result(props){
    const {score,total} = props;
    function feedback(){
        if (score===total){
            return (
                <div>
                    <p>Good Job! You Know Canada very well!</p>
                    <img alt="win" src={win}/>
                </div>
            );
        } else if (score > total/2) {
            return (
                <div>
                    <p>Not Bad! Do better next time!</p>
                    <img alt="meh" src={meh}/>
                </div>
            );
            
        } else {
            return (
                <div>
                    <p>Oops...Try it Again!</p>
                    <img alt="lose" src={lose}/>
                </div>
            );
        }
    };

    return (
        <div className="ui container"> 
            <p>You got {score} questions correct</p>
            {feedback()}
            <button className="small ui primary button" type="button" >Check Answers</button>
        </div>
    );
}

export default Result;

