import React from 'react';

export function Verbatim({children}) {
  return <code style={{backgroundColor: 'white', padding: '7px'}}>{children}</code>;
}
