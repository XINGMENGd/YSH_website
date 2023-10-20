import { FC } from 'react';
import { routesUrl } from '@/const/routes';
import TabBar from '@/components/tabBar';
import Logo from '@/images/logo.png';
import styles from './index.module.less';
import magicStore from '@/store/magic';
import { observer } from 'mobx-react-lite';
import Layout from '@/components/layout';

const My: FC = () => {

    const onMagic = () => {
        magicStore.triggerMagic('真乖，如果对您有帮助请在github上点个星星哦~ ');
    };

    return <Layout title='我的'>
        <div className={styles.my}>
            <div>我的</div>
            <TabBar />
        </div>
    </Layout>;


};

export default observer(My);