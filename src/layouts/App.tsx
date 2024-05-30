import React, { useState } from 'react';
import ModalForm from '../FormaAdaugare';

import { Button, Layout, Menu, Spin, theme } from 'antd';
import Telefon from '../models/TelefonAndroid';
import MenuContainer from './Meniu';
import telefonStore from '../stores/TelefonStore';
import TelefonCard from '../TelefonCard';


const { Header, Content, Footer, Sider } = Layout;


const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState<Telefon | null>(null); 
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    
    setIsModalVisible(false);
    setSelectedProduct(null); 

  };

  const handleFormSubmit = (telefonCard: Telefon) => {
    if (selectedProduct) {
      telefonStore.removeProduct(selectedProduct); 
    }
    telefonStore.addProduct(telefonCard); 
    setIsModalVisible(false); 
    setSelectedProduct(null); 
  };

  const handleEdit = (telefon: Telefon) => {
    setSelectedProduct(telefon); 
    showModal();
  };

  const handleDelete = (telefon: Telefon) => {
    telefonStore.removeProduct(telefon); 
  };
const emptyCard:Telefon = {
  nume : "",
  descriere: "",
  model: "",
  pret: 0,
  imagine: "",
  specificatii: "",
  versiune: "",
  relizul: 0

}


  return (
    <Layout hasSider>
      <Sider
        style={{ overflow: 'auto', height: '100vh', position: 'fixed', left: 0, top: 0, bottom: 0 }}
      >
        <div className="demo-logo-vertical" />
      <MenuContainer/>
      </Sider>
      <Layout style={{ marginLeft: 200 }}>
        <Header style={{ padding: 0, background: colorBgContainer }} >
        <Button type="primary" onClick={showModal} style={{ marginBottom: 16, marginLeft:16}}>
            Add product
          </Button>
          <ModalForm visible={isModalVisible} onCancel={handleCancel} onSubmit={handleFormSubmit} card={selectedProduct || emptyCard} />
         
        </Header>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <div
            style={{
              padding: 24,
              textAlign: 'center',
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
              {telefonStore.loading ? (
              <Spin size="large" />
            ) : (
              <div style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
                {telefonStore.telefoane.map((telefon, index) => (
                  <TelefonCard 
                    key={index} 
                    telefon={telefon} 
                    onEdit={() => handleEdit(telefon)}
                    onDelete={() => handleDelete(telefon)} 
                  />
                ))}
              </div>
            )}


          </div>

        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default App;