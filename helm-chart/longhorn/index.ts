import * as k8s from "@pulumi/kubernetes";

new k8s.helm.v3.Release("longhorn", {
  chart: "longhorn",
  namespace: "longhorn-system",
  version: "1.7.1",
  createNamespace: true,
  repositoryOpts: {
    repo: "https://charts.longhorn.io",
  },
});

// new k8s.yaml.ConfigFile("longhorn-ingress", {
//   file: "helm-chart/longhorn/ingress.yaml",
// });

// new k8s.yaml.ConfigFile("longhorn-ssl-certificate", {
//   file: "helm-chart/longhorn/ssl-certificate.yaml",
// });
