angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('News', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var news = [
    { 
      id: 1,      
      title: 'Can Flipkart outrun Amazon',  
      category: 'Rising Stars',
      author: {
        name: 'John Carter',
        email: 'john.carter@nowhere.com'
      }
    },
    {
      id: 2,
      category: 'C-Notes',
      title: 'Michelle Rhee\'s Next Steps',
      author: {
        name: 'Bruce Wills',
        email: 'bruce.wills@nowhere.com'
      }
    },
    {
      id: 3,
      category: 'Rising Stars',
      title: 'Alice Greenwald: Promises to the Future About the Past',
      author: {
        name: 'Bruce Wills',
        email: 'bruce.wills@nowhere.com'
      }
    },
    {
      id: 4,
      category: 'Flashback',
      title: 'Breaking Bad? The Privatization of Harvard',
      author: {
        name: 'Bruce Wills',
        email: 'bruce.wills@nowhere.com'
      }
    },
    {
      id: 5,
      category: 'Wildcard',
      title: 'A Quick Study: Maps, Borders and the Shit That Holds the World Together',
      author: {
        name: 'Bruce Wills',
        email: 'bruce.wills@nowhere.com'
      }
    }
  ];

  return {
    all: function() {
      return news;
    },
    get: function(newsId) {
      // Simple index lookup
      return news[newsId];
    }
  }
});
