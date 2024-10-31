import { Route, Routes } from 'react-router-dom'
import { Auth } from '../pages/Auth/Auth'
import { ForgotPass } from '../pages/Auth/ForgotPass'
import { Home } from '../pages/Home/Home'

export const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/auth' element={<Auth />} />
			<Route path='/forgotPass' element={<ForgotPass />} />
		</Routes>
	)
}
