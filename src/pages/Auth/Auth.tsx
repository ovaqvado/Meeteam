import { useState } from 'react'
import logotype from '../../assets/images/Logotype.svg'
import arrow_right from '../../assets/images/arrow_right.svg'
import close_error from '../../assets/images/close_error.svg'

import { Link } from 'react-router-dom'
import styles from './Auth.module.scss'
import { InputLogin, InputReg } from './InputReg'

export const Auth = () => {
	const [isLogin, setIsLogin] = useState(true)
	const [errorModal, setErrorModal] = useState(true)

	const handleClickText = () => {
		window.open('https://www.afepasa.com/front/img/pdf/AVISO_LEGAL_CV_fr.pdf')
	}

	const handleCloseError = () => {
		setErrorModal(false)
	}

	return (
		<div className={styles.Auth_container}>
			<div className={styles.box_auth}>
				<div className={styles.logo_text}>
					<img src={logotype} alt='' />
					<p className={styles.text}>
						Merci d'entrer vos informations de connexion
					</p>
				</div>
				{isLogin ? <InputLogin /> : <InputReg />}
				{isLogin ? null : (
					<span className={styles.checkbox_container}>
						<input className={styles.checkbox} type='checkbox' />
						<span className={styles.check_text}>
							J'accepte
							<button onClick={handleClickText} className={styles.check_btn}>
								les termes et les conditions d'utilisation.
							</button>
						</span>
					</span>
				)}
				{isLogin ? (
					<Link to='/forgotPass' className={styles.reset_pas}>
						Mot de passe oublié ?
					</Link>
				) : (
					''
				)}
				<div className={styles.btn_box}>
					<button className={styles.button}>
						{isLogin ? 'Se connecter' : 'Créer un compte'}
					</button>
					{isLogin ? (
						<img className={styles.icon_btn} src={arrow_right} alt='connect' />
					) : (
						''
					)}
				</div>
				<p className={styles.cre_account}>
					{isLogin ? (
						<>
							Vous n’avez pas de compte ?{' '}
							<button
								onClick={() => setIsLogin(false)}
								className={styles.button_sub}
							>
								Créer un compte
							</button>
						</>
					) : (
						<>
							Vous avez déjà un compte ?{' '}
							<button
								onClick={() => setIsLogin(true)}
								className={styles.button_sub}
							>
								Se connecter
							</button>
						</>
					)}
				</p>
			</div>
			{errorModal ? (
				<div className={styles.error_box}>
					<p className={styles.error_box_text}>Adresse email inconnue</p>
					<img
						onClick={handleCloseError}
						className={styles.error_box_img}
						src={close_error}
						alt='close_error'
					/>
				</div>
			) : null}
		</div>
	)
}
