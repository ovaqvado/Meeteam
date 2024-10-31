import { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/Logotype.svg'
import styles from './Auth.module.scss'

export const ForgotPass = () => {
	const [email, setEmail] = useState('')
	const [emailDirty, setEmailDirty] = useState(false)
	const [emailError, setEmailError] = useState(false)

	const handleBlur: React.ChangeEventHandler<HTMLInputElement> = e => {
		switch (e.target.name) {
			case 'email':
				setEmailDirty(true)
				setEmailError(!e.target.value.includes('@'))
				break
		}
	}

	return (
		<div className={styles.forgot_box}>
			<img className={styles.logo_forgot} src={logo} alt='logo' />
			<div className={styles.input_box}>
				<label
					className={`${styles.label} ${
						emailDirty && emailError ? styles.error_text : ''
					}`}
				>
					Email
				</label>
				<input
					name='email'
					onBlur={handleBlur}
					value={email}
					className={`${styles.input} ${
						emailDirty && emailError ? styles.error : ''
					}`}
					placeholder='johndoe@gmail.com'
					type='email'
					onChange={e => setEmail(e.target.value)}
				/>
			</div>
			<button className={`${styles.button} ${styles.button_forgot}`}>
				Se connecter
			</button>
			<Link to='/auth' className={styles.forgot_link}>
				Retour à la page connexion
			</Link>
		</div>
	)
}
