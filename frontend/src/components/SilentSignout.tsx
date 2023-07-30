import manager from "../core/UserManager";

function SilentSignout(props: Props) {
  manager.signoutRedirectCallback().then(() => {
    manager.clearStaleState();
    window.location.replace("/");
  });
  return <>Spinner!</>;
}

export default SilentSignout;
