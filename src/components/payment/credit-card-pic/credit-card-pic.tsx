import React, { FC } from 'react';
import CreditCard from '../../credit-card';

const CreditCardPic: FC<any> = ({ creditCardRef, onValidStateChange }) => {
  return (
    <CreditCard
      ref={creditCardRef}
      onValidStateChange={onValidStateChange}
      placeholders={{
        number: '0000 0000 0000 0000',
        holder: 'John Smith',
        expiration: 'MM/YYYY',
        cvv: '000'
      }}
      labels={{
        holder: 'TITULAR DE LA TARJETA',
        expiration: 'VENCIMENTO',
        cvv: 'CÓDIGO CCV'
      }}
    />
  );
};

export default CreditCardPic;
