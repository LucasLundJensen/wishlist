import { User } from "oidc-client-ts";

interface Props {
  user?: User;
}

function UserIcon(props: Props) {
  return (
    <div className="flex justify-center items-center rounded-md bg-blue-500 w-8 h-8 uppercase">
      {props.user?.profile?.email?.charAt(0)}
    </div>
  );
}

export default UserIcon;
