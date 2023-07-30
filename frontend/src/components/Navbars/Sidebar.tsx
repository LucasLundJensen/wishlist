import { Outlet } from "react-router-dom";
import Logo, { LogoSize } from "../Logo";
import Divider from "../Divider";
import SidebarLink from "./SidebarLink";
import Icon, { IconType } from "../Icon";
import UserIcon from "../User/UserIcon";
import UserContext from "../../core/UserContext";
import { useEffect, useState } from "react";
import manager from "../../core/UserManager";
import { User } from "oidc-client-ts";

function Sidebar() {
  const [user, setUser] = useState<User | undefined>();
  const [isSettingsVisible, setIsSettingsVisible] = useState<boolean>(false);

  useEffect(() => {
    async function getUser() {
      const user = await manager.getUser();
      if (user) {
        setUser(user);
      }
    }
    getUser();
  }, []);

  return (
    <UserContext.Provider value={user}>
      <div className="flex flex-row h-full">
        <div className="flex flex-col lg:w-1/4 xl:w-1/6 bg-dark-800 h-full px-4">
          <div className="text-center my-4">
            <Logo size={LogoSize.LARGE} />
          </div>
          <Divider />
          <div className="flex flex-col mt-1 gap-2.5">
            <SidebarLink
              link="/events"
              text="Events"
              icon={IconType.CALENDAR}
            />
            <SidebarLink link="/gifted" text="Gifted" icon={IconType.GIFT} />
            <SidebarLink
              link="/wishlists"
              text="Wishlists"
              icon={IconType.LIST}
            />
          </div>
          <button
            onClick={() => setIsSettingsVisible(!isSettingsVisible)}
            className="flex flex-row items-center gap-2 mt-auto mb-2 px-2.5 py-1.5 rounded-md hover:bg-dark-500"
          >
            <UserIcon user={user} />
            <p>{user?.profile.email}</p>
            <Icon className="w-6 h-6 ml-auto" type={IconType.DOTS} />
          </button>
        </div>
        <Outlet />
      </div>
    </UserContext.Provider>
  );
}

export default Sidebar;
