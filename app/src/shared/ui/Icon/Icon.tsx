import React , { FC , memo} from 'react'
import { IconTypes , iconName } from './IconName'
import { Mods, classNames } from "@/shared/lib/ClassNames/ClassNames";
import cls from './Icon.module.scss'

type IconSize = 'm' | 'l' | 'xl'

interface IIcopProps {
    type: IconTypes,
    size?: IconSize,
    className?: string
}

export const Icon: FC<IIcopProps> = memo (
    ({
        type , size = 'm' ,className = ''
    }) => {
        const getIcon = (type: IconTypes) => {
            return iconName[type] as JSX.Element
        }
        const mods: Mods = {
            [cls[size]]: true
        }
        return (
            <div className={classNames(cls.icon , mods , [className])}>
                {getIcon(type)}

            </div>
        )
    }
)