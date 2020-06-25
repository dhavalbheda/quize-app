import React,{useState} from 'react';

const QuetionCompo = ({questions,options,correct,selected})=>{
    options=shuffle(options);
    const [answer,setAnswer] = useState(options);
    const [btnClass,setClass] =useState("btn btn-primary")
    return(
        <>
            <div className="row">
                <div className="col">{questions}</div>
            </div> 
            <div className="row ">  
                {answer.map((option,index)=>{
                    return(<div className="col-12 col-sm-auto mt-2"><button key={index} className={btnClass} onClick={()=>{
                            setAnswer([option]);
                            selected(option);
                            if(correct === option )
                                setClass(["btn btn-success"]);
                            else
                                setClass(["btn btn-danger"]);
                        }}>{option}</button></div>)
                    }
                )}
                
            </div>
        </>
    )
}
function shuffle(arra1) {
    var ctr = arra1.length, temp, index;

// While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}
export default QuetionCompo;