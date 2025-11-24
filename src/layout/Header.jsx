import DarkModeToggle from "../components/btn/DarkModeToggle";
import LogoTradimedika from "./components/LogoTradimedika";
const Header = () => {
  return (
    <header className="bg-light/80 flex h-20 w-full items-center justify-between border-b-2 border-dashed px-6 py-4 lg:w-2/3">
      <LogoTradimedika />
      <DarkModeToggle />
    </header>
  );
};

export default Header;
