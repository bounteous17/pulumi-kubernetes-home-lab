import { name as nginxDeployment } from "./deployment/nginx";
import { name as traefikHelm } from "./helm/traefik";

export default { deployments: { nginxDeployment }, helm: { traefikHelm } };
