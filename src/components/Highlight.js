import React from 'react';
import PrismHighlight, {defaultProps} from 'prism-react-renderer';
import theme from '../style/prism';

export default ({children, className}) => {
  const language = className.replace(/language-/, '');

  return (
    <PrismHighlight
      {...defaultProps}
      code={children}
      language={language}
      theme={theme}>
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <pre className={className} style={{...style, padding: '20px', margin: '0px'}}>
          {tokens.map((line, i) => {

            if (!line.content && i === tokens.length - 1)
              return;

            return (
              <div key={i} {...getLineProps({line, key: i})}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({token, key})} />
                ))}
              </div>
            );
          })}
        </pre>
      )}
    </PrismHighlight>
  );
}
