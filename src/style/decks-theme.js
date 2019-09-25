import {useEffect} from 'react';

export default {
  fonts: {
    body: 'caslon, Palatino, "Palatino Linotype", "Palatino LT STD", "Book Antiqua", Georgia, serif',
    monospace: 'monospace',
  },
  colors: {
    background: '#fcf3d9'
  },
  text: {
    heading: {
      textTransform: 'uppercase'
    }
  },
  styles: {
    root: {
      textAlign: 'left'
    },
    h2: {
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '3rem',
    },
    h3: {
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '1.7rem'
    },
    Slide: {
      textAlign: 'left'
    },
    p: {
      width: '55%'
    }
  }
};

// TODO: should be called by route change on gatsby-browser
export function correctPadding() {
  const style = document.createElement('style');
  style.textContent = 'body {padding-left: 0 !important;}';

  document.head.appendChild(style);
};
