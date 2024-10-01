import * as k8s from "@pulumi/kubernetes";

const traefikHelm = new k8s.helm.v3.Chart("traefik", {
  chart: "traefik",
  version: "32.0.0",
  fetchOpts: {
    repo: "https://traefik.github.io/charts",
  },
});

export const name = traefikHelm;
