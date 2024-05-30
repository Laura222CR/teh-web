import React from 'react';
import { Button, Card } from 'antd';
import Telefon from './models/TelefonAndroid';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const { Meta } = Card;


interface TelefonCardProps {
  telefon: Telefon;
  onEdit: () => void; 
  onDelete: () => void; 
}

const TelefonCard: React.FC<TelefonCardProps> = ({ telefon, onEdit, onDelete  }) => (
  <Card
    hoverable
    style={{ width: 250 }}
    cover={<img alt={telefon.nume} src={telefon.imagine} />}
    actions={[ 
      <Button type="primary" icon={<EditOutlined />} onClick={onEdit}>Edit</Button>,
      <Button style={{ backgroundColor: '#ff4d4f', borderColor: '#ff4d4f' }} icon={<DeleteOutlined />} onClick={onDelete}>Delete</Button>
    ]}
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
