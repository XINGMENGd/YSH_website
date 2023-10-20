import { FC, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { tabBarConfig } from './config';
import style from './index.module.less';

const TabBar: FC = () => {
// const TabBar = ({ options } = {} as any) => {

    const navigate = useNavigate();
    const { pathname } = useLocation();

    const tabBarList = useMemo(() => tabBarConfig.map(tab => (
        <div key={tab.name} className={style.tabBarItem} onClick={() => navigate(tab.route)}>
            <img src={pathname === tab.route ? tab.active : tab.icon} alt="" />
            <div className={pathname === tab.route ? style.active : ''}>{tab.name}</div>
        </div>
    )), [pathname]);

    return <div className={style.tabBar}>
        {tabBarList}
    </div>;
};

export default TabBar;