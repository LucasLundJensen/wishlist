import { NavLink } from "react-router-dom";
import Icon, { IconType } from "../Icon";

interface Props {
  text: string;
  icon: IconType;
  link: string;
}

function SidebarLink(props: Props) {
  return (
    <NavLink
      to={props.link}
      className={({ isActive }) => (isActive ? "rounded-md bg-dark-500" : "")}
    >
      <div className="flex flex-row items-center gap-3 px-2.5 py-1.5 rounded-md hover:bg-dark-500">
        <Icon type={props.icon} className="h-5 w-5" />
        <p>{props.text}</p>
      </div>
    </NavLink>
  );
}

export default SidebarLink;
