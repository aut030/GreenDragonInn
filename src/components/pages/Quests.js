import React from "react";
import '../../App.css';
import Footer from "../Footer";
import SideScroll from "../SideScroll";

export default function Quests() {
    return (
        <>
            <div className="quests">
                <h1 className="quest-title">Quest Board</h1>
                <SideScroll />
            </div>
            <Footer />
        </>
    )
}