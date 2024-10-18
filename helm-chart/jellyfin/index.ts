import * as k8s from "@pulumi/kubernetes";

const namespace = new k8s.core.v1.Namespace("jellyfin", {
  metadata: {
    name: "jellyfin",
  },
});

const deployment = new k8s.yaml.ConfigFile(
  "jellyfin-deployment",
  {
    file: "helm-chart/jellyfin/deployment.yaml",
  },
  { dependsOn: namespace }
);

const service = new k8s.yaml.ConfigFile(
  "jellyfin-service",
  {
    file: "helm-chart/jellyfin/service.yaml",
  },
  { dependsOn: deployment }
);

new k8s.yaml.ConfigFile(
  "jellyfin-ingress",
  {
    file: "helm-chart/jellyfin/ingress.yaml",
  },
  { dependsOn: service }
);
