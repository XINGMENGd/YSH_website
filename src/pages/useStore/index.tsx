import { FC } from 'react';
import TabBar from '@/components/tabBar';
import Logo from '@/images/logo.png';
import styles from './index.module.less';
import magicStore from '@/store/magic';
import { observer } from 'mobx-react-lite';
import Layout from '@/components/layout';

const useStore: FC = () => {

    const onMagic = () => {
        magicStore.triggerMagic('真乖，如果对您有帮助请在github上点个星星哦~ ');
    };

    return <Layout title='我的'>
        <div className={styles.useStore}>
            <img src={Logo} alt="" />
            <span className={styles.title}>React H5 开发模板</span>
            <span className={styles.github}>项目地址：
                <a href="https://github.com/talktao/talk-react-app">https://github.com/talktao/talk-react-app</a>
            </span>
            <span className={styles.author}>项目作者：talktao</span>
            <span className={styles.btn}>
                {magicStore.magicText === '' ? <button onClick={onMagic}>点我有魔法</button> : magicStore.magicText}
            </span>
            <TabBar />
        </div>
    </Layout>;


};

export default observer(useStore);