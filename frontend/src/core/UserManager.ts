import { UserManager } from "oidc-client-ts";

const manager = new UserManager({
  client_id: "portal",
  redirect_uri: "http://localhost:5173/callback",
  authority: "http://localhost:4000/",
  scope: "openid email",
  loadUserInfo: true,
  post_logout_redirect_uri: "http://localhost:5173/callback/signout",
});

export default manager;
