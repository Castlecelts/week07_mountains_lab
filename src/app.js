const Mountains = require('./models/mountains.js');
const ErrorView = require('./views/error_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const mountains = new Mountains();
  mountains.getData();

  const mountainsContainer = document.querySelector('#mountains-container');

  const errorView = new ErrorView(mountainsContainer);
  errorView.bindEvents();



})