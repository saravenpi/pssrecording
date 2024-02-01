import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

function DiscoveryCarousel() {
    const picturesArray = [
        "/IMG_1874.jpg",
        "/IMG_1892.jpg",
        "/IMG_1785-2.jpg",
        "/IMG_1802.jpg",
        "/IMG_1834.jpg",
        "/IMG_1816-2.jpg",
        "/IMG_1819-2.jpg",
    ];

    const descriptionArray = [
        "Salle de Monitoring",
        "Salle de Monitoring",
        "Cabine B",
        "Cabine B",
        "Cabine A",
        "",
        "",
    ]

    return (
        <div className="w-full p-5">
            <Carousel>
                <CarouselContent className="">
                    {picturesArray.map((picturePath, index) => (
                        <CarouselItem key={index} style={{ backgroundImage: `url(${picturePath})`, backgroundSize: "cover", backgroundPosition: 'auto', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(8px)' }} className="border-none">
                                <div className="flex flex-col place-items-center gap-5 justify-center p-6">
                                    <Image
                                        src={picturePath}
                                        alt="studio_picture"
                                        width={200}
                                        height={200}
                                        className="rounded"
                                    ></Image>
                                    <span className="text-xl text-white font-thin">{descriptionArray[index]}</span>
                                </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    )
}

export default function Discovery() {
    return (
        <div className="flex flex-col gap-10 p-10 bg-gray-800 w-full" id="about">
            <div className="flex flex-col rounded bg-gray-700 justify-center place-items-center p-10">
                <div className="text-white text-3xl text-center underline">Découverte des Lieux</div>
                <DiscoveryCarousel></DiscoveryCarousel>
            </div>
        </div>
    )
}