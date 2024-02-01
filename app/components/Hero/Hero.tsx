import Link from "next/link"
import Navbar from "../Navbar"
import './Hero.css'

export default function Hero() {
    return (
        <div className="Hero">
            <div className="w-full h-screen">
                <Navbar></Navbar>
                <div className="w-full h-full flex flex-col text-4xl text-white justify-center place-items-center">
                    Le meilleur studio de Lyon
                </div>
            </div>
        </div>
    )
}