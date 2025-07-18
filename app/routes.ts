import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("api/contact", "routes/api/contact.tsx"),
] satisfies RouteConfig;