import React from 'react';

export function MarginNote({children}) {
  return (
    <span className="marginnote">
      {children}
    </span>
  );
}

export function Divider() {
  return (
    <p style={{textAlign: 'center', fontSize: '24px', margin: '40px 0px'}}>
      ⁂
    </p>
  );
}
