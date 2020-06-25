
import React,{Component} from 'react';

import quizService from './../quizService';
import QuetionCompo from './question';
import Result from './result';

export default class Body extends Component{
    state = {
        questionBank:[],
        score:0,
        attemp:0
    }
    getData = ()=>
    {
        quizService().then(question =>{
            this.setState({
                questionBank:question,
                score:0,
                attemp:0
            });
        });
    }
    componentDidMount()
    {
       this.getData(); 
    }

    checkAnswer = (answer,correct)=>{
        if(answer === correct){
            this.setState({
                score:this.state.score + 1
            })
        }
        this.setState({
            attemp:this.state.attemp < 5 ? this.state.attemp + 1 : 5
        })
    }
    render()
    {
        return(
                
            <div className="container col-11 col-md-8 mx-auto mt-5">
                <div className="row row-content">
                    <div className="col-12 col-sm-12">
                        <div className="title px-4 py-2 mt-2"><strong>Test Your Knowledge With Us</strong></div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12 mx-auto">
                    {   this.state.questionBank.length > 0 && 
                        this.state.attemp < 5 && 
                        this.state.questionBank.map(
                            ({question,answers,correct,questionId},index)=>{
                            return (<div className="row row-content question">
                                        <div className="col-12">
                                        <QuetionCompo 
                                        questions={question}
                                        options={answers}
                                        correct={correct}
                                        selected= {getAnswer=>this.checkAnswer(getAnswer,correct)}/></div></div>);
                    })}
                    </div>
                </div>
                <div className="row mt-4">
                    
                    {this.state.attemp === 5 ? <Result score={this.state.score} playAgain={()=>this.getData()}
                    />:null}
                </div>
            </div>
        );
    }
}
