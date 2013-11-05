$(document).ready(function() {
  var visualSearch = VS.init({
		container : $('#visual_search'),
		query     : '',
    autosearch: false,
		callbacks : {
      search : function(query, searchCollection) {
        console.log(searchCollection);
      },
      facetMatches : function(callback) {
        callback([
          'user', 'tag', 'group', 'subgroup'
        ]);
      },
			valueMatches : function(facet, searchTerm, callback) {
        switch (facet) {
          case 'user':
            callback([
              { value: 'user1', label: 'User 1' },
              { value: 'user2', label: 'User 2' }
            ]);
            break;
          case 'tag':
            callback([
              'tag1', 'tag2', 'tag3'
            ]);
            break;
        }
      }
		}
	});
});