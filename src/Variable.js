import React, { useState } from 'react'
import Navbar from './Navbar'
import variable from "./images/variable.jpeg";
import './App.css';
import functionPlot from "function-plot";

function plotter(fall1,fall2,ep,sp,sf,ef,Fb,Fa,len){
  let contentsBounds = document.body.getBoundingClientRect();
    let width = 10;
    let height = 5;
    let ratio = contentsBounds.width / width;
    width *= ratio;
    height *= ratio;
    var m = (ep-sp)/(sf-ef);
    var n = sp-((ep-sp)*sf/(ef-sf))

    var y1 = `${m/2}*x*x+${n}*x+${Fb}-${n*ep}-${(m*ep*ep)/2}`
    y1 = y1.toString();
    var d1 = `${m}*x+${n}`
    d1 = d1.toString();

    var y2 = `${Fb-fall1-fall2}`
    y2 = y2.toString();


    var y3 = `${Fb}`
    y3 = y3.toString();


    var y4 = `${Fb-fall1-fall2}*x`
    y4 = y4.toString();
    var d4 = `${Fb-fall1-fall2}`

var y5 = `${(Fb-fall1-fall2)*sp}+${m/6}*x*x*x+${n/2}*x*x+${Fb-ep-m*(ep*ep)/2}*x-${m*(sp*sp*sp)/6+n*(sp*sp)/2+(Fb-ep-m*(ep*ep)/2)*sp}`
y5 = y5.toString();
var d5 = `${m/2}*x*x+${n}*x+${Fb-ep-m*(ep*ep)/2}`
d5 = d5.toString();


var y6 = `${m*(ep*ep*ep-sp*sp*sp)/6+n*(ep*ep-sp*sp)/2+(Fb-ep-m*(ep*ep)/2)*(ep-sp)+(Fb-fall1-fall2)*sp-Fb*ep}+${Fb}*x`
y6 = y6.toString();

var d6 = Fb;
d6 = d6.toString();


    functionPlot({
      target: "#Graph111",
      width,
      height,
      yAxis: { domain: [-1, 9] },
      xAxis:{ domain: [0, sp] },
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
      target: "#Graph211",
      width,
      height,
      yAxis: { domain: [-1, 9] },
      xAxis:{ domain: [sp, ep] },
      grid: true,
      data: [
        {
          fn: y1,
          derivative: {
            fn: d1,
            updateOnMouseMove: true,
          },
        },
      ],
    });

    functionPlot({
      target: "#Graph311",
      width,
      height,
      yAxis: { domain: [-1, 9] },
      xAxis:{ domain: [sp, len] },
      grid: true,
      data: [
        {
          fn: y3,
          derivative: {
            fn: "0",
            updateOnMouseMove: true,
          },
        },
      ],
    });
  
    functionPlot({
      target: "#Graph411",
      width,
      height,
      yAxis: { domain: [-1, 9] },
      xAxis:{ domain: [0, sp] },
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


    functionPlot({
      target: "#Graph511",
      width,
      height,
      yAxis: { domain: [-1, 9] },
      xAxis:{ domain: [sp, ep] },
      grid: true,
      data: [
        {
          fn: y5,
          derivative: {
            fn: d5,
            updateOnMouseMove: true,
          },
        },
      ],
    });
  
    functionPlot({
      target: "#Graph611",
      width,
      height,
      yAxis: { domain: [-1, 9] },
      xAxis:{ domain: [ep, len] },
      grid: true,
      data: [
        {
          fn: y6,
          derivative: {
            fn: d6,
            updateOnMouseMove: true,
          },
        },
      ],
    });
  


  

}

export default function Variable() {
  const [len,setLen] = useState(0);
  const [sp,setSp] = useState(0);
  const [ep,setEp] = useState(10);
  const [sf,setSf] = useState(0);
  const[ef,setEf] = useState(10);
  const [Fa,setFa] = useState(0);
  const [Fb,setFb] = useState(0);
  var fall1 = 0;
  var fall2 = 0;
  function calculateTotal(){
      fall1 = (Math.abs(ef-sf)*Math.abs(ep-sp))/2;
      fall2 = Math.min(sf,ef)*Math.abs(sp-sp);
      var l2 = sp+(ep-sp)/2;
      var l1 = ep-(ep-sp)/3;
      var fb = (fall2*l2+fall1*l1)/len;
      var fa = fall1+fall2 - fb;


      setFa(fa);
      setFb(fb);

  }

  return (
    <div className='bmd'>
        <Navbar/>
        <h1>BMD and SFD calculator</h1>
    <p className="case1">Case 3: Variable Load</p>
    <div>
      <h5 id="Si">Sample Image</h5>
      <img
        src={variable}
        height={200}
        width={480}
        alt=""
        className="sample_img"
      />
    </div>

    <div className="number_inputs">
      <p>
        Total Length :
        <input
          type="text"
          value={len}
          onChange={(e) => setLen(+e.target.value)}
          placeholder="0"
        />
      </p>
      <p>
        Starting Length (sp) :
        <input
          type="text"
          value={sp}
          onChange={(e) => setSp(+e.target.value)}
          placeholder=""
        />
      </p>
      <p>
        Ending Length (ep) :
        <input
          type="text"
          value={ep}
          onChange={(e) => setEp(+e.target.value)}
          placeholder=""
        />
      </p>
      <p>
        Starting Force :
        <input
          type="text"
          value={sf}
          onChange={(e) => setSf(+e.target.value)}
          placeholder=""
        />
      </p>
      <p>
        Ending Force :
        <input
          type="text"
          value={ef}
          onChange={(e) => setEf(+e.target.value)}
          placeholder=""
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
        <button className="btn btn-primary" onClick={plotter(fall1,fall2,ep,sp,sf,ef,Fb,Fa,len)}>Plot Function!!</button>
      </div>
    </div>

    <h1>Shear Force Diagram</h1>
    <div className="row Graphs">
          <div className="col-md-12" id="Graph111">
                
          </div>
          <div className="col-md-12" id="Graph211">
          
          </div>
          <div className="col-md-12" id="Graph311">
          
          </div>
          <div className="col-md-12" id="Graph411">
        
          </div>
          <div className="col-md-12" id="Graph511">
          
          </div>
          <div className="col-md-12" id="Graph611">
          
          </div>
    </div>

    </div>
  )
}
