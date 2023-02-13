import React from 'react';

const GetWonPoints = (data) => {
    let won = data.filter(product => product.is_redemption == false);
   return won;
};

export default GetWonPoints;