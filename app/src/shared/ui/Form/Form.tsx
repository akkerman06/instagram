import React, { FC , ReactNode  , memo } from 'react'
import { classNames } from '@/shared/lib/ClassNames/ClassNames'
import cls from './Form.module.scss'

interface FormProps {
    children?: ReactNode,
    onSubmit?: () => void,
    className?: string,
}


export const Form: FC<FormProps> = memo (
    ({
        className = '' , children , onSubmit
    }) => {
        return (
            <form noValidate className={classNames(cls.form  , {} , [className])} onSubmit={onSubmit}>
                {children}
            </form>
        )
    }
)