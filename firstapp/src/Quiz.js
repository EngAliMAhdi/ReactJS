import React, { useState } from 'react'
import { dataList } from './DataList'

///console.log(dataList[0].answers[2].isCorrect)
function Quiz() {
    const [count,setCount] = useState(0)
    const [score,setScore] = useState(0)
    const [check,setCheck] = useState(false)
    function nextQuestion(){
       if(count<dataList.length-1)
       {
        setCount(count+1)
       }else{
        setCheck(true)
       }
    }
    function checkAnswer(c){
       if(c){
           setScore(score+1) 
       }
       console.log(score)
     }
  return (
    <div>
        <h1>Quiz App</h1>
        {
            check ? (
                <>
                <p>your score is {score}/{dataList.length}</p>
                <button onClick={()=>window.location.reload()}>Try Again</button>
                </>
            ) :
            (
                <>
                <p>{dataList[count].question}</p>
        {
            dataList[count].answers.map(
                (item,index) => <button onClick={()=>checkAnswer(item.isCorrect)} key={index} >{item.ans}</button>
            )
       }
        <br/>
        <button onClick={nextQuestion}>Next</button>
                </>
            )
        }
        
    </div>
  )
}

export default Quiz