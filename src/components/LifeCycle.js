import React from 'react'

export default function LifeCycle() {
  return (
    <div>
        <h1>LifeCycle of a component</h1>
      <h2>componentDidMount()</h2>
      <h2>shouldComponentUpdate()</h2>
      <h2>componentWillUnmount()</h2>
      </div>
  )
}

/* 
componentDidMount() {
    GET the data i need to correctly display
}



shouldComponentUpdate(fanaxtProps, nextState) {
    return true if want it to update
    return false if not
}

componentWillUnmount() {
    teardown or cleanup your code before your component disappear
    ex. remove event listeners
}




*/ 
