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

- install
  - npx eslint --init
