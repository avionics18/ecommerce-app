import SocialIcons from "./SocialIcons";
import AccountDropdown from "./AccountDropdown";
import LoginBtn from "@ecomo/components/LoginBtn/LoginBtn";

const TopNav = ({ isLogedIn = false } = {}) => {
  return (
    <div className="bg-yellow-600 py-3">
      <div className="container m-auto">
        <div className="flex items-center justify-between">
          <SocialIcons />
          {isLogedIn ? (
            <AccountDropdown />
          ) : (
            <LoginBtn
              btnText="Login or Sign Up"
              btnClasses="text-yellow-900 hover:text-yellow-200 focus:text-yellow-200 font-bold bg-yellow-200 hover:bg-yellow-900 focus:bg-yellow-900 hover:shadow rounded py-1 px-3 text-sm transition-all select-none"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TopNav;
