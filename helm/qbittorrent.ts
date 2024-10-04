import * as k8s from "@pulumi/kubernetes";

new k8s.helm.v3.Chart("qbittorrent", {
  chart: "qbittorrent",
  version: "0.2.0",
  fetchOpts: {
    repo: "https://bounteous17.github.io/helm-chart-qbittorrent/",
  },
});

