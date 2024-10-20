import * as k8s from "@pulumi/kubernetes";

const deployment = new k8s.yaml.ConfigFile("qbittorrent-deployment", {
  file: "helm-chart/qbittorrent/deployment.yaml",
});

const service = new k8s.yaml.ConfigFile(
  "qbittorrent-service",
  {
    file: "helm-chart/qbittorrent/service.yaml",
  },
  { dependsOn: deployment }
);

new k8s.yaml.ConfigFile(
  "qbittorrent-ingress",
  {
    file: "helm-chart/qbittorrent/ingress.yaml",
  },
  { dependsOn: service }
);
