import {useEffect} from 'react';

export default {
  fonts: {
    body: 'caslon, Palatino, "Palatino Linotype", "Palatino LT STD", "Book Antiqua", Georgia, serif',
    monospace: 'monospace',
  },
  colors: {
    background: '#fcf3d9'
    // text: 'black',
    // background: 'black',
    // primary: 'blue',
  },
  text: {
    heading: {
      textTransform: 'uppercase'
    }
  },
  styles: {
    h2: {
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '3rem'
    },
    h3: {
      fontStyle: 'normal',
      fontWeight: 'normal'
    }
  }
};

export function Solver() {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = 'body {padding-left: 0 !important;}';

    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);
  return null;
};
