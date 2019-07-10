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
              siteUrl
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
              <meta name="twitter:creator" content="@Yomguithereal" />
              <meta property="og:image" content={meta.siteUrl + '/img/avatar.jpg'} />
            </Helmet>
            <div id="ribbon" />
            <header>
              <h1>
                <Link to="/">Yomguithereal’s shenanigans</Link>
              </h1>
              <br className="skipper" />
              <SafeLink
                href={meta.githubUrl}
                title="github.com/Yomguithereal">
                <GithubLogo />
              </SafeLink>
              <SafeLink
                href={meta.twitterUrl}
                title="twitter.com/Yomguithereal">
                <TwitterLogo />
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
