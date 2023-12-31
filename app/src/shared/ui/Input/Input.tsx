import React, { FC , InputHTMLAttributes , ForwardedRef , forwardRef , useState , memo} from 'react'
import cls from './Input.module.scss'
import { Text } from '../Text/Text';
import { classNames } from '@/shared/lib/ClassNames/ClassNames';
interface InputProps extends InputHTMLAttributes<HTMLInputElement>  {
    className?: string ;
    error?: any;
}


export const Input: FC<InputProps> = memo(
    forwardRef(
      (
        { className = "", type, value, placeholder, error, ...rest },
        ref: any
      ) => {
        const [typePass, setTypePass] = useState<boolean>(false);
  
        const onShowPass = () => {
          setTypePass(!typePass);
        };

        return (
          <div
          className={classNames(cls.field , {[cls.fieldError]: error}, [
            className,
          ])}>
            <input type= {type === 'password' &&  typePass ? 'text' : type}  ref = {ref} {...rest}/>

            {placeholder && (
                <span className={classNames(cls.placeh , {} , [value && cls.valueActive])}>
                    {placeholder}
                </span>
            )}

            {type === 'password' && value && (
                <Text className={cls.showPass}
                size={12}
                fw={600}
                onClick={onShowPass} >
                    {typePass ? 'Скрыть'  :  'Показать'}
                </Text>
            )}

            {error && (
                <Text size={12} fw={500} className={cls.error}> 
                    {error}  
                </Text>
            )}
       </div>
        )
     }

    )
)