import React from 'react';
import { Card } from 'antd';
import Telefon from './models/TelefonAndroid';

const { Meta } = Card;


interface TelefonCardProps {
  telefon: Telefon;
}

const TelefonCard: React.FC<TelefonCardProps> = ({ telefon }) => (
  <Card
    hoverable
    style={{ width: 250 }}
    cover={<img alt={telefon.nume} src={telefon.imagine} />}
  >
    <Meta title={telefon.nume} description={telefon.descriere} />
    <div>
      <p>Model: {telefon.model}</p>
      <p>Price: {telefon.pret}</p>
      <p>Veriune android: {telefon.versiune}</p>
      <p>Specificatii: {telefon.specificatii}</p>
      <p>Relizul: {telefon.relizul}</p>
    </div>
  </Card>
);

export default TelefonCard;
