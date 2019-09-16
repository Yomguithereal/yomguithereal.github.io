import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';

import {Divider} from '../components/tufte';
import GithubLogo from '../components/GithubLogo';
import SafeLink from '../components/SafeLink';

import DATA from '../data/open-source.json';

function groupBy(array, key) {
  const index = {};

  array.forEach(item => {
    const value = item[key];

    if (!(value in index))
      index[value] = [item];
    else
      index[value].push(item)
  });

  return index;
}

function OpenSourceList({items}) {
  return (
    <ul>
      {items.map(item => {
        const repo = 'https://github.com/' + item.repo;
        const site = item.site ? item.site : repo;

        return (
          <li key={item.repo}>
            <p>
              <big><SafeLink href={site}>{item.label}</SafeLink></big>
              <SafeLink href={repo} style={{backgroundImage: 'none'}}>
                <GithubLogo width={16} height={16} />
              </SafeLink>
              <br />
              <em>{item.description}</em>
            </p>
          </li>
        );
      })}
    </ul>
  );
}

export default function OpenSource() {
  const subtitle = 'Yomguithereal\'s collection of Open Source work.';

  const grouped = groupBy(DATA, 'language');

  return (
    <>
      <Helmet>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Yomguithereal's Shenanigans - Open Source Work" />
        <meta name="twitter:description" content={subtitle} />
        <meta property="og:title" content="Yomguithereal's Shenanigans - Open Source Work" />
        <meta property="og:description" content={subtitle} />
      </Helmet>
      <Layout>
        <h2>Open Source Work</h2>
        <h3>An abridged selection of Open Source libraries, tools, sites, applications etc. I work or worked on.</h3>
        <h4>JavaScript</h4>
        <OpenSourceList items={grouped.js} />
        <h4>Python</h4>
        <OpenSourceList items={grouped.python} />
        <h4>Clojure</h4>
        <OpenSourceList items={grouped.clojure} />
        <h4>Sites, Datascapes &amp; Apps</h4>
        <OpenSourceList items={grouped.site} />
        <Divider />
      </Layout>
    </>
  );
}
