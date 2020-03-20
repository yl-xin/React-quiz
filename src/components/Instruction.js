import React from 'react';

function Instruction(props) {
    const startQuiz =props.startQuiz;

    return (
        <div id="instr">
            <h3>Instruction</h3>
            <p>This quiz is designed for a better understanding of Canada. The Total Number of Questions is {props.total}. Take
            Your time and enjoy the quiz!</p>

            <div id="testNote">
            <h4>NOTE</h4>
            <div className="ui list" id="notecontent">
                <div className="item">
                    <i className="right triangle icon"></i>
                    <div className="content">
                        <div className="description">Click the 'START QUIZ' button given in the bottom of this page to Start
                            the test.</div>
                    </div>
                </div>
                <div className="item">
                    <i className="right triangle icon"></i>
                    <div className="content">
                        <div className="description">You don't lose mark for wrong answers.</div>
                    </div>
                </div>
                <div className="item">
                    <i className="right triangle icon"></i>
                    <div className="content">
                        <div className="description">Do not refresh the page during the test.</div>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <button class="small ui primary button start" type="button"
             onClick={()=>startQuiz()}>START QUIZ</button>
        </div>
        </div>
    );
}

export default Instruction;