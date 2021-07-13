import React, { useState } from 'react'
import {
    Collapse,
    Navbar as ReactNavbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
  } from "reactstrap";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false)

	const toggle = ()=> setIsOpen(!isOpen)
	return (
		<div>
			<ReactNavbar color='light' light expand='md'>
				<NavbarBrand tag={Link} to='/'>
				 freeman's app
				</NavbarBrand>
			</ReactNavbar>
		</div>
	)
}

export default Navbar
