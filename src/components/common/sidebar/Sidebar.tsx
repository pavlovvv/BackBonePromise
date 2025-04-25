import { FC, memo } from 'react';
import styles from './Sidebar.module.scss';
import logoSrc from '../../../../public/logo-1.svg';
import arrowDownIcon from './assets/Small arrow_Down.svg';
import ProfileIconSrc from './assets/user-circle.svg';
import DashboardIconSrc from './assets/home-2.svg';
import SubscriptionIconSrc from './assets/credit-card-check.svg';
import ShoppingBagSrc from './assets/shopping-bag.svg';
import ServicesIconSrc from './assets/help.svg';

interface NavItemConfig {
    key: string;
    label: string;
    icon: string;
    hasDropdown?: boolean;
}

interface NavItemProps {
    icon: string;
    label: string;
    hasDropdown?: boolean;
}

const navItems: NavItemConfig[] = [
    { key: 'profile', label: 'Profile settings', icon: ProfileIconSrc },
    { key: 'dashboard', label: 'Dashboard', icon: DashboardIconSrc, hasDropdown: true },
    { key: 'subscriptions', label: 'Subscriptions', icon: SubscriptionIconSrc },
    { key: 'buyMore', label: 'Buy more items', icon: ShoppingBagSrc, hasDropdown: true },
    { key: 'support', label: 'Support', icon: ServicesIconSrc, hasDropdown: true },
];

const NavItem: FC<NavItemProps> = memo(({ icon, label, hasDropdown = false }) => (
    <li className={styles.nav__item}>
        <a href="#" className={styles.nav__link}>
            <div className={styles.nav__icon}>
                <img src={icon} alt={`${label} icon`} />
            </div>
            <span className={styles.nav__label}>{label}</span>
            {hasDropdown && (
                <img
                    src={arrowDownIcon}
                    alt="Expand menu"
                    className={styles.nav__dropdown}
                />
            )}
        </a>
    </li>
));

const Sidebar: FC = () => (
    <nav className={styles.nav}>
        <div className={styles.nav__logo}>
            <img src={logoSrc} alt="BB Promise logo" />
        </div>

        <ul className={styles.nav__list}>
            {navItems.map(({ key: itemKey, icon, label, hasDropdown }) => (
                <NavItem
                    key={itemKey}
                    icon={icon}
                    label={label}
                    hasDropdown={hasDropdown}
                />
            ))}
        </ul>
    </nav>
);

export default Sidebar;
