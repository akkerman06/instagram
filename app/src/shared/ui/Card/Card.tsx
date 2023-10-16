import  {FC, ReactNode} from 'react';
import cls from './Card.module.scss'

type PaddingTypes = 'auth'
type marginTopTypes = 50
interface CardProps {
    padding?: PaddingTypes
    children: ReactNode
    className?: string,
    margin?: marginTopTypes
}


export const Card: FC<CardProps> = ({children,margin ,  padding = 'auth', className=''}) => {
    const paddingClasses: Record<PaddingTypes, string> = {
        auth: cls.paddingAuth,
    }
    const MarginClasses: Record<marginTopTypes , string> = {
        50: cls.marginTop
    }

    return (
        <div className={`${cls.card}  ${paddingClasses[padding]} ${MarginClasses[margin]} ${className}`}>
            {children}
        </div>
    );
};

