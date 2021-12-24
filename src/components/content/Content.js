import React, {useState} from 'react';
import Form from "../form/Form";
import './content.css'

const Content = () => {
  const [numOfRebar, setNumOfRebar] = useState(null);
  const [arrayOne, setArrayOne] = useState([]);
  const [arrayTwo, setArrayTwo] = useState([]);
  const [lenOne, setLenOne] = useState([]);
  const [lenTwo, setLenTwo] = useState([]);
  const [quanOne, setQuanOne] = useState([]);
  const [quanTwo, setQuanTwo] = useState([]);
  const [moreInfo, setMoreInfo] = useState(false);

  return (
    <div className="content">
      <Form
        setNumOfRebar={setNumOfRebar}
        setArrayOne={setArrayOne}
        setArrayTwo={setArrayTwo}
        setLenOne={setLenOne}
        setLenTwo={setLenTwo}
        setQuanOne={setQuanOne}
        setQuanTwo={setQuanTwo}
      />
      {numOfRebar && <div>
        <h3>Minimum needed Rebar is: {numOfRebar}</h3>
        {!moreInfo?<button className="info-btn" onClick={()=>setMoreInfo(!moreInfo)}>More Info>>></button>:
        <button className="info-btn" onClick={()=>setMoreInfo(!moreInfo)}>Hide Info</button>}
      </div>}
      {moreInfo &&
      <div className="content-one">
        {arrayOne.length !== 0 && (
          <div>
            <div className="content-info">
              <div className="red"></div>
              <p>Indicates the current desired length.</p>
              <div className="blue"></div>
              <p>Indicates the remaining Rebar length.</p>
            </div>
            <span className="info-txt">Add the numbers in the blue and red to get the current available length of the Rebar</span>
            <h4>Length1 = <span>{lenOne}</span> and Quantity1 = <span>{quanOne}</span></h4>
            {arrayOne.map(element=>(
              <div className="content-div" key={element}>
                <div className="content-txt"  style={{width: `${(element[0])*5}px`, height:"20px", backgroundColor:"red", padding:'0 20px 20px 20px'}}>
                  <span>{element[0]}</span>
                </div>
                <div className="content-txt" style={{width: `${(element[1])*5}px`, height:"20px", backgroundColor:"blue", padding:'0 20px 20px 20px'}}>
                  <span>{element[1]}</span>
                </div>
              </div>
            ))}
          </div>
        )}
        {arrayTwo.length !== 0 && (
          <div>
            <h4>Length2 = <span>{lenTwo}</span> and Quantity2 = <span>{quanTwo}</span></h4>
            {arrayTwo.map(element=>(
              <div className="content-div" key={element}>
                <div className="content-txt"  style={{width: `${(element[0])*5}px`, height:"20px", backgroundColor:"red", padding:'0 20px 20px 20px'}}>
                  <span>{element[0]}</span>
                </div>
                <div className="content-txt" style={{width: `${(element[1])*5}px`, height:"20px", backgroundColor:"blue", padding:'0 20px 20px 20px'}}>
                  <span>{element[1]}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      }
    </div>
  );
};

export default Content;