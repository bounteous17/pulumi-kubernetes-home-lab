import * as k8s from "@pulumi/kubernetes";

const nginx = new k8s.yaml.ConfigFile("nginx", {
  file: "manifest/traefik/nginx.yaml",
});

export default {
  nginx,
}