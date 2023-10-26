import React , {ChangeEvent, useState} from 'react';
import cls from './NavSearch.module.scss'
import { Icon } from '@/shared/ui/Icon/Icon';
import { Text } from '@/shared/ui';
export const NavSearch: React.FC = () => {

  const [search , setSearch] = useState<string>('')  
  const onChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value)
  }


  return (
    <div className={cls.search}>
      <input type='text' value={search} onChange={onChangeSearch} />
      {!search && (
        <div className={cls.text}>
          <Icon type='Search'></Icon>
          <Text as='span'>Search</Text>
        </div>
      )}
    </div>

  );
};
