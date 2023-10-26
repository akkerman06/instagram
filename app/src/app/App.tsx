import React, { useContext } from 'react'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button } from '@/shared/ui/Button/Button'
import { Input } from '@/shared/ui/Input/Input'
import { RegisterForm } from '@/features/Auth/ui/RegisterForm/RegisterForm'
import { LoginForm } from '@/features/Auth/ui/LoginForm/LoginForm'
import { VStack } from '@/shared/ui/Stack/VStack'
import AppRouter from './providers/router/ui/AppRouter'
import { NavMenu } from '@/widgets/Navbar/ui'
import { Navbar } from '@/widgets/Navbar/ui/Navbar/Navbar'
import { ThemeContext } from './providers'
const App = () => {
  const { theme } = useContext(ThemeContext)
  console.log(theme)

  return (
    <div className='app '>
      <Navbar></Navbar>
      {/* <div className="container">
      </div>
       */}
    </div>
   
  )
}

export default App