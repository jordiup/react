import React from 'react' ;

export const InfoPrintout = (props) => {
  console.log(props);
  return(<div>{props.children}. Name: {props.name}, Age: {props.age}</div>);
}