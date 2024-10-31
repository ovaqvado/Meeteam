import logo from '../../assets/images/navbar_logo.svg'
import styles from './Navbar.module.scss'

export const Navbar = () => {
	return (
		<nav className={styles.navbar}>
			<div className={styles.logo_box}>
				<img className={styles.logo} src={logo} alt='logo' />
			</div>
			<ul className={styles.menu}>
				<li className={styles.menu_list}>
					<img className={styles.menu_list_img} src='' alt='Configuration' />
					<span className={styles.menu_list_text}>Configuration</span>
				</li>
				<li className={styles.menu_list}>
					<img className={styles.menu_list_img} src='' alt='Dossier' />
					<span className={styles.menu_list_text}>Dossier</span>
				</li>
				<li className={styles.menu_list}>
					<img className={styles.menu_list_img} src='' alt='Projet' />
					<span className={styles.menu_list_text}>Projet</span>
				</li>
				<li className={styles.menu_list}>
					<img className={styles.menu_list_img} src='' alt='Direction' />
					<span className={styles.menu_list_text}>Direction Technique</span>
				</li>
				<li className={styles.menu_list}>
					<img className={styles.menu_list_img} src='' alt='Protection' />
					<span className={styles.menu_list_text}>Protection</span>
				</li>
			</ul>
		</nav>
	)
}
