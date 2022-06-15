import { useEffect, useState } from "react";
import { getGifs } from "../Helpers/getGifs";

export const useFetchGifs = (category) => {
    
    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    };

    useEffect(() => {
        getImages();
        // getGifs(category)
        // .then(newImages => setImages(newImages));
    }, []);
    
    
    return {
        images,
        isLoading:false
    }
}
