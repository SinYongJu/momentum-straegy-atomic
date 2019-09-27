import React from 'react';

const Desc = ({children}) => {
  console.log(children)
  return (
   <p>{children}</p>
  );
};

export default Desc;