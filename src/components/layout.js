import React from 'react';
import Helmet from 'react-helmet';
import {StaticQuery, graphql, Link} from 'gatsby';

import '../style/custom-tufte.css';

export default function Layout({children, title}) {
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
              title={data.site.siteMetadata.title + (title ? ` - ${title}` : '')}>
              <html lang="en" />
            </Helmet>
            <div id="ribbon" />
            <header>
              <h1>
                <Link to="/">Yomguithereal’s shenanigans</Link>
              </h1>
            </header>
            <article>
              <section>
                {children}
              </section>
            </article>
          </>
        );
      }} />
  );
}
