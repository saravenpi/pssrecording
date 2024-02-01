import Link from "next/link"

export default function Navbar() {
    return (
        <div className="flex flex-row gap-5 p-5 backdrop-blur-lg justify-between">
            <div className="text-4xl text-white">PSS Recording</div>
            <div className="flex flex-row gap-10 text-lg text-white justify-center place-items-center">
                <Link href="#about">Qui sommes-nous?</Link>
                <Link href="#about">Découverte des lieux</Link>
                <Link href="#about">Nos tarifs</Link>
            </div>
        </div>
    )
}