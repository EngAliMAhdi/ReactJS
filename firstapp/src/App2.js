import React, { useState } from 'react'
function App2() {
    const[log,setLog]=useState(true)
    const[user,setUser]=useState('')
  return (
    <div>   
        {log ? <Login setLog={setLog} setUser={setUser}/> : <Panel user={user} />}
    </div>
  )
}
function Login({setLog,setUser}) {
    // function click() {
    //     setLog(false)
    // }
    // function changeUser(event) {
    //     setUser(event.target.value)
    // }
    return (
      <div>
        <input type='text' onChange={(e)=>setUser(e.target.value)} />
        <button onClick={()=>setLog(false)}>Login</button>
      </div>
    )
  }
  function Panel({user}) {
    return (
      <div>
        <h1>Control Panel</h1>
        welcome {user}
      </div>
    )
  }

export default App2