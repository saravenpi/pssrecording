export default function Pricing() {
    return (
        <div className="flex flex-col gap-10 p-10 bg-gray-800" id="about">
            <div className="p-5 rounded bg-gray-700">
                <div className="text-white text-3xl text-center underline">Nos tarifs</div>
                <div className="flex flex-row flex-wrap gap-10 p-5 justify-center">
                    <div className="pricecard">
                        <div className="text-xl">
                            Tarif Z
                        </div>
                        <div className="pricenumber">5 €</div>
                    </div>
                    <div className="pricecard">
                        <div className="text-xl">
                            Tarif Y
                        </div>
                        <div className="pricenumber">12,50 €</div>
                    </div>
                    <div className="pricecard">
                        <div className="text-xl">
                            Tarif X
                        </div>
                        <div className="pricenumber">0 €</div>
                    </div>
                </div>

            </div>
        </div>
    )
}