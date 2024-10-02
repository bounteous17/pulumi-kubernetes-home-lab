import * as k8s from "@pulumi/kubernetes";

const issuer = new k8s.yaml.ConfigFile("cert-manager-issuer", {
  file: "manifest/cert-manager/issuer.yaml",
});

const certificate = new k8s.yaml.ConfigFile("cert-manager-certificate", {
  file: "manifest/cert-manager/certificate.yaml",
});

export default {
  issuer,
  certificate
};
