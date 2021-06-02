import React, { useState, useEffect } from 'react'
import { Button } from '../../globalStyles';

import {
    Nav,
    NavContainer,
    NavLogo,
    MenuIcon,
    NavMenu,
    NavItem,
    NavLink,
    NavBtnLink,
    IconLogo,
    Bars,
    Times,
} from './NavbarElements';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <Nav>
                <NavContainer>
                    <NavLogo to='/' onClick={closeMobileMenu}>
                        notAnotherAdobo
                         <IconLogo />
                    </NavLogo>
                    <MenuIcon onClick={handleClick}>
                        {click ? <Times /> : <Bars />}
                    </MenuIcon>
                    <NavMenu onClick={handleClick} click={click} activeStyle>
                        <NavItem>
                            <NavLink to='/'>
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/about'>
                                About
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/contact'>
                                Contact
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to='/recipes'>
                                Recipes
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            {button ? (
                                <NavBtnLink to='/subscribe'>
                                    <Button fontBig>
                                        Subscribe
                                  </Button>
                                </NavBtnLink>
                            ) : (
                                <NavBtnLink to='/subscribe'>
                                    <Button big>
                                        Subscribe
                                    </Button>
                                </NavBtnLink>
                            )}

                        </NavItem>
                    </NavMenu>
                </NavContainer>
            </Nav>
        </>
    )
}

export default Navbar
