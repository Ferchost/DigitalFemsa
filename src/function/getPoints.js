import { useEffect, useState } from "react";
import useGetData from "./getData";

const GetPoints = () => {
    let data = useGetData()
    let sum = data.loading == false && data.data.all.reduce((sum, product) => sum + (product.is_redemption == false ? product.points : 0), 0);

    return sum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export default GetPoints;