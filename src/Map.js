import React from "react";

const makanans = [
    {
        nama: "soto",
        harga: 12000
    },
    {
        nama: "Bakso",
        harga: 10000
    },
    {
        nama: "Mi ayam",
        harga: 15000
    },
    {
        nama: "Nasi goreng",
        harga: 15000
    },
];

const total_bayar = makanans.reduce((total_harga, makanan) => {
    return total_harga + makanan.harga;
}, 0);

const Map = () => {
    return(
        <div>
            <h2>maping</h2>
            <ul>
                {makanans.map((makanan, index) => (
                    <li>{index + 1}. {makanan.nama} - harga {makanan.harga}</li>
                ))}
            </ul> 
            <h2>Map Filter harga yang lebih dari 11.000</h2>
            <ul>
            {makanans.filter((makanan) => makanan.harga > 11000)
                .map((makanan, index) => (
                    <li>{index + 1}. {makanan.nama} - harga {makanan.harga}</li>
                ))}
            </ul>

                <h3>total_bayar : {total_bayar}</h3>
        </div>
    )
}

export default Map