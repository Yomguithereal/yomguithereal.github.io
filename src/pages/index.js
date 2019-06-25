import React from 'react';
import Layout from '../components/Layout';

export default function Index() {
  return (
    <Layout>
      <p>
      <span class="marginnote">Blue text, while also a widely recognizable clickable-text indicator, is crass and distracting. Luckily, it is also rendered unnecessary by the use of underlining.</span>
        As always, these design choices are merely one approach that Tufte CSS provides by default. Other approaches, such as changing color on click or mouseover, or using highlighting or color instead of underlining to denote links, could also be made to work. The goal is to make sentences readable without interference from links, as well as to make links immediately identifiable even by casual web users.
      </p>
    </Layout>
  );
}
