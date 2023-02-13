import { useEffect, useState } from "react";
import GetLosePoints from "./getLosePoints";
import GetWonPoints from "./getWonPoints";

const useGetData = () => {
    const [data, setData] = useState([]);
    const [loseData, setLoseData] = useState([]);
    const [wonData, setWonData] = useState([]);
    const [loading, setloading] = useState(true);
    const [error, seterror] = useState("");

    useEffect(() => {
        fetch("https://6222994f666291106a29f999.mockapi.io/api/v1/products")
            .then((res) => res.json())
            .then((data) => {
                seterror(data.error)
                setData(data)
                setloading(false)
               setLoseData(GetLosePoints(data))
               setWonData(GetWonPoints(data))
            })
    }, []);

    return { data:{all:data,lose:loseData, won:wonData}, loading, error };
};

export default useGetData;