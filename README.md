This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

[Live demo](https://airporttogo.lirenxn.now.sh)

## Local development build
`git clone https://github.com/congcongcong250/AirportToGO.git`
`yarn now`
`yarn start`

Frontend app: http://localhost:3006
Backend api: http://localhost:3000/api

**Note:** the backend is hosted as lambda function with `now`, the dev build(`now dev`) is not stable as it could trigger infinite hot reloading.

## Test
`yarn test`

## Storybook
`yarn storybook`
http://localhost:9009

## Folder structure
/api
  holds the lambda functions in typescript
/src
  /components
    holds all the components
  /store
    redux configurations and type
  /actions
    redux actions 
  /reducers
    redux reducers
  /sagas
    redux-sagas side effects
  /utils
    utility functions
  /stories
    storybook stories

## Deployment
This project is deployed on zeit using typescript lambda as backend.

It looks simple at first, putting everything as seperate modules into single folder. However, as a monorepo, this simple structure is not the best way to maintain and test different parts locally, as they would reference to each other while building under different config.

  
