import styles from './App.module.scss'
import { Router } from './router/Router'

function App() {
	return (
		<div className={styles.App}>
			<Router />
		</div>
	)
}

export default App
