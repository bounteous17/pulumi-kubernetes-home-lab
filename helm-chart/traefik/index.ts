import * as k8s from "@pulumi/kubernetes";

new k8s.helm.v3.Release("traefik", {
  chart: "traefik",
  version: "23.1.0",
  forceUpdate: true,
  repositoryOpts: {
    repo: "https://traefik.github.io/charts",
  },
});

