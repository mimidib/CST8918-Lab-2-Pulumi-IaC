import * as pulumi from "@pulumi/pulumi";
import * as docker from "@pulumi/docker";

// Get configuration values
const config = new pulumi.Config();
const frontendPort = config.requireNumber("frontendPort");
const backendPort = config.requireNumber("backendPort");
const mongoPort = config.requireNumber("mongoPort");

const stack = pulumi.getStack();

// Pull the backend image
const backendImageName = "backend";
const backend = new docker.RemoteImage(`${backendImageName}Image`, {
  name: "pulumi/tutorial-pulumi-fundamentals-backend:latest",
});

// Pull the frontend image
const frontendImageName = "frontend";
const frontend = new docker.RemoteImage(`${frontendImageName}Image`, {
  name: "pulumi/tutorial-pulumi-fundamentals-frontend:latest",
});

// Pull the MongoDB image
const mongoImage = new docker.RemoteImage("mongoImage", {
  name: "pulumi/tutorial-pulumi-fundamentals-database:latest",
});

// Create a Docker network
const network = new docker.Network("network", {
  name: `services-${stack}`,
});
