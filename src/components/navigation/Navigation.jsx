import { Navlink } from 'react-router-dom';
import css from './Navigation.module.css';
import clsx from 'clsx';

function Navigation() {
    const buildLinkClass = ({ isActive }) => {
        return clsx(css.link, isActive && css.active);
    };
    return (
        <header>
            <nav className={css.navigation}>
                <Navlink to="/" className={buildLinkClass}>Home</Navlink>
            </nav>
        </header>
    )
}
export default Navigation;