const search = instantsearch({
    appId: 'MK3FXFX5GZ',
    apiKey: '9c93c5845a4e979b651b9aaca5d63bf9',
    indexName: window.location.hostname.indexOf('dannyguo.com') === -1 ? 'dev_posts' : 'prod_posts',
    routing: true
});

search.addWidget(
    instantsearch.widgets.searchBox({
        container: '#search-box',
        placeholder: 'Search'
    })
);

search.addWidget(
    instantsearch.widgets.stats({
        container: '#stats'
    })
);

search.addWidget(
    instantsearch.widgets.hits({
        container: '#hits',
        templates: {
            empty: '<p>No results</p>',
            item: '<p><a href="{{relativePermalink}}">{{title}}</a><br>{{{_snippetResult.content.value}}}</p>'
        }
    })
);

search.addWidget(
    instantsearch.widgets.pagination({
        container: '#pagination'
    })
);

search.addWidget(
    instantsearch.widgets.configure({
        attributesToHighlight: [],
        attributesToSnippet: ['content:40'],
        highlightPreTag: '<span class="search-highlight">',
        highlightPostTag: '</span>',
        hitsPerPage: 5,
        snippetEllipsisText: '...'
    })
);

search.start();
