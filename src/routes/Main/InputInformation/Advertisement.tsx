import { useState, useEffect } from "react";
import useInterval from "../../../hooks/useInterval";

import Ad1 from "../../../assets/Ad1.png";
import Ad2 from "../../../assets/Ad2.png";


const Ads = [
    {src: Ad1, href: "https://smartnurse.notion.site/smartnurse/ENR-e58617d80cda481f90d976fa97d9916d"},
    {src: Ad2, href: "https://smartnurse.notion.site/smartnurse/ENR-e58617d80cda481f90d976fa97d9916d"},
];
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