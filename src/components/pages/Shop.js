import React from "react";
import '../../App.css';
import Table from "../Table";
import Footer from "../Footer";

export default function Shop() {
    return (
        <>
            <div>
                <div className="shop">
                    <div className="shop-title-box">
                        <h1>Shop</h1>
                    </div>
                </div>
                <Table />
                <Footer />
            </div>
        </>
    )
}