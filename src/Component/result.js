import React from 'react';

const Result = ({score,playAgain})=>{
    return(
        <>
                { score>0 ?<div className="col-12 d-flex justify-content-center mt-5"><h1><i className='fa fa-smile-o'></i></h1></div> : <div className="col-12 d-flex justify-content-center mt-5"><h1><i className='fa fa-frown-o'></i></h1></div>}

                <div className="col-12 d-flex justify-content-center mt-2">{Star(score)}</div>
                <div className="col-12 d-flex justify-content-center mt-3"><h3>You Give {score} Correct Answer</h3></div>
                <div className="col-12 d-flex justify-content-center mt-3"><button className="btn btn-lg btn-primary" onClick={playAgain}>Play Again</button></div>
        </>
    );
}
const Star=(score)=>{
    var str=[];
    for(var i=0; i<5;i++)
    {
        if(i<score)
            str.push(<span className="mr-2"><i className='fa fa-star'></i></span>)
        else
            str.push(<span className="mr-2"><i className='fa fa-star-o'></i></span>)
    }
    return <h3>{str}</h3>;   
}
export default Result;