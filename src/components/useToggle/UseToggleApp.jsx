

import useToggle from "./useToggle.jsx";

 export const UseToggleApp = () => {
  const [isVisible,toggle]=useToggle()
  return(
    
    <div className="App">
    
      <button onClick={toggle}>
       {isVisible?"Hide":"Show"} 
      </button>
      {isVisible&& <h1>Hidden text</h1>}
    </div>
  )
};

