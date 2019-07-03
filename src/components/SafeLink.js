import React from 'react';

export default function SafeLink({children, href, title}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" title={title}>
      {children}
    </a>
  );
}
