# Web server skeleton

this skeleton is named MEN due to following used:
MariaDB + Expressjs + Nodejs

## Dependencies

This skeleton serves to rapidly build up web server based on these things:

Following tools are used:
- Javascript (fast)
- Node.js (non-blocking IO, async request)
- Expressjs (backend focus, good routing)
- MariaDB (general purpose RDBMS)

Feature of this skeleton consists:
- Auto Routing import
- CORS protection
- Database migration script
- Categorized logging
- Bearer Authentication
- General response handler

Following are required to set up the environment :
- docker 
- docker-compose
- npm

## Assumptions

- MacOS is used for local development.
  - Dockerfile-dev and docker-compose-dev.yml is used
  - variable using developing data
- Ubuntu is used for production, due to Docker has better support.
  - Dockerfile and docker-compose.yml is used

## Behaviour

- input payload must be JSON-formatted
- response content format:
```
{
  "code": <same as HTTP code, but can be others, as integer>,
  "success": True || False,
  "payload": <object>
}
```

## Development

### Local development

```bash
npm install
```
Updates `package-lock.json` and `node_modules` which according to the `package.json` mentioned.

```bash
npm install --save <package-name>
```
Installs package and updates `package-lock.json`, `node_modules` and `package.json`.  

```bash
docker-compose -f ./docker-compose-dev.yml up --build
```
The web server is restarted when any Dockerfile-dev content updated.

The database migration must be run after the docker compose up.
This step only needed in local environment.
```bash
docker exec api-webserver npx sequelize db:migrate
docker exec api-webserver npx sequelize <sequelize CLI operation >
```

#### Install with package-lock.json

Sometimes install with locked version of package is needed.
```bash
npm ci
```
Remark: some flags e.g. `--no-optional` works in `npm install` does not work here.

### Production environment

```bash
docker-compose down
git pull
docker-compose up -d --build
```

## File structure

```
├── Dockerfile      # docker environment for production
├── Dockerfile-dev  # docker environment for local development
├── README.md       # this file
├── app.js          # application setting
├── bin
│   └── www   # entrypoint of nodejs, some of the webserver setting
├── configuration
│   ├── constants.js    # immutable constants between environments
│   ├── environment.js  # environment dependent variables
│   └── <other file>    # factored data with same category
├── controllers   # defines the function flow
├── docker-compose-dev.yml  # docker environment for local development
├── docker-compose.yml      # docker environment for production
├── errors  # hand-made errors stays here
├── helper  # utility functions
├── logs    # log files keeps here
├── middlewares   # expressjs middlewares, which are handling requests
│   ├── bearer-authentication.js
│   ├── cors.js
│   ├── error-response-handler.js
│   ├── request-logger.js
│   └── response-handler.js
├── migrations  # sequelize migration scripts
├── models  # data access objects
│   └── index.js  # required by sequelize-cli, application model should not require this file
├── package-lock.json   # package with static version of packages 
├── package.json  # JS package dependencies
├── repositories  # complex logic related to third party services
├── routes        # defines the endpoints of the application, and the controllers they passes the requests to
│   └── _bootstrap.js   # parses all modules in the folders and wraps into one component
└── services    # logic stays here
```

## TODO

- Configuration variables implementation depends on environment
- CI/CD implementation
- database.js removal
