import React from 'react';
import { Button } from 'semantic-ui-react';


const Buttons = ( {basicAsc, basicDesc, handleOrderAsc, handleOrderDesc} ) => {
  return (
    <React.Fragment>
      <Button primary basic={basicAsc} onClick={handleOrderAsc}>Ascendente</Button>
      <Button primary basic={basicDesc} onClick={handleOrderDesc}>Descendente</Button>
    </React.Fragment>
  )
}

export default Buttons;