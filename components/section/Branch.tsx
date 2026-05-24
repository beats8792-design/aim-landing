import BranchCard from "@/components/cards/BranchCard";

const branchs = [
    {
        title: "AIM JAPANESE LANGUAGE ACADEMY",
        address:
            "Block # C-98/1, Bat Tala, Beside CTG Road, Staff Quarter Link Road, Rasulbagh, Siddhirganj, Narayanganj",
        phone: "01789499139,01931102115",
        email: "aimedu.jp@gmail.com",
    },
];


export default function Branch() {
    return (
        <section className="py-16 md:py-20 px-4 container mx-auto">
            <div className="grid lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 border-t border-outline-variant pt-6 md:pt-8">
                        {branchs.map((card, index) => (
                            <BranchCard key={index} {...card} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}