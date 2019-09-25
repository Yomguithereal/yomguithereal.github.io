import React from 'react';
import {graphql, Link} from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';

import {Divider, SideNote} from '../components/tufte';
import SafeLink from '../components/SafeLink';

export const query = graphql`
  query($allow: [Boolean]!) {

    posts: allMdx(
      sort: {fields: [frontmatter___date], order: DESC},
      filter: {frontmatter: {type: {eq: "post"}, draft: {in: $allow}}}
    ) {
      edges {
        node {
          frontmatter {
            slug
            type
            title
            subtitle
            date
          }
        }
      }
    },

    decks: allMdx(
      sort: {fields: [frontmatter___date], order: DESC},
      filter: {frontmatter: {type: {eq: "deck"}, draft: {in: $allow}, dummy: {nin: true}}}
    ) {
      edges {
        node {
          frontmatter {
            slug
            title
            date
            event
            lang
            description
          }
        }
      }
    }
  }
`;

function formatDate(date) {
  const [year, month, day] = date.split('-');

  return `${day}/${month}/${year}`;
}

export default function Index({data}) {
  const posts = data.posts.edges.map(({node}) => node);
  const decks = data.decks.edges.map(({node}) => node);

  const subtitle = 'Writing about programming, litterature, modular synthesizers & other miscellaneous topics';

  return (
    <>
      <Helmet>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Yomguithereal's Shenanigans" />
        <meta name="twitter:description" content={subtitle} />
        <meta property="og:title" content="Yomguithereal's Shenanigans" />
        <meta property="og:description" content={subtitle} />
      </Helmet>
      <Layout>
        <h2 style={{textAlign: 'center'}}>A curated collection of shenanigans</h2>
        <h3 style={{textAlign: 'center'}}>Writing about programming, litterature, modular synthesizers &amp; other miscellaneous topics</h3>
        <Divider />
        <p style={{textAlign: 'center'}}>
          Welcome to my blog, weary traveler. My name is <em>Guillaume Plique</em>, aka <em>Yomguithereal</em> and I am a research engineer working with social science researchers and designers in Sciences Po's <SafeLink href="https://medialab.sciencespo.fr">médialab</SafeLink> in Paris.
        </p>
        <div className="paragraph" style={{textAlign: 'center'}}>
          I am usually available for some light/short freelance or consulting work.
          <SideNote id="skills" style={{textAlign: 'left'}}>
            I usually work in the following domains:
            <ul>
              <li>Webmining (Scraping, APIs, Crawling etc.)</li>
              <li>Algorithmics &amp; data structures</li>
              <li>Fuzzy matching &amp; full-text search tweaking</li>
              <li>Record linkage &amp; deduplication</li>
              <li>Natural Language Processing</li>
              <li>Machine learning &amp; data science</li>
              <li>Graph theory &amp; interactive visualisation</li>
              <li>Fullstack web development</li>
            </ul>
          </SideNote>
          You can join me by writing at <code>guillaumeplique+freelance</code> on gmail.com servers.
        </div>
        <p style={{textAlign: 'center'}}>
          You can also peruse my open source work <Link to="/open-source">here</Link>.
        </p>
        <h4>
          Posts about programming &amp; data structures:
        </h4>
        <ul>
          {posts.map(p => {
            const post = p.frontmatter;

            return (
              <li key={post.slug}>
                <h4 style={{borderBottom: 'none', maxWidth: '100%'}}>
                  <Link to={`/posts/${post.slug}`}>{post.title}</Link>
                </h4>
                <p>
                  <code>{formatDate(post.date)}</code>
                  <br />
                  <em>{post.subtitle}</em>
                </p>
              </li>
            );
          })}
        </ul>
        {decks.length !== 0 && (
          <>
            <h4>Various presentations:</h4>
            <ul>
              {decks.map(d => {
                const deck = d.frontmatter;

                return (
                  <li key={deck.slug}>
                    <h4 style={{borderBottom: 'none', maxWidth: '100%'}}>
                      <Link to={`/decks/${deck.slug}`}>{deck.title}</Link>
                    </h4>
                    <p>
                      <code>{formatDate(deck.date)}</code>
                      <span>
                        &nbsp;– <small>{deck.event} {deck.lang === 'fr' && '(fr)'}</small>
                      </span>
                      <br />
                      <em>
                        {deck.description}
                      </em>
                    </p>
                  </li>
                );
              })}
            </ul>
          </>
        )}
        <Divider />
        <h4>Acknowledgments</h4>
        <p>Being a very bad graphist, I must rely on works from more talented people than myself to design palatable things:</p>
        <ul>
          <li>
            The very fine <SafeLink href="https://edwardtufte.github.io/tufte-css/">Tufte CSS</SafeLink> stylesheet (<SafeLink href="https://github.com/edwardtufte/tufte-css">repository</SafeLink>), by <SafeLink href="https://github.com/daveliepmann">Dave Liepmann</SafeLink> et alii.
          </li>
          <li><SafeLink href="https://www.c82.net/">Nicolas Rougeux</SafeLink>'s fantastic rendition of <SafeLink href="https://www.c82.net/euclid/">Byrne's Euclid</SafeLink>.</li>
        </ul>
      </Layout>
    </>
  );
}
