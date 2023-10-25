import { FC, useEffect } from "react";
import { ReactComponentProps } from "@/type/reactComponent";
import useSetTitle from "@/hooks/useSetTitle";
import styles from './index.module.less';

interface LayoutType extends ReactComponentProps {
    title: string,
};

const Layout: FC<LayoutType> = (props) => {

    const { title, className = '', children } = props;

    useSetTitle(title);

    return <div className={styles.layout}>
        {children}
    </div>;
};

export default Layout;