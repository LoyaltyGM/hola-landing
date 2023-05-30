import { useState, useEffect } from "react";

export const MainImageLoading = ({ src, placeholderSrc, className, ...props }) => {
    const [imageSrc, setImageSrc] = useState(placeholderSrc);

    const imageEffect = `${className} ${imageSrc === placeholderSrc ? "loading" : "loaded"} `;
    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
            setImageSrc(src);
        };
    }, [src]);

    return <img src={imageSrc} alt={props.alt || ""} className={imageEffect} />;
};
