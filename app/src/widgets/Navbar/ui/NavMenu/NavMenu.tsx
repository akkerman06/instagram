import { Icon } from '@/shared/ui/Icon/Icon'
import React from 'react'
import cls from './NavMenu.module.scss'
import { INavMenuItem, } from '../../model/consts/navMenu'
import { Avatar } from '@/shared/ui'
export const  NavMenu = () =>  {

  const navMenuItems: INavMenuItem[] = [
    {
      href: "/",
      iconType: "Home",
    },
    {
      href: "/",
      iconType: "Messenger",
    },
    {
      iconType: "NewPosts",
    },
    {
      href: "/",
      iconType: "FindPeople",
    },
    {
      href: "/",
      iconType: "Favorite",
    },
  ];

  return (
      <nav className={cls.nav}>
        <ul className={cls.list}>
          {
            navMenuItems.map((item) => (
              <li className={cls.item}>
                {
                  item.href ?
                  (<a href={item.href} className={cls.link}>
                    <Icon type={item.iconType}></Icon>
                  </a>
                  ) : (
                    <Icon type={item.iconType}></Icon>

                  )}
              </li>
            ))
          }
          <li>
            <Avatar variant = 'story'  src='https://otkritkis.com/wp-content/uploads/2022/06/pdtrp.jpg' />

            
          </li>
          
        </ul>
      </nav>
  )
}
