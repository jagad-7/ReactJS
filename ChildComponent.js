import React from 'react'

function ChildComponent(Props) {
  return (
    <div>
        {/* <button onClick={Props.greetHandler}>Greet Parent</button> */}
        <button onClick={() => Props.greetHandler('child')}>GreetParent</button>
    </div>
  )
}

export default ChildComponent