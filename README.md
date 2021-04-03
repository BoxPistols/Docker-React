# Docker React

- [Example Youtube](https://youtu.be/8UVRsJnD3Cc)
- [Docker 上に React+TypeScript の環境を構築](https://saitoblog.page/posts/2020-11-15)

---

## Setting

### Docker Work Space

- Create

  - docker-compose build
  - docker-compose run --rm frontend sh -c 'npx create-react-app frontend --template typescript'

- Move

  - docker-compose up -d
  - docker-compose ps

- Work in docker

  - docker-compose exec frontend sh

- remove .git on /usr/src/app
  - /usr/src/app # rm -rf .git

---

### ESLint

- install in frontend/
  - npx eslint --init
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
