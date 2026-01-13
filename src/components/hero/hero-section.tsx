export default function HeroSection() {
    return (
        <div className="h-screen w-full text-white bg-primary">
            <div className="relative bg-red font-bemore-serif text-[300px]">
                <span>Jessica</span>
                <div className="absolute -top-20 text-transparent [-webkit-text-stroke:2px_white]">Jessica</div>
            </div>

            <div className="relative font-embassy-bt text-[300px]">
                <div>Ryan</div>
                <div className="absolute top-0 -left-2 text-transparent [-webkit-text-stroke:2px_white]">Ryan</div>
            </div>

            <div>And I Design in Code</div>
        </div>
    )
}