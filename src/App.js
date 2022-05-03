import React, { useEffect, useState } from 'react';
import sample from './images/sample1.jpg'
function App() {


  
    const [length, setlength] = useState(0);
    const [sp, setsp] = useState(0);
    const [ep, setep] = useState(0);
    const [length1, setlength1] = useState(0);
    const [force, setforce] = useState(0);
    const [uf, setuf] = useState(0);
    const [Fa, setFa] = useState(0);
    const [Fb, setFb] = useState(0);
    useEffect(()=>{
      
    })
    function calculateTotal() {
      var x=(sp+ep)/2;
      var f1=(ep-sp)*uf;
      var fB = ((force*length1)+(f1*x))/length;
      setFb(fB);
      setFa(force-fB);
    }
    return (
      
      
      <div className="bmd">
        
        <h1>BMD and SFD calculator</h1>
        <div>
          <p> sample image</p>
          <br/>
          <img src={sample} height={200} width={480} />

        </div>
        
        <div className="number-inputs">
            <p>rod length <input
            type="number"
            value={length}
            onChange={(e) => setlength(+e.target.value)}
            placeholder="0"
          /></p>
          <p>point force <input
            type="number"
            value={force}
            onChange={(e) => setforce(+e.target.value)}
            placeholder="0"
          /></p>
          <p>force length <input
            type="number"
            placeholder='12'
            value={length1}
            onChange={(e) => setlength1(+e.target.value)}
            
          /></p>
          <p>uniform distributed froce</p>
              <p>  froce <input
                type="number"
                placeholder='0'
                value={uf}
                onChange={(e) => setuf(+e.target.value)}
              /></p>
            <p>   start point <input
                type="number"
                placeholder='0'
                value={sp}
                onChange={(e) => setsp(+e.target.value)}
              /></p>
              <p>   end point <input
                type="number"
                placeholder='0'
                value={ep}
                onChange={(e) => setep(+e.target.value)}
              /></p>                                                                     
        </div>
  
        <button onClick={calculateTotal} >calculate force!</button>
        <p>force at point <strong>a</strong>={Fa}</p>
        <p>force at point <strong>b</strong>={Fb}</p> 
      </div>
      
    );
  }
  

export default App;