import  {FC, ReactNode} from 'react';
import cls from './Hr.module.scss'
type PaddingTypes = 'auth'
interface HrProps {
    className?: string,
}


export const Hr: FC<HrProps> = ({ className=''}) => {

    return (
        <div className={`${cls.hr}  `}>

        </div>
    );
};

