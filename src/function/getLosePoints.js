import React from 'react';

const GetLosePoints = (data) => {
    let lose = data.filter(product => product.is_redemption == true);
   return lose;
};

export default GetLosePoints;