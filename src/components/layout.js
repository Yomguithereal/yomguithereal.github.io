import React from 'react';
import Helmet from 'react-helmet';
import {StaticQuery, graphql} from 'gatsby';

import '../style/tufte.css';

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
            <main>
              {children}
            </main>
          </>
        );
      }} />
  );
}
