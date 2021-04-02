# Docker React

- [Example Youtube](https://youtu.be/8UVRsJnD3Cc)
- [Docker上にReact+TypeScriptの環境を構築](https://saitoblog.page/posts/2020-11-15)

---

## Setting

- Create
  - docker-compose build
  - docker-compose run --rm frontend sh -c 'npx create-react-app frontend --template typescript'
- Move
  - docker-compose up -d
  - docker-compose ps
- in docker:
  - docker-compose exec frontend sh
