import { Nav, NavItem, Navbar, NavLink } from "reactstrap";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../assets/img/vinci-logo.png";
import squarelogo from "../assets/img/squarelogo.png";
import { SidebarData } from "./SidebarData";
import { Link } from "react-router-dom";
import { useState } from "react";
import SidebarDropdown from "./SidebarDropwdown";

const Sidebar = () => {
  const [wPath, setwPath] = useState("/");
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const verifyLink = () => {
    setwPath(window.location.pathname);
  };

  return (
    <span>
      <Navbar className="d-sm-none bg-light p-3 justify-content-center">
        <div className="container d-flex align-items-center justify-content-between">
          <img src={logo} className="img-fluid mx-auto" width="130px" alt="" />
          {isMobile ? (
            <CloseIcon
              onClick={() => {
                setIsMobile(!isMobile);
                setOpen(false);
              }}
            />
          ) : (
            <MenuIcon
              onClick={() => {
                setIsMobile(!isMobile);
                setOpen(true);
              }}
            />
          )}
        </div>
      </Navbar>
      <Nav
        vertical
        pills
        className={`bg-light p-3 flex-column ${
          isMobile ? "d-flex pt-0 mobile-sidebar" : "d-none"
        } d-sm-flex`}
        style={{
          width: `${isMobile ? "100vw" : open ? "250px" : "87px"}`,
          height: `${isMobile ? "" : "100vh"}`
        }}
        onMouseEnter={() => {
          if (!isMobile) {
            setOpen(true);
          }
        }}
        onMouseLeave={() => {
          if (!isMobile) {
            setOpen(false);
          }
        }}
      >
        <img
          src={open ? logo : squarelogo}
          className="img-fluid align-self-center d-none d-sm-block"
          width={open ? "130px" : "34.22px"}
          alt=""
        />
        <hr />
        <NavItem
          onClick={() => {
            verifyLink();
            setIsMobile(false);
            if (!isMobile) setOpen(false);
          }}
          className={`${!isMobile ?? "flex-grow-1"} container-fluid p-0`}
        >
          {SidebarData.map((el, key) => {
            return (
              <Link to={el.path} key={key} className="text-decoration-none">
                <NavLink
                  active={wPath === el.path ? true : false}
                  className={`nav-link d-flex align-items-center ${
                    wPath === el.path ? "text-white" : "text-black"
                  }`}
                >
                  <span className={open && "me-2"}>{el.icon}</span>
                  {open && el.title}
                </NavLink>
              </Link>
            );
          })}
        </NavItem>
        <hr />
        <SidebarDropdown showName={open} />
      </Nav>
    </span>
  );
};

export default Sidebar;
