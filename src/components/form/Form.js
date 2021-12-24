import React, {useState} from 'react';
import './form.css'

const Form = ({setNumOfRebar, setArrayOne, setArrayTwo, setLenOne, setLenTwo, setQuanOne, setQuanTwo}) => {
  const [lengthOne, setLengthOne] = useState(1);
  const [lengthTwo, setLengthTwo] = useState(1);

  const [quantityOne, setQuantityOne] = useState(1);
  const [quantityTwo, setQuantityTwo] = useState(1);


  const handleSubmit = e =>{
    e.preventDefault();
    console.log("SUBMITTING")
    let numberOfRebar = 0;
    let q1 = quantityOne;
    let q2 = quantityTwo;
    let l1 = lengthOne;
    let l2 = lengthTwo;
    let animArrOne = []
    let animArrTwo = []
    // console.log("RETURNED VALS ------> "+ getVals(l2,q2,12));
    // console.log("RETURNED VALS ------> "+ getVals(l1,q1,12));
    if(l1>l2){

      let returnedVal = getVals(l1, q1, 12, animArrOne);
      console.log("RETURNED VALS ------> "+ returnedVal);
      numberOfRebar = returnedVal[0];
      if(returnedVal[1] >= l2){
        returnedVal = getVals(l2, q2, returnedVal[1], animArrTwo)
        console.log("RETURNED VALS ------> "+ returnedVal);
        numberOfRebar+=returnedVal[0]-1;
      }
      else{
        returnedVal = getVals(l2, q2, 12, animArrTwo)
        console.log("RETURNED VALS ------> "+ returnedVal);
        numberOfRebar+=returnedVal[0];
      }
    }
    else{
      let returnedVal = getVals(l2, q2, 12, animArrOne);
      console.log("RETURNED VALS ------> "+ returnedVal);
      numberOfRebar = returnedVal[0]
      if(returnedVal[1]>=l1){
        returnedVal = getVals(l1, q1, returnedVal[1], animArrTwo)
        console.log("RETURNED VALS ------> "+ returnedVal);
        numberOfRebar+=returnedVal[0]-1;
      }
      else{
        returnedVal = getVals(l1, q1, 12, animArrTwo)
        console.log("RETURNED VALS ------> "+ returnedVal);
        numberOfRebar+=returnedVal[0];
      }
    }

    console.log(numberOfRebar);
    console.log(animArrOne);
    console.log(animArrTwo);
    setArrayOne(animArrOne);
    setArrayTwo(animArrTwo);
    setQuanTwo(quantityTwo);
    setQuanOne(quantityOne);
    setLenOne(lengthOne);
    setLenTwo(lengthTwo);
    setNumOfRebar(numberOfRebar);
  }
  const getVals = (l, q, maxL, animArray)=>{
    let quantity = q;
    let length = l;
    let maxLength = maxL;
    let returnedVal = [1,0];
    let j = 1;
    for(let i=1;i<=quantity;i++){
      if(length>maxLength){
        j++;
        maxLength = 12-length;
        returnedVal[0] = j;
        returnedVal[1] = maxLength;
      }
      else {
        maxLength = maxLength-length;
        returnedVal[1] = maxLength;
      }
      animArray.push([parseInt(l), maxLength]);
    }
    return returnedVal;
  }

  return (
    <div className="form">
      <h2>Input your data</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-element">
          <span>Length One:</span>
          <input
            min="1"
            max="12"
            type="number"
            value={lengthOne}
            onChange={e=>setLengthOne(e.target.value)}
            placeholder="Length One"/>
        </div>
        <div className="form-element">
          <span>Quantity One:</span>
          <input
            type="number"
            min="1"
            value={quantityOne}
            onChange={e=>setQuantityOne(e.target.value)}
            placeholder="Quantity One"/>
        </div>
        <div className="form-element">
          <span>Length Two:</span>
          <input
            type="number"
            min="1"
            max="12"
            value={lengthTwo}
            onChange={e=>setLengthTwo(e.target.value)}
            placeholder="Length Two"/>
        </div>
        <div className="form-element">
          <span>Quantity Two:</span>
          <input
            type="number"
            min="1"
            value={quantityTwo}
            onChange={e=>setQuantityTwo(e.target.value)}
            placeholder="Quantity Two"/>
        </div>
          <button type="submit">Calculate</button>
      </form>
    </div>
  );
};

export default Form;