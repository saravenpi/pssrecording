import Navbar from "../Navbar"
import './Hero.css'

export default function Hero() {
    return (
        <div className="Hero">
            <div className="w-full sm:h-screen">
                <Navbar></Navbar>
                <div className="Hero_mid w-full h-full flex flex-col justify-center place-items-center">
                    <div className="text-white sm:text-6xl text-5xl font-bold">PSS RECORDING</div>
                    <div className="text-white text-xl">Le meilleur studio de Lyon</div>
                </div>
            </div>
        </div>
    )
}