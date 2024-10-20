import * as k8s from "@pulumi/kubernetes";

const release = new k8s.helm.v3.Release("cert-manager", {
  name: "cert-manager",
  chart: "cert-manager",
  version: "1.15.3",
  namespace: "cert-manager",
  createNamespace: true,
  repositoryOpts: {
    repo: "https://charts.jetstack.io",
  },
  values: {
    installCRDs: true,
  },
});

new k8s.yaml.ConfigFile(
  "cert-manager-production-issuer",
  {
    file: "helm-chart/cert-manager/production-issuer.yaml",
  },
  {
    dependsOn: release,
  }
);

new k8s.yaml.ConfigFile(
  "cert-manager-staging-issuer",
  {
    file: "helm-chart/cert-manager/staging-issuer.yaml",
  },
  {
    dependsOn: release,
  }
);
