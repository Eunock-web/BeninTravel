import { useState } from "react";
import type { ImgHTMLAttributes } from "react";

type SafeImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, "src"> & {
    src?: string;
    fallbackLabel?: string;
};

/**
 * Image qui affiche un placeholder lorsque l'URL est absente ou ne charge pas,
 * afin d'éviter les icônes d'image cassée.
 */
function SafeImage({ src, alt, className, fallbackLabel, ...rest }: SafeImageProps) {
    const [failedSrc, setFailedSrc] = useState<string | null>(null);

    if (!src || failedSrc === src) {
        return (
            <div
                role="img"
                aria-label={alt}
                className={"flex items-center justify-center bg-linear-to-br from-sky-100 to-sky-300 text-sky-800 text-center text-sm font-medium p-2 " + (className ?? "")}
            >
                {fallbackLabel ?? alt}
            </div>
        );
    }

    return <img src={src} alt={alt} className={className} onError={() => setFailedSrc(src)} {...rest} />;
}

export default SafeImage;
