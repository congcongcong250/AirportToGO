# Airport to go

A app listing all qantas airports.

## Overview

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

[Live demo](https://airporttogo.lirenxn.now.sh)

**Tech:** React, Typscript, styled-component, Storybook, Jest, Enzyme, Now

## Getting Started

### Prerequsites

- Git
- Node >= 10
- yarn

### Installation
- `git clone https://github.com/congcongcong250/AirportToGO.git` 
- `yarn`

### Running locally

- `yarn now` 
- `yarn start`
- Open http://localhost:3006 in any browser

Frontend app: http://localhost:3006
Backend api: http://localhost:3000/api

**Note:**

1. The backend is hosted as lambda function with `now`, the dev build(`now dev`) is not stable as it could trigger infinite hot reloading. Be patient at the loading screen, data will be back in any minute.

2. There is also a frontend hosting at http://localhost:3000 by `now dev`, due to the above issue. do not use it

## Test

> `yarn test`

**Note:** It does unit test, enzyme component tests, and come reducer behavior test

## Storybook

> `yarn storybook`
> Open http://localhost:9009 in any browser

## Folder structure

+- /api
| holds the lambda functions in typescript
+- /src
| +- /components
| | holds all the components
| +- /store
| | redux configurations and type
| +- /actions
| | redux actions
| +- /reducers
| | redux reducers
| +- /sagas
| | redux-sagas side effects
| +- /utils
| | utility functions
| +- /stories
| | storybook stories
| +- /**tests**
all the tests

## Deployment

This project is deployed on zeit using typescript lambdas as backend.
