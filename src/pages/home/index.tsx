import { FC } from 'react';
import styles from './index.module.less';
import TabBar from '@/components/tabBar';
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

    // const { data, error, loading } = request<Data>(ApiCollector.getHome, {});
    // console.log(data);

    // if (loading) {
    //     return <div className={styles.loader}>
    //         <HomeLoader />
    //         <TabBar />
    //     </div>;
    // }

    // return <Layout title="首页" >
    //     <div className={styles.home}>
    //         <div className={styles.content}>
    //             <div className={styles.list}>
    //                 {
    //                     get(data, 'list', []).map(item => (
    //                         <div className={styles.item} key={item.id} onClick={() => deep(item.id)}>
    //                             <div className={styles.info}>
    //                                 <span>{item.content}</span>
    //                                 {item.isRoute && <img className={styles.rightArrow} src={RightArrow} alt='' />}
    //                             </div>
    //                         </div>
    //                     ))
    //                 }
    //             </div>
    //         </div>
    //         <TabBar />
    //     </div>
    // </Layout>;

    return <Layout title='首页'>
        <div className={styles.home}>
            <TabBar></TabBar>
        </div>
    </Layout>
};

export default Home;


// if (process.env.NODE_ENV === 'development') {

// } else {
//     render(<Home />);
// }


