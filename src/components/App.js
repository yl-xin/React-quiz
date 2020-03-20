import React, { Component } from 'react';
import QuizDisplay from './QuizDisplay';

class App extends React.Component{

    render(){
        return (
            <div className="ui container">
               <QuizDisplay />
            </div>
        );
    };
};

export default App;