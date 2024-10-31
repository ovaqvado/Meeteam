import { useState } from 'react'
import close_error from '../../assets/images/close_error.svg'
import pas_hide from '../../assets/images/pas_hide.svg'
import styles from './Auth.module.scss'

export const InputReg = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [showPass, setShowPass] = useState(false)
	const [emailDirty, setEmailDirty] = useState(false)
	const [passwordDirty, setPasswordDirty] = useState(false)
	const [emailError, setEmailError] = useState(false)
	const [passwordError, setPasswordError] = useState(false)
	const [errorModal, setErrorModal] = useState(true)

	const handleCloseError = () => {
		setErrorModal(false)
	}

	const blurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
		switch (e.target.name) {
			case 'email':
				setEmailDirty(true)
				setEmailError(!e.target.value.includes('@'))
				break

			case 'password':
				setPasswordDirty(true)
				setPasswordError(e.target.value.length < 3)
				break
		}
	}

	const handleShow = () => {
		setShowPass(!showPass)
	}

	return (
		<form action=''>
			<div className={styles.inputs}>
				<div className={styles.input_box}>
					<label className={styles.label}>Email</label>
					<input
						name='email'
						onBlur={blurHandler}
						value={email}
						className={`${styles.input} ${
							emailDirty && emailError ? styles.error : ''
						}`}
						placeholder='johndoe@gmail.com'
						type='email'
						onChange={e => setEmail(e.target.value)}
					/>
				</div>
				<div className={styles.input_box}>
					<label className={styles.label}>Numéro de téléphone</label>
					<input
						onFocus={blurHandler}
						className={styles.input}
						placeholder='(+237) 696 88 77 55'
						type='number'
					/>
				</div>
				<div className={styles.input_box}>
					<label className={styles.label}>Mot de passe</label>
					<div className={styles.input_pass_box}>
						<input
							onBlur={blurHandler}
							value={password}
							className={`${styles.input_pass} ${
								passwordDirty && passwordError ? styles.error : ''
							} `}
							type={showPass ? 'text' : 'password'}
							onChange={e => setPassword(e.target.value)}
							placeholder='********************'
						/>
						<img
							className={styles.hidden_pas}
							src={pas_hide}
							alt='toggle visibility'
							onClick={handleShow}
						/>
					</div>
				</div>
				<div className={styles.input_box}>
					<label className={styles.label}>Confirmer votre mot de passe</label>
					<div className={styles.input_pass_box}>
						<input
							value={password}
							className={styles.input_pass}
							type={showPass ? 'text' : 'password'}
							onChange={e => setPassword(e.target.value)}
							placeholder='********************'
						/>
						<img
							className={styles.hidden_pas}
							src={pas_hide}
							alt='toggle visibility'
							onClick={handleShow}
						/>
					</div>
				</div>
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
		</form>
	)
}

export const InputLogin = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [showPass, setShowPass] = useState(false)
	const [emailDirty, setEmailDirty] = useState(false)
	const [passwordDirty, setPasswordDirty] = useState(false)
	const [emailError, setEmailError] = useState(false)
	const [passwordError, setPasswordError] = useState(false)

	const blurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
		switch (e.target.name) {
			case 'email':
				setEmailDirty(true)
				setEmailError(!e.target.value.includes('@'))
				break
			case 'password':
				setPasswordDirty(true)
				setPasswordError(e.target.value.length < 3)
				break
		}
	}

	const handleShow = () => {
		setShowPass(!showPass)
	}

	return (
		<form action=''>
			<div className={styles.inputs}>
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
						onBlur={blurHandler}
						value={email}
						className={`${styles.input} ${
							emailDirty && emailError ? styles.error : ''
						}`}
						placeholder='johndoe@gmail.com'
						type='email'
						onChange={e => setEmail(e.target.value)}
					/>
				</div>

				<div className={styles.input_box}>
					<label
						className={`${styles.label} ${
							passwordDirty && passwordError ? styles.error_text : ''
						}`}
					>
						Mot de passe
					</label>
					<div className={styles.input_pass_box}>
						<input
							name='password'
							onBlur={blurHandler}
							value={password}
							className={`${styles.input_pass} ${
								passwordDirty && passwordError ? styles.error : ''
							}`}
							type={showPass ? 'text' : 'password'}
							onChange={e => setPassword(e.target.value)}
							placeholder='**********'
						/>
						<img
							className={styles.hidden_pas}
							src={pas_hide}
							alt='toggle visibility'
							onClick={handleShow}
						/>
					</div>
				</div>
			</div>
		</form>
	)
}
