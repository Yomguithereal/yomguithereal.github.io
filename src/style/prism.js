// Original: https://raw.githubusercontent.com/PrismJS/prism-themes/master/themes/prism-ghcolors.css
export default {
  plain: {
    color: '#393A34',
    // backgroundColor: '#f6f8fa'
  },
  styles: [
    {
      types: ['comment', 'prolog', 'doctype', 'cdata'],
      style: {
        color: '#999988',
        fontStyle: 'italic'
      }
    },
    {
      types: ['namespace'],
      style: {
        opacity: 0.7
      }
    },
    {
      types: ['string', 'attr-value'],
      style: {
        color: '#DCA40D'
      }
    },
    {
      types: ['punctuation', 'operator'],
      style: {
        color: '#393A34'
      }
    },
    {
      types: [
        'entity',
        'url',
        'symbol',
        'number',
        'boolean',
        'variable',
        'constant',
        'property',
        'regex',
        'inserted'
      ],
      style: {
        color: '#0e638e'
      }
    },
    {
      types: ['atrule', 'keyword', 'attr-name', 'selector'],
      style: {
        color: '#00a4db'
      }
    },
    {
      types: ['function', 'deleted', 'tag'],
      style: {
        color: '#0e638e'
      }
    },
    {
      types: ['function-variable'],
      style: {
        color: '#6f42c1'
      }
    },
    {
      types: ['tag', 'selector', 'keyword'],
      style: {
        color: '#d42a20'
      }
    }
  ]
}
