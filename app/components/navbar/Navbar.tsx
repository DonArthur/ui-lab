import Link from 'next/link';
import styles from './navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Link href="#">
                LOGO
            </Link>
            <Link href="#" className='float-right'>
                MENU
            </Link>
        </nav>
    )
}

export default Navbar