import { Menu } from 'antd';
import { UserOutlined, AppstoreOutlined, ShopOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const MenuContainer = () => {
  const items = [
    { path: '/', icon: <UserOutlined />, label: 'Utilizator' },
    { path: '/telefoane', icon: <AppstoreOutlined />, label: 'Telefoane' },
    { path: '/magazin', icon: <ShopOutlined />, label: 'Magazin' }
  ];

  return (
    <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
      {items.map((item, index) => (
        <Menu.Item key={String(index + 1)} icon={item.icon}>
          <Link to={item.path}>{item.label}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default MenuContainer;
