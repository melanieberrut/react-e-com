# react-e-com

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

# Using Git Workflow

Work on a feature/branch, then once completed merge/rebase with _develop_ branch. Once we are satisfied with all the work on develop, we can move the work into master for release. (see http://nvie.com/posts/a-successful-git-branching-model/)
No newline at end of file

# Routing

All the new routes should be defined in App.js which is a context for entire app.

Routing use done using [React Router](https://reacttraining.com/react-router/)
, some [Examples](https://reacttraining.com/react-router/web/example/basic)

# API/Endpoints

Restful API generated using mockapi.io, it will help us to make AJAX calls to retrive data such us products list, product details or user info
Listed of endpoints can be found in _endpoints.js_

# Testing
To test async calls we use `__mocks__` directory.  
Run test coverage `npm run test -- --coverage`
