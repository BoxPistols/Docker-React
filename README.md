# Docker React

- [Example Youtube](https://youtu.be/8UVRsJnD3Cc)
- [Docker 上に React+TypeScript の環境を構築](https://saitoblog.page/posts/2020-11-15)

---

## Setting

### Docker Work Space

- Create

  - `docker-compose build`
  - `docker-compose run --rm frontend sh -c 'npx create-react-app frontend --template typescript'`

- Move

  - `docker-compose up -d`
  - `docker-compose ps`

- Work in docker

  - `docker-compose exec frontend sh`

---

## Test ESLint

### install ESLint

- install in frontend/
  - `npx eslint --init`
    - Select One
      - > How would you like to use ESLint?
        - To check syntax, find problems, and enforce code style
      - > What type of modules does your project use?
        - JavaScript modules (import/export)
      - > Which framework does your project use?
        - React
      - > Does your project use TypeScript?
        - Yes
      - > Where does your code run?
        - Browser
      - > How would you like to define a style for your project?
        - Use a popular style guide
      - > What format do you want your config file to be in?
        - JavaScript
      - > Which style guide do you want to follow?
        - Airbnb: https://github.com/airbnb/javascript
      - > What format do you want your config file to be in?
        - JavaScript
      - > Would you like to install them now with npm?
        - Yes

### Move ESLint

- Lint Check
  - `npx eslint --fix src/**/*.ts*`
- Has error

  - `yarn add --dev eslint eslint-plugin-jest`
  - .eslintrc.js
    - add plugin 'jest'
    - add ENV "jest/globals": true
  - `yarn add -D eslint prettier eslint-config-prettier`

- ... And More ...
    - https://qiita.com/sprout2000/items/ee4fc97f83f45ba1d227
    - http://watanabeyu.blogspot.com/2019/02/typescript-eslinttypescriptlinteslintai.html

- yarn add -D eslint-import-resolver-webpack

---

### With Sider

- 3rdParty Tool
- Not Use...

- https://sider.review/dashboard
- https://sider.review/gh/repos/354124010/pulls/1#tools

- `npm install eslint-plugin-testing-library@latest --save-dev`

---

## Base Setting Fix

- Local React
- Link ↑↓
- Docker React
- ESLint
- Prettier

commit `b6f3bae167f552b46b57185ecba0bc29a1b80eeb`

---

## Material-UI

https://material-ui.com/ja/

