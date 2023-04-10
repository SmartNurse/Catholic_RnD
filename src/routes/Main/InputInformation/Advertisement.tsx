import { useState } from "react";
import useInterval from "../../../hooks/useInterval";

const Ads = ["1", "2", "3", "4"].map((v) => (
    {src: process.env.PUBLIC_URL + "/Ad" + v + ".png", href: "https://smartnurse.notion.site/smartnurse/ENR-e58617d80cda481f90d976fa97d9916d" }
));

const DELAY_VALUE = 30000;

const Advertisement = () => {
    const [idx, setIdx] = useState(0);

    useInterval(() => {
        setIdx((idx + 1) % Ads.length);
    }, DELAY_VALUE);

    return (
        <a href={Ads[idx].href} target="_blank">
            <img src={Ads[idx].src} alt="광고 이미지" />
        </a>
    );
}

export default Advertisement;