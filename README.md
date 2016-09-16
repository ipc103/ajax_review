# Build and HTML/JS app that hits our API using AJAX and renders the results on the page.

## CHALLENGE

+ Add an event handler that overrides the default action on our cat form.
+ submit an AJAX post request to our catbook api with params that look like this:
```
{
  cat:{
    name: 'Shadow',
    weight: 8,
    temperament: 'shy',
    breed: 'Tortoiseshell'
  }
}
```
+ It should create the new cat in the database.
+ When the request is finished, take our response and append it to the HTML
