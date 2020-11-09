import React from 'react';

import { Navbar, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default function NavbarMenu() {

    return (
        <div>
            <Navbar color="light" light expand="md">
                <Nav navbar>
                    <NavItem>
                        <NavLink href="/">Health Time</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="">Agendar Consulta</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="">Editar Consulta</NavLink>
                    </NavItem>

                    {/* <UncontrolledDropdown setActiveFromChild>
                        <DropdownToggle tag="a" className="nav-link" caret>
                            Dropdown
          </DropdownToggle>
                        <DropdownMenu>
                            <DropdownItem tag="a" href="/blah" active>Link</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown> */}
                </Nav>
            </Navbar>
        </div>
    );
}