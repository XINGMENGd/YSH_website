import { FC } from 'react';
import ApiCollector from '@/const/apis';
import useMockRequest from '@/hooks/useMockRequest';
import Logo from '@/images/logo.png';
import styles from './index.module.less';
import TabBar from '@/components/tabBar';
import { routesUrl } from '@/const/routes';
import get from 'lodash/get';
import HomeLoader from '@/components/skeleton/homeLoader';
import { useNavigate } from 'react-router';
import Layout from '@/components/layout';
import RightArrow from '@/images/rightArrow.svg';

interface List {
    id: number;
    content: string;
    isRoute?: boolean;
}

interface Data {
    title: string;
    subTitle: string;
    list: List[];
}

const Home: FC = () => {
    const navigate = useNavigate();

    const { data, error, loading } = useMockRequest<Data>(ApiCollector.getHome, {});

    const deep = (id: number) => {

        if (id === 9) return navigate(routesUrl.list);
        if (id === 10) return navigate(routesUrl.virtuaList);
    };

    if (loading) {
        return <div className={styles.loader}>
            <HomeLoader />
            <TabBar />
        </div>;
    }

    return <Layout title="首页" >
        <div className={styles.home}>
            <div className={styles.content}>
                <div className={styles.title}>
                    <img src={Logo} alt="" />
                    {get(data, 'title', '')}
                </div>
                <div className={styles.subTitle}>{get(data, 'subTitle', '')}</div>
                <div className={styles.list}>
                    {
                        get(data, 'list', []).map(item => (
                            <div className={styles.item} key={item.id} onClick={() => deep(item.id)}>
                                <div className={styles.info}>
                                    <span>{item.content}</span>
                                    {item.isRoute && <img className={styles.rightArrow} src={RightArrow} alt='' />}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <TabBar />
        </div>
    </Layout>;

};

export default Home;


// if (process.env.NODE_ENV === 'development') {

// } else {
//     render(<Home />);
// }


