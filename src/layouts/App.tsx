import React, { useState } from 'react';
import ModalForm from '../FormaAdaugare';

import { Button, Layout, Menu, theme } from 'antd';
import ProductCard from '../TelefonCard';
import Telefon from '../Telefon';
import MenuContainer from './Meniu';


const { Header, Content, Footer, Sider } = Layout;



const initialData:Telefon[] = [
  {
   nume: "Samsung Galaxy",
   model: "S23",
   descriere: "Display adaptiv Obține culoare și luminozitate optime, cu vizibilitate maximă în aer liber12. Ecranul de 120 Hz netezește derularea, în timp ce Eye Comfort Shield elimină oboseala ochilor, chiar și atunci când privești ecranul în întuneric.",
   imagine:"https://images.samsung.com/is/image/samsung/p6pim/ro/2302/gallery/ro-galaxy-s23-s911-sm-s911bzkgeue-thumb-534700949?imwidth=480",
   pret: 19000,
  },
  {
    nume: "Xiaomi ",
    model: "Redmi 13C",
    descriere: "Telefon mobil Xiaomi Redmi 13C, 8GB RAM, 256GB, Midnight Black",
    imagine:"https://s13emagst.akamaized.net/products/63471/63470391/images/res_2df52b48660b0fe2782fccf7b5d99f8a.jpg?width=720&height=720&hash=233E02D59EF1E27CECCDC4374FF6F310",
    pret: 7500,
   },
   {
    nume: "iPhone",
    model: "15 Pro Max",
    descriere: "Telefon mobil Apple iPhone 15 Pro Max, 256GB, 5G, Black Titanium",
    imagine:"https://s13emagst.akamaized.net/products/60458/60457151/images/res_44ffbf30efb9dcbd1501e316af596edb.jpg?width=720&height=720&hash=F8B9B844788445D1E92A240F213B0D64",
    pret: 22000,
   }
]; 


const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [cardData, setCardData] = useState<Telefon[]>(initialData);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleCancel = () => {
    
    setIsModalVisible(false);
   
  };

  const handleFormSubmit = ( CardProduct: Telefon) => {
    console.log("Handle submit")
    console.log(CardProduct)
    setCardData([...cardData, CardProduct]);
    console.log("final card data");
    console.log(cardData);

    setIsModalVisible(false);
  };

const emptyCard:Telefon = {
  nume : "",
  descriere: "",
  model: "",
  pret: 0,
  imagine: ""

}

console.log(cardData);

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
          <ModalForm visible={isModalVisible} onCancel={handleCancel} onSubmit={handleFormSubmit} card = {emptyCard} />
         
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
             <div style={{display:'flex',flexDirection:'row',gap:10 }}>{cardData.map((card , index) => (
        <ProductCard key={index} telefon={card} />
      ))}</div>


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