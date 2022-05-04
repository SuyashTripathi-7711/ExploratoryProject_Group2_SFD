import React, { useState } from "react";
import point from "./images/point.jpeg";
import functionPlot from "function-plot";
import Navbar from "./Navbar";
import "./App.css";
// import Navbar from "./Navbar";

  function plotter(F,Fb,length,length1){
    let contentsBounds = document.body.getBoundingClientRect();
    let width = 10;
    let height = 5;
    let ratio = contentsBounds.width / width;
    width *= ratio;
    height *= ratio;
      
    var y1 = Fb-F
    var y2 = Fb;
    var y3 = Fb-F;
    var y4 = length1*(Fb-F) - Fb*length1;
    var d3 = (Fb-F).toString();
    var d4 = Fb.toString();
    y3 = y3.toString()+"*x";
    y4 = y4.toString()+`+${Fb}*x`;
    y1 = y1.toString();
    y2 = y2.toString()    

    functionPlot({
        target: "#Graph1",
        width,
        height,
        yAxis: { domain: [-1, 9] },
        xAxis:{ domain: [0, length1] },
        grid: true,
        data: [
          {
            fn: y1,
            derivative: {
              fn: "0",
              updateOnMouseMove: true,
            },
          },
        ],
      });
    
      functionPlot({
        target: "#Graph2",
        width,
        height,
        yAxis: { domain: [-1, 9] },
        xAxis:{ domain: [length1,length] },
        grid: true,
        data: [
          {
            fn: y2,
            derivative: {
              fn: "0",
              updateOnMouseMove: true,
            },
          },
        ],
      });


      functionPlot({
        target: "#Graph3",
        width,
        height,
        yAxis: { domain: [-1, 9] },
        xAxis:{ domain: [0, length1] },
        grid: true,
        data: [
          {
            fn: y3,
            derivative: {
              fn: d3,
              updateOnMouseMove: true,
            },
          },
        ],
      });


      functionPlot({
        target: "#Graph4",
        width,
        height,
        yAxis: { domain: [-1, 9] },
        xAxis:{ domain: [length1,length] },
        grid: true,
        data: [
          {
            fn: y4,
            derivative: {
              fn: d4,
              updateOnMouseMove: true,
            },
          },
        ],
      });
}
 
  
export default function Point() {
  
  const [length, setlength] = useState(0);
  const [length1, setlength1] = useState(0);
  const [force, setforce] = useState(0);
//   const [uf, setuf] = useState(0);
  const [Fa, setFa] = useState(0);
  const [Fb, setFb] = useState(0);
  
  function calculateTotal() {
    var fB = (force * length1) / length;
    setFb(fB);
    setFa(force - fB);
  }
  
  return (
    <div className="bmd">
      <Navbar/>
    <h1>BMD and SFD calculator</h1>
    <p className="case1">Case 1: Point Load</p>
    <div>
      <h5 id="Si">Sample Image</h5>
      <img
        src={point}
        height={200}
        width={480}
        alt=""
        className="sample_img"
      />
    </div>

    <div className="number_inputs">
      <p>
        Load
        <input
          type="text"
          value={length}
          onChange={(e) => setlength(+e.target.value)}
          placeholder="0"
        />
      </p>
      <p>
        Point Force
        <input
          type="text"
          value={force}
          onChange={(e) => setforce(+e.target.value)}
          placeholder="0"
        />
      </p>
      <p>
        Force Length
        <input
          type="text"
          placeholder="12"
          value={length1}
          onChange={(e) => setlength1(+e.target.value)}
        />
      </p>
      
      <button className="btn btn-primary" onClick={calculateTotal}>Calculate Force!</button>
      <div className="res">
        <p>
          Force at point <strong>a</strong>={Fa}
        </p>
        <p>
          Force at point <strong>b</strong>={Fb}
        </p>
        <button className="btn btn-primary" onClick={plotter(force,Fb,length,length1)}>Plot Function!!</button>
      </div>
    </div>
    <h1>Shear Force Diagram</h1>
      <div className="row Graphs">
          <div className="col-md-12" id="Graph1">
                <h2>Graph for 0 to {length1}</h2>
          </div>
          <div className="col-md-12" id="Graph2">
          <h2>Graph for {length1} to {length}</h2>
          </div>
          <div className="col-md-12" id="Graph3">
          <h2>Graph for 0 to {length1}</h2>
          </div>
          <div className="col-md-12" id="Graph4">
          <h2>Graph for {length1} to {length}</h2>
          </div>
      </div>

  </div>
    )
}
