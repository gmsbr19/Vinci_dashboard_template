import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

const SidebarDropdown = ({ showName }) => {
  return (
    <UncontrolledDropdown
      className={`me-2 ${!showName && "align-self-center"}`}
      direction="up"
    >
      <DropdownToggle className="drop-toggle" caret>
        {showName && <strong>username</strong>}
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Configurações</DropdownItem>
        <DropdownItem>Perfil</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>Sair</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default SidebarDropdown;
