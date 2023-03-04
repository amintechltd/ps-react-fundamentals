import { useState } from "react";
import HouseRow from "./houseRow";

const houseArray = [
    {
        id: 1,
        address: "12 Glasgow RD",
        country: "Scotland",
        price: 1000000
    },
    {
        id: 2,
        address: "12 Jessore RD",
        country: "Bangladesh",
        price: 50000
    }
]

const HouseList = () => {
    const [houses, setHouses] = useState(houseArray);
    const [counter, setCounter] = useState(3);

    const addHouse = () => {
        setCounter(current => counter+1);

        setHouses([
            ...houses,
            {
                id: counter,
                address: "Flat " + counter + ", 121 Green St",
                country: "England",
                price: 250000
            }
        ]);

    };
    return (
        <>
            <div className="row mb-2">
                <h5 className="themeFontColor text-center">
                    Houses currently on the market
                </h5>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Address</th>
                        <th>Country</th>
                        <th>Asking Price</th>
                    </tr>
                </thead>
                <tbody>{houses.map((h) => <HouseRow key={h.id} house={h} />)}</tbody>
            </table>
            <button className="button button-primary" onClick={addHouse}>
                Add
            </button>
        </>
    );
};

export default HouseList;