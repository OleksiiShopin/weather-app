import SidebarItem from './SidebarItem';

type ItemType = {
    key: string,
    to: string,
    icon: string,
    label: string,
}


const Sidebar = () => {
    const items: ItemType[] = [
         { key: 'weather', to: '/' , icon: '☀️', label: 'Weather' },
        // { key: 'cities', icon: '🏙️', label: 'Cities' },
    ]

    return (
        <aside className="sidebar">
            {items.map(({key, to, icon, label}) => {
                return <SidebarItem
                    key={key}
                    to={to}
                    icon={icon}
                    label={label}
                />
            })}
        </aside>
    )
}

export default Sidebar;