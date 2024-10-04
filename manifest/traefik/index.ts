import * as k8s from "@pulumi/kubernetes";

new k8s.yaml.ConfigFile("nginx", {
  file: "manifest/traefik/nginx.yaml",
});

new k8s.yaml.ConfigFile("qbittorrent", {
  file: "manifest/traefik/qbittorrent.yaml",
});
