import { colors } from "@/theme/colors";

export default function Background() {
    return (
        <div className={`fixed inset-0 -z-10 bg-[#000010] overflow-hidden`}>
            <svg className="absolute inset-0 w-full h-full opacity-[0.15]">
                <filter id="noiseFilter">
                    <feTurbulence
                        type="fractalNoise"
                        baseFrequency="0.8"
                        numOctaves="4"
                        stitchTiles="stitch"
                    />
                    <feColorMatrix type="saturate" values="0" />
                </filter>
                <rect width="100%" height="100%" filter="url(#noiseFilter)" />
            </svg>
        </div>
    )
}
