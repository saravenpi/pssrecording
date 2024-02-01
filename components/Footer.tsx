import Link from "next/link";

export default function Footer() {
    return (
        <div className="flex flex-col bg-gray-900 p-10 justify-center place-items-center">
            <div className="text-xl text-white">Created with ❤️ by <Link href="https://github.com/saravenpi">saravenpi</Link></div>
        </div>
    )
}