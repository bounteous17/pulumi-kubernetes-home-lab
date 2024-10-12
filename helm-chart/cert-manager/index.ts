import * as k8s from "@pulumi/kubernetes";

new k8s.helm.v3.Release("cert-manager", {
  chart: "cert-manager",
  version: "1.15.3",
  repositoryOpts: {
    repo: "https://charts.jetstack.io",
  },
  values: {
    installCRDs: true
  }
});

new k8s.yaml.ConfigFile("cert-manager-issuer", {
  file: "helm-chart/cert-manager/issuer.yaml",
});
