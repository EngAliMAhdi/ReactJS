import React, { useState } from 'react'
import { dataList } from './DataList'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './Quiz.css'


//console.log(dataList[0].answers[2].isCorrect)
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
    <div className='w-25 m-auto p-4 bg-secondary text-warning mt-5'>
        <h1>Quiz App</h1>
        {
            check ? (
                <>
                <p>your score is {score}/{dataList.length}</p>
                <button className='d-block w-50 m-auto btn btn-danger' onClick={()=>window.location.reload()}>Try Again</button>
                </>
            ) :
            (
                <>
                <p>Q({count+1}/{dataList.length})  {dataList[count].question}</p>
        {
            dataList[count].answers.map(
                (item,index) => <button className='d-block w-50 m-auto btn btn-warning mb-1' onClick={()=>checkAnswer(item.isCorrect)} key={index} >{item.ans}</button>
            )
       }
        <br/>
        <button className='d-block w-50 m-auto btn btn-primary mb-1' onClick={nextQuestion}>Next</button>
                </>
            )
        }
        
    </div>
  )
}

export default Quiz