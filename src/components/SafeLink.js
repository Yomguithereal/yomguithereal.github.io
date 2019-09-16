import React from 'react';

export default function SafeLink({children, href, title, style}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      style={style}>
      {children}
    </a>
  );
}
