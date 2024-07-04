# Commands

### Jhipster

- Create app:
  ```bash
  jhispter
  ```
- Start jhispter:
  ```bash
  ./mvnw
  ```

### Tests

- Run Unit tests:
  ```bash
  ./mvnw test
  ```
- Run E2E tests;
  ```bash
  npx cypress open
  # or
  npx cypress run
  ```

### Docker Deploy

- Generate Docker files
  ```bash
  jhipster docker-compose
  ```
- Build Docker image
  ```bash
  ./mvnw -ntp -Pprod verify jib:dockerBuild
  ```
- Run container
  ```bash
  docker-compose up -d
  ```

### Ionic PWA

- Launch PWA on Pred enviroment, since service workers only work there
  ```bash
  ng build --configuration production
  ng serve --port 8100
  ```
