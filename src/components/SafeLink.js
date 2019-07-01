import React from 'react';

export default function SafeLink({children, href}) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}
