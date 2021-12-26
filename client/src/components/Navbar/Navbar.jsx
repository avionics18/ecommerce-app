import TopNav from "./TopNav/TopNav";
import MiddleNav from "./MiddleNav/MiddleNav";
import MainNav from "./MainNav/MainNav";

const Navbar = () => {
  return (
    <div className="navbar">
      <TopNav />
      <MiddleNav />
      <MainNav />
    </div>
  );
};

export default Navbar;
