import * as k8s from "@pulumi/kubernetes";

new k8s.yaml.ConfigFile("cert-manager-issuer", {
  file: "manifest/cert-manager/issuer.yaml",
});

new k8s.yaml.ConfigFile("cert-manager-certificate", {
  file: "manifest/cert-manager/certificate.yaml",
});

new k8s.yaml.ConfigFile("cert-manager-certificate-qbittorrent", {
  file: "manifest/cert-manager/certificate-qbittorrent.yaml",
});
