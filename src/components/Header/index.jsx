import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react'
import { ThemeContext } from '../ThemeProvider';
import headerStyle from './../../styles/Header.module.css'
export default function Header() {
    const { toggle } = useContext(ThemeContext);

    return (
        <div className={headerStyle.header} >
            <div className={headerStyle.headerMain}>
                <h3>
                    Where in the world?
                </h3>
                <div className={headerStyle.toggleMode}>
                    <div className={headerStyle.faMoonIcon} >
                        <FontAwesomeIcon icon={faMoon} />
                    </div>
                    <h5 onClick={toggle} className={headerStyle.modeTitel}>
                        Dark Mode
                    </h5>
                </div>
            </div>
        </div>
    )
}
