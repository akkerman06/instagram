import React from 'react'
import * as yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button } from '@/shared/ui/Button/Button'
import { Input } from '@/shared/ui/Input/Input'
import { RegisterForm } from '@/features/Auth/ui/RegisterForm/RegisterForm'
import { LoginForm } from '@/features/Auth/ui/LoginForm/LoginForm'
import { VStack } from '@/shared/ui/Stack/VStack'
const App = () => {
  return (
    <LoginForm></LoginForm>

    
    
  )
}

export default App