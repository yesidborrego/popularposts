import React from 'react';
import { Button } from 'semantic-ui-react';


const Buttons = ( {basicAsc, basicDesc, handleButtonAsc, handleButtonDesc} ) => {
  return (
    <React.Fragment>
      <Button primary basic={basicAsc} onClick={handleButtonAsc}>Ascendente</Button>
      <Button primary basic={basicDesc} onClick={handleButtonDesc}>Descendente</Button>
    </React.Fragment>
  )
}

export default Buttons;