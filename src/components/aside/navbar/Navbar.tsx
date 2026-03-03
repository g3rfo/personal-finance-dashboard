import {
  IconLayoutDashboard,
  IconReportMoney,
  IconFolder,
  IconWallet,
  IconDeviceAnalytics,
  IconSettings,
} from "@tabler/icons-react";
import NavbarLink from "./NavbarLink";
import Outline from "../../ui/Outline";

function Navbar() {
  return (
    <>
      <Outline className="p-4 flex-1 items-start">
        <nav className="w-full flex flex-col gap-2">
          <NavbarLink path="/dashboard">
            <IconLayoutDashboard stroke={1.5} />
            Dashboard
          </NavbarLink>
          <NavbarLink path="/transactions">
            <IconReportMoney stroke={1.5} />
            Transactions
          </NavbarLink>
          <NavbarLink path="/categories">
            <IconFolder stroke={1.5} />
            Categories
          </NavbarLink>
          <NavbarLink path="/budgets">
            <IconWallet stroke={1.5} />
            Budgets
          </NavbarLink>
          <NavbarLink path="/analytics">
            <IconDeviceAnalytics stroke={1.5} />
            Analytics
          </NavbarLink>
          <NavbarLink path="/settings">
            <IconSettings stroke={1.5} />
            Settings
          </NavbarLink>
        </nav>
      </Outline>
    </>
  );
}

export default Navbar;
