import React, { useState } from 'react'
import Navbar from './Navbar'
import functionPlot from "function-plot";
import uniform from "./images/uniform.jpeg";

import './App.css'

function plotter(Ra,Rb,len,sp,ep,load){
    let contentsBounds = document.body.getBoundingClientRect();
    let width = 10;
    let height = 5;
    let ratio = contentsBounds.width / width;
    width *= ratio;
    height *= ratio;
    var d2 = load*(sp+ep)/(2*(ep-sp));
    d2 = d2.toString();
    var y1 = Rb.toString();
    var y2 = `${-Ra}+${load*(sp+ep)/(2*(ep-sp))}*(x-${sp})`
    var y3 = (-Ra).toString();
    var y4  = `${Rb}*x`;
    y4 = y4.toString();
    var y5 = `${-load*(sp+ep)*sp/(2*(ep-sp))}*x+${load*(sp+ep)/(4*(ep-sp))}*x*x`;
    y5 = y5.toString();
    var y6 = `${-Ra}*x`
    y6 = y6.toString();

    var d4 = `${Rb}`;
    d4 = d4.toString();
    var d5 = `${-Ra-load*((sp+ep)*sp/2*(ep-sp))}+${load*(ep+sp)/2*(ep-sp)}*x`
    d5 = d5.toString();
    var d6 = `${-Ra}`
    d6 = d6.toString();
    console.log(y1)
    console.log(y2)
    console.log(y3)
    console.log(y4)
    console.log(y5)
    console.log(y6)

    functionPlot({
        target: "#Graph1",
        width,
        height,
        yAxis: { domain: [-1, 9] },
        xAxis:{ domain: [sp, ep] },
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
        xAxis:{ domain: [0, sp] },
        grid: true,
        data: [
          {
            fn: y2,
            derivative: {
              fn: d2,
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
        xAxis:{ domain: [0, 0] },
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
        target: "#Graph4",
        width,
        height,
        yAxis: { domain: [-1, 9] },
        xAxis:{ domain: [ep, len] },
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
        target: "#Graph5",
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
        target: "#Graph6",
        width,
        height,
        yAxis: { domain: [-1, 9] },
        xAxis:{ domain: [0, 0] },
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
 
export default function Uniform() {

    const [sp,setSp] = useState(0);
    const [ep,setEp] = useState(100);
    const [len,setLen] = useState(0);
    const [load,setLoad] = useState(0);
    const [Ra,setRa] = useState(0);
    const [Rb,setRb] = useState(0);
    function calculateTotal() {
        var rb = load*((sp+ep)/2)*(sp/len);
        var ra = load*((sp+ep)/2)*((len-sp)/len);

        setRa(ra);
        setRb(rb);
      }
  return (
    <div className='bmd'>
        <Navbar/>
        <h1>BMD and SFD calculator</h1>
    <p className="case1">Case 2: Uniform Load</p>
    <div>
      <h5 id="Si">Sample Image</h5>
      <img
        src={uniform}
        height={200}
        width={480}
        alt=""
        className="sample_img"
      />
    </div>

    <div className="number_inputs">
      <p>
        Load :
        <input
          type="text"
          value={load}
          onChange={(e) => setLoad(+e.target.value)}
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
        Total Length :
        <input
          type="text"
          value={len}
          onChange={(e) => setLen(+e.target.value)}
          placeholder=""
        />
      </p>
      <button className="btn btn-primary" onClick={calculateTotal}>Calculate Force!</button>
      <div className="res">
        <p>
          Force at point <strong>a</strong>={Ra}
        </p>
        <p>
          Force at point <strong>b</strong>={Rb}
        </p>
        <button className="btn btn-primary" onClick={plotter(Ra,Rb,len,sp,ep,load)}>Plot Function!!</button>
      </div>
    </div>
    <h1>Shear Force Diagram</h1>
    <div className="row Graphs">
          <div className="col-md-12" id="Graph1">
                
          </div>
          <div className="col-md-12" id="Graph2">
          
          </div>
          <div className="col-md-12" id="Graph3">
          
          </div>
          <div className="col-md-12" id="Graph4">
        
          </div>
          <div className="col-md-12" id="Graph5">
          
          </div>
          <div className="col-md-12" id="Graph6">
          
          </div>
    </div>


    </div>
  )
}
