import { useContext } from "react";
import { loadingContext } from "../Context/Context";

const LoadingAnimation = () => {
    const {data,setData} = useContext(loadingContext)
    const DeactivateLoading = () => {
        const myTimeout = setTimeout(stopLoading, 2500);
    }

    const stopLoading = () => {
        setData(true);
    }

    DeactivateLoading();

    return (  
        <section>
            <div className="loading">
                <h3>LOADING...</h3>
            </div>
        </section>
    );
}
 
export default LoadingAnimation;