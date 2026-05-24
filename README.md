# my-first-app

A Pulumi project that spins up a 3-container Docker app: frontend, backend, and MongoDB.

## Prerequisites

- [Node.js](https://nodejs.org/) (v16+)
- [Pulumi CLI](https://www.pulumi.com/docs/install/)
- [Docker](https://www.docker.com/) (running locally)

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Log in to Pulumi:
   ```bash
   pulumi login
   ```
   This uses [Pulumi Cloud](https://app.pulumi.com) (free account). To use local state instead, run `pulumi login --local`.

3. Select or create the `dev` stack:
   ```bash
   pulumi stack select dev --create
   ```

## Configure

The `Pulumi.dev.yaml` file already has all required config values:

| Key             | Value                       |
|-----------------|-----------------------------|
| frontendPort    | 3001                        |
| backendPort     | 3000                        |
| mongoPort       | 27017                       |
| mongoHost       | mongodb://mongo:27017       |
| database        | cart                        |
| nodeEnvironment | development                 |
| protocol        | http://                     |

If you need to set a value manually:
```bash
pulumi config set my-first-app:frontendPort 3001
```

## Deploy

```bash
pulumi up
```

Review the preview and confirm with `yes`. Pulumi will pull the Docker images and start the containers.

## Access the App

Once deployed, open your browser at:

```
http://localhost:3001
```

## Tear Down

To stop and remove all containers:
```bash
pulumi destroy
```

To also remove the stack and its history entirely:
```bash
pulumi stack rm dev
```
