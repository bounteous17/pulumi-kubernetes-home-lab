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
