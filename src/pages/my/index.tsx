import { FC, useState } from 'react';
import TabBar from '@/components/tabBar';
import styles from './index.module.less';
import authStore from '@/store/auth';
import { observer } from 'mobx-react-lite';
import Layout from '@/components/layout';
import { login } from '@/api/auth/index';

const My: FC = () => {
  const [formData, setFormData] = useState({
    loginId: '',
    password: ''
  })
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault()
    const { data: userInfo } = await login(formData)
    authStore.setUserInfo(userInfo)
    console.log(authStore.getUserInfo);
    
  }
  return <Layout title='我的'>
    <div className={styles.my}>
      <form onSubmit={handleSubmit}>
        <div>
          <input type="text" name='loginId' value={formData.loginId} onChange={handleChange} placeholder='请输入用户名或邮箱' />
        </div>
        <div>
          <input type="text" name='password' value={formData.password} onChange={handleChange} placeholder='请输入密码' />
        </div>
        <div>
          <button type='submit'>登录</button>
        </div>
      </form>
      <div>{authStore.getUserInfo?.token} </div>
      <TabBar />
    </div>
  </Layout>;

};

export default observer(My);