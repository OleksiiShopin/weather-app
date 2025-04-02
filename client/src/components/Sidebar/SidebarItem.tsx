import { NavLink } from 'react-router-dom';

type item = {
    to: string,
    icon: string,
    label: string,
}

const SidebarItem = ({ to, icon, label } : item) => {
    return (
        <NavLink to={to} end className={({ isActive }) => `sideItems ${isActive ? 'active' : ''}`}>
            {`${icon}\n ${label}`}
        </NavLink>
    )
}

export default SidebarItem;