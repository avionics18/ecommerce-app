import { useState } from "react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light-border.css";
import "tippy.js/animations/scale-subtle.css";
import { Icon } from "@iconify/react";

const AccountDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="account-dropdown-wrapper">
      <Tippy
        visible={showDropdown}
        onClickOutside={() => setShowDropdown(false)}
        offset={[0, 10]}
        animation="scale-subtle"
        theme="light-border"
        placement="bottom-end"
        interactive={true}
        content={
          <ul className="w-44 py-1">
            <li className="p-2 flex items-center rounded border border-transparent hover:border-gray-200 hover:bg-yellow-50 hover:text-yellow-900 hover:cursor-pointer transition-all">
              <Icon icon="ion:id-card-outline" height="20" />
              <span className="ml-2">Profile</span>
            </li>
            <li className="p-2 flex items-center rounded border border-transparent hover:border-gray-200 hover:bg-yellow-50 hover:text-yellow-900 hover:cursor-pointer transition-all">
              <Icon icon="icon-park-outline:transaction-order" height="20" />
              <span className="ml-2">Orders</span>
            </li>
            <li className="p-2 flex items-center rounded border border-transparent hover:border-gray-200 hover:bg-yellow-50 hover:text-yellow-900 hover:cursor-pointer transition-all">
              <Icon icon="tabler:logout" height="20" />
              <span className="ml-2">Logout</span>
            </li>
          </ul>
        }
      >
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="flex items-center text-yellow-200 hover:text-white focus:text-white font-bold transition-all"
        >
          <Icon icon="carbon:user-avatar-filled-alt" height="20" />
          <span className="ml-2 mr-1">My Account</span>
          <Icon icon="ant-design:caret-down-outlined" />
        </button>
      </Tippy>
    </div>
  );
};

export default AccountDropdown;
