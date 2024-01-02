import { useContext, useState, useEffect } from 'react';

import { Tabs, Tab } from "react-tabs-scrollable";

import { CategoryContext } from '../../contexts/categoryContext';

import "react-tabs-scrollable/dist/rts.css";

import styles from './CategoryBar.module.css';

import './CategoryBar.css';

const CategoryBar = () => {

  const [activeTab, setActiveTab] = useState(10);

  const { categories, filterItems } = useContext(CategoryContext);

  const [target, setTarget] = useState('');

  const onTabClick = (e, index) => {
    setActiveTab(index);
    setTarget(e.target.textContent);
  };

  useEffect(() => {
    filterItems(target);
  }, [target]);

  return (
    <div className={styles.container_categories}>
      <Tabs
        activeTab={activeTab}
        onTabClick={onTabClick}
        hideNavBtnsOnMobile={true}
      >
        <Tab
        >
          Todos
        </Tab>
        {categories.map(item =>
          <Tab
            key={item.id}
          >
            {item.category_name}
          </Tab>
        )}
      </Tabs>
    </div>
  )
}

export default CategoryBar
