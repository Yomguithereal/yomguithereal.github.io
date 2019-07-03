import React from 'react';
import Helmet from 'react-helmet';
import {StaticQuery, graphql, Link} from 'gatsby';

import GithubLogo from './GithubLogo';
import TwitterLogo from './TwitterLogo';
import SafeLink from './SafeLink';

import '../style/custom-tufte.css';

export default function Layout({children, title}) {
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
              githubUrl
              twitterUrl
            }
          }
        }
      `}
      render={data => {
        const meta = data.site.siteMetadata;

        return (
          <>
            <Helmet
              title={meta.title + (title ? ` - ${title}` : '')}>
              <html lang="en" />
            </Helmet>
            <div id="ribbon" />
            <header>
              <h1>
                <Link to="/">Yomguithereal’s shenanigans</Link>
              </h1>
              <SafeLink
                href={meta.githubUrl}
                title="github.com/Yomguithereal">
                <GithubLogo style={{position: 'relative', top: '2px', marginLeft: '20px'}} />
              </SafeLink>
              <SafeLink
                href={meta.twitterUrl}
                title="twitter.com/Yomguithereal">
                <TwitterLogo style={{position: 'relative', top: '2px', marginLeft: '5px'}} />
              </SafeLink>
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
