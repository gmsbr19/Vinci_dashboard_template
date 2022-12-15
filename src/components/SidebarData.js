import HomeIcon from "@mui/icons-material/Home";
import DataThresholdingIcon from "@mui/icons-material/DataThresholding";
import TableChartIcon from "@mui/icons-material/TableChart";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import PeopleIcon from "@mui/icons-material/People";

export const SidebarData = [
  {
    title: "Início",
    icon: <HomeIcon />,
    path: "/"
  },
  {
    title: "Painel",
    icon: <DataThresholdingIcon />,
    path: "/panel"
  },
  {
    title: "Dados",
    icon: <TableChartIcon />,
    path: "/data"
  },
  {
    title: "Produtos",
    icon: <ViewInArIcon />,
    path: "/products"
  },
  {
    title: "Clientes",
    icon: <PeopleIcon />,
    path: "/clients"
  }
];
