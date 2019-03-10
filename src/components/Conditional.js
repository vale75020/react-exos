import React from "react";

export default function Conditional(props) {
  console.log(props);
  if (props.isLoading) {
  return (<h1 style={{color:"red"}}>Loading...</h1>)
  } else {
    return (<h1 style={{color:"green"}}>Conditional rendering</h1>)
  }
}
