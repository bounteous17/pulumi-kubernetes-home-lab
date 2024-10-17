import * as k8s from "@pulumi/kubernetes";
import * as pulumi from "@pulumi/pulumi";

// const config = new pulumi.Config();
// const longhronPassword = config.require("longhronPassword");
// const longhronUsername = config.require("longhronUsername");

const release = new k8s.helm.v3.Release("longhorn", {
  chart: "longhorn",
  name: "longhorn",
  namespace: "longhorn-system",
  version: "1.7.1",
  createNamespace: true,
  repositoryOpts: {
    repo: "https://charts.longhorn.io",
  },
});

const ingressAuthMiddleware = new k8s.yaml.ConfigFile(
  "longhorn-ingress-auth-middleware",
  {
    file: "helm-chart/longhorn/ingress-middleware-auth.yaml",
  },
  { dependsOn: release }
);

new k8s.yaml.ConfigFile(
  "longhorn-ingress",
  {
    file: "helm-chart/longhorn/ingress.yaml",
  },
  { dependsOn: ingressAuthMiddleware }
);
