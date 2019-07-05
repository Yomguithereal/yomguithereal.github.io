import React from 'react';

export function MarginNote({id, children}) {
  return (
    <>
      <label htmlFor={id} className="margin-toggle">&#8853;</label>
      <input type="checkbox" id={id} className="margin-toggle"/>
      <span className="marginnote">
        {children}
      </span>
    </>
  );
}

export function SideNote({id, children}) {
  return (
    <>
      <label className="margin-toggle sidenote-number" htmlFor={id} />
      <input type="checkbox" id={id} className="margin-toggle" />
      <span className="sidenote">{children}</span>
    </>
  );
}

export function Divider() {
  return <p className="divider">⁂</p>
}
