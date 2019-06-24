import React from 'react';
import Helmet from 'react-helmet';
import {StaticQuery, graphql} from 'gatsby';

import '../style/custom-tufte.css';

export default function Layout({children}) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => {
        return (
          <>
            <Helmet
              title={data.site.siteMetadata.title}>
              <html lang="en" />
            </Helmet>
            <header>
              <h1>
                Yomguithereal’s shenanigans
              </h1>
            </header>
            <article>
              <section>
                <h2>
                  Implementing an efficient LRU cache for JavaScript
                </h2>
                <h3>
                  Where we discover how to harness the power of JavaScript's typed array to go back to the memory allocation schemes of older &amp; more static languages
                </h3>
                <hr />
                {children}
              </section>
            </article>
          </>
        );
      }} />
  );
}
