# pulumi-kubernetes-home-lab

This repository contains the configurations, manifests, and scripts used to deploy various services on my self-hosted, bare-metal Kubernetes cluster. The services include web applications, databases, and other infrastructure components essential for running a scalable and resilient environment.

By using this repository, you can see how I manage workloads, apply custom configurations, and automate deployments on a Kubernetes cluster running on physical hardware. This setup emphasizes flexibility, self-reliance, and direct control over infrastructure. Contributions and suggestions are welcome!

You can modify or add more details if necessary!

## services

- qbittorrent
- jellyfin
- longhorn
- cert-manager
- traefik
- immich

# How to deploy

Set your default k8s context by running:

```bash
kubectl config use-context <context-name>
```

Deploy all the services from above:

```bash
pulumi up
```

# Service considerations

## jellyfin
The deployment uses `nodeSelector` strategy for being deployed on nodes using an Intel GPU. The specific driver is being mounted from the `volumeMounts` under the original location `/dev/dri/renderD128`