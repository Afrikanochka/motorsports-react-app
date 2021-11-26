import React from 'react';
import sprite from '../../images/sprite.svg';
import '../../styles/components/header.scss';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
            <svg className="logoSvg">
               <use href={sprite + "#icon-logo"} />
            </svg>
            </div>
            <div className="navigation">
            <ul className="navigationList">
               <li className="navigationItem">
                   <a href="inventory" className="navigationLink">Inventory</a>
               </li>
               <li className="navigationItem">
                   <a href="financing " className="navigationLink">Financing </a>
               </li>
               <li className="navigationItem">
                   <a href="contacts" className="navigationLink">Contacts</a>
               </li>
            </ul>
            <ul className="socialList">
                <li className="socialItem">
                  <svg className="socialSvgF">
                    <use href={sprite + "#icon-facebook"} />
                  </svg>
                </li>
                <li className="socialItem">
                  <svg className="socialSvgIn">
                    <use href={sprite + "#icon-instagram"} />
                  </svg>
                </li>
            </ul>
            </div>
        </header>
    );
}

export default Header;