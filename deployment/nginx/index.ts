import * as k8s from "@pulumi/kubernetes";

const appLabels = { app: "nginx" };

new k8s.apps.v1.Deployment("nginx", {
  spec: {
    selector: { matchLabels: appLabels },
    replicas: 1,
    template: {
      metadata: { labels: appLabels },
      spec: {
        containers: [
          { name: "nginx", image: "nginx", ports: [{ containerPort: 80 }] },
        ],
      },
    },
  },
});

new k8s.core.v1.Service("nginx", {
  spec: {
    ports: [
      {
        port: 80,
        protocol: "TCP",
      },
    ],
    selector: {
      app: "nginx",
    },
  },
  metadata: {
    name: "nginx",
    labels: {
      app: "nginx",
    },
  },
});

new k8s.yaml.ConfigFile("nginx-ingress", {
  file: "deployment/nginx/ingress.yaml",
});
