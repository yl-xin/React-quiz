(this.webpackJsonpmyquiz=this.webpackJsonpmyquiz||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/win.f88a4768.gif"},function(e,t,a){e.exports=a.p+"static/media/meh.2bee0975.gif"},function(e,t,a){e.exports=a.p+"static/media/lose.67f066a0.gif"},function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(7),i=a.n(r),c=(a(16),a(1)),l=a(2),o=a(4),u=a(3),m=a(5),d=[{id:0,ques:"What are Canada's official languages?",choices:["A. English and Acadian","B. French, English and Michif","C. English and French","D. French, English and Inuktitut"],answ:"C. English and French"},{id:1,ques:"What's the only official bilingual province in Canada?",choices:["A. Quebec","B. Ontari","C. New Brunswic","D. Manitoba"],answ:"C. New Brunswic"},{id:2,ques:"Which province has its own time zone?",choices:["A. British Columbia","B. Newfoundland and Labrador","C. Nova Scotia","D. Nunavut"],answ:"B. Newfoundland and Labrador"}],h=a(8),E=a.n(h),f=a(9),v=a.n(f),p=a(10),b=a.n(p),w=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={showAll:!1},a.feedback=function(){var e=a.props,t=e.score,n=e.total;return t===n?s.a.createElement("div",null,s.a.createElement("p",null,"Good Job! You Know Canada very well!"),s.a.createElement("img",{alt:"win",src:E.a})):t>n/2?s.a.createElement("div",null,s.a.createElement("p",null,"Not Bad! Do better next time!"),s.a.createElement("img",{alt:"meh",src:v.a})):s.a.createElement("div",null,s.a.createElement("p",null,"Oops...Try it Again!"),s.a.createElement("img",{alt:"lose",src:b.a}))},a.showAnswers=function(){var e=a.props.userAnswers;if(a.state.showAll)return s.a.createElement("div",null,s.a.createElement("div",null,d.map((function(t,a){return s.a.createElement("div",{key:a},s.a.createElement("h3",{className:"ResultQues"}," ",t.ques," "),s.a.createElement("div",{className:"ui floating message options"},"Your Answer: ",e[a]),s.a.createElement("div",{className:"ui floating positive message options"},"Correct Answer: ",t.answ))})),s.a.createElement("button",{id:"reloadbtn",className:"small ui primary button ",type:"button",onClick:function(){window.location.reload(!1)}}," Start Again")))},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.score;return s.a.createElement("div",{className:"ui center aligned  grid"},s.a.createElement("div",{className:" sixteen wide column"},s.a.createElement("p",null,"You got ",t," questions correct"),this.feedback(),s.a.createElement("button",{className:"small ui primary button",type:"button",onClick:function(){e.setState({showAll:!0})}},"Check Answers"),this.showAnswers()))}}]),t}(s.a.Component),g=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={total:a.props.total,currentQues:0,userAnswer:null,btnDisabled:!0,correct:0,userAnswers:[],question:"",choices:[],answer:""},a.selectAnswer=function(e){a.setState({userAnswer:e,btnDisabled:!1})},a.nextQuestion=function(){var e=a.state,t=e.userAnswer,n=e.answer,s=e.correct,r=e.currentQues;e.userAnswers[r]=t,t===n&&a.setState({correct:s+1}),a.setState({currentQues:r+1})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.setState({question:d[this.state.currentQues].ques,choices:d[this.state.currentQues].choices,answer:d[this.state.currentQues].answ})}},{key:"componentDidUpdate",value:function(e,t){this.state.currentQues!==t.currentQues&&this.state.currentQues<this.state.total&&this.setState({btnDisabled:!0,question:d[this.state.currentQues].ques,choices:d[this.state.currentQues].choices,answer:d[this.state.currentQues].answ})}},{key:"render",value:function(){var e=this,t=this.state,a=t.userAnswer;return t.currentQues<t.total?s.a.createElement("div",null,s.a.createElement("form",null,s.a.createElement("h3",{className:"questions"},this.state.question," "),this.state.choices.map((function(t){return s.a.createElement("div",{key:t.charAt(0),onClick:function(){return e.selectAnswer(t)},className:"ui floating message ".concat(a===t?"selected":null)},t)}))),s.a.createElement("button",{disabled:this.state.btnDisabled,className:"small ui animated fluid button",tabIndex:"0",type:"button",value:"Next",onClick:this.nextQuestion},s.a.createElement("div",{className:"visible content"},"Next"),s.a.createElement("div",{className:"hidden content"},s.a.createElement("i",{className:"right arrow icon"})))):s.a.createElement(w,{score:this.state.correct,total:this.state.total,userAnswers:this.state.userAnswers})}}]),t}(s.a.Component);var N=function(e){return s.a.createElement("div",null,s.a.createElement("h2",{className:"ui center aligned icon header "},s.a.createElement("i",{className:" heart outline icon"}),e.title))};var A=function(e){var t=e.startQuiz;return s.a.createElement("div",{id:"instr"},s.a.createElement("h3",null,"Instruction"),s.a.createElement("p",null,"This quiz is designed for a better understanding of Canada. The Total Number of Questions is ",e.total,". Take Your time and enjoy the quiz!"),s.a.createElement("div",{id:"testNote"},s.a.createElement("h4",null,"NOTE"),s.a.createElement("div",{className:"ui list",id:"notecontent"},s.a.createElement("div",{className:"item"},s.a.createElement("i",{className:"right triangle icon"}),s.a.createElement("div",{className:"content"},s.a.createElement("div",{className:"description"},"Click the 'START QUIZ' button given in the bottom of this page to Start the test."))),s.a.createElement("div",{className:"item"},s.a.createElement("i",{className:"right triangle icon"}),s.a.createElement("div",{className:"content"},s.a.createElement("div",{className:"description"},"You don't lose mark for wrong answers."))),s.a.createElement("div",{className:"item"},s.a.createElement("i",{className:"right triangle icon"}),s.a.createElement("div",{className:"content"},s.a.createElement("div",{className:"description"},"Do not refresh the page during the test."))))),s.a.createElement("div",{id:"startbutton"},s.a.createElement("button",{className:"small ui primary button start",type:"button",onClick:function(){return t()}},"START QUIZ")))},y=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(s)))).state={start:!1},a.startQuiz=function(){a.setState({start:!0})},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"renderContext",value:function(){var e=d.length;return this.state.start?s.a.createElement(g,{total:e}):s.a.createElement(A,{total:e,startQuiz:this.startQuiz})}},{key:"render",value:function(){return s.a.createElement("div",{className:"ui container"},s.a.createElement(N,{title:"Discover Canada"}),this.renderContext(),s.a.createElement("footer",null,"YL &copy Copyright 2020 March"))}}]),t}(s.a.Component);i.a.render(s.a.createElement(y,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.77bad5c8.chunk.js.map