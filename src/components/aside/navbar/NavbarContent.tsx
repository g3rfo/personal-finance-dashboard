import {
  IconDeviceAnalytics,
  IconFolder,
  IconLayoutDashboard,
  IconReportMoney,
  IconSettings,
  type IconProps,
} from "@tabler/icons-react";
import NavbarLink from "./NavbarLink";

function NavbarContent() {
  const navbarItems: {
    [key: string]: React.ForwardRefExoticComponent<
      IconProps & React.RefAttributes<SVGSVGElement>
    >;
  }[] = [
    { Dashboard: IconLayoutDashboard },
    { Transactions: IconReportMoney },
    { Categories: IconFolder },
    { Analytics: IconDeviceAnalytics },
    { Settings: IconSettings },
  ];

  return navbarItems.map((item) => {
    const [key, value] = Object.entries(item)[0];
    const IconComponent = value;

    return (
      <NavbarLink key={key.toLowerCase()} path={`/${key.toLowerCase()}`}>
        <IconComponent stroke={1.5} />
        {key}
      </NavbarLink>
    );
  });
}

export default NavbarContent;
