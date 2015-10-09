//create/init model for book item
var Book = Backbone.Model.extend({
  defaults: function() {
    return {
      title: 'Backbone.js Essentials',
      author: 'Jeremy Walker',
      pub_year: 2015
    };
  }
});
//create new instance of the book
var currentBook = new Book;

//create a template and render function for a simple view on the book
var BookView = Backbone.View.extend({
  //simple template for the currentBook
  template: _.template("Author: <%= author %>, \
                       Title: <%= title %>,  \
                       Year Published: <%= pub_year %> "),
  //render the currentBook
  render: function(){
    var $targetElem = $('#currentBook');
    $targetElem.html(this.template({author: currentBook.attributes.author,
                                    title: currentBook.attributes.title,
                                    pub_year: currentBook.attributes.pub_year}));
    return this;
  }
})
//new instance of a book view and an initial render function
var showBook = new BookView;
showBook.render();
//when the update button on the dom is pressed - three ajax calls are started,
//when all three complete the render function is run
//count var just to show all three functions return before the done function fires
var count = 0;
function update(){
  $.when(newAuthor(), newTitle(), newYear()).done(function(){
    console.log(count);
    count = 0;
    showBook.render();
  })
}
//ajax call for a new author
var newAuthor = function(){
  return $.ajax({
    method: 'GET',
    url: '/newauth'
    }).done(function(res){
      currentBook.attributes.author = res;
      count++;
    });
};
//ajax call for a new title
var newTitle = function(){
  return $.ajax({
    method: 'GET',
    url: '/newtitle'
    }).done(function(res){
      currentBook.attributes.title = res;
      count++;
    });
};
//ajax call for a new year
var newYear = function(){
   return $.ajax({
    method: 'GET',
    url: '/newyear'
  }).done(function(res){
      currentBook.attributes.pub_year = res;
      count++;
  });
}
