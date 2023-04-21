import {FC} from 'react';
import classes from './ElectronLogo.module.css'

interface ElectronLogoProps {
    className?: string,
}

const ElectronLogo: FC<ElectronLogoProps> = props => {
    return (
        <div className={[props.className, classes.electronLogo].join(' ')}>
            <svg fill='none' className={classes.heroImage_PLwj} viewBox="-10 -10 230 230" xmlns="http://www.w3.org/2000/svg">
                <path className={[classes.logoLine_vBks, classes.logo_zGer].join(' ')} d="M67.9100478,46.533669 C41.4232923,41.7095462 19.6934451,46.302143 11.3075829,60.8268822 C5.08594528,71.6030748 7.27151972,86.0067879 15.9285936,101.106252"></path>
                <path className={[classes.logoLine_vBks, classes.logo_zGer].join(' ')} d="M30.2849913,120.46661 C41.243568,132.509273 55.7667544,144.206588 72.8846905,154.089633 C113.69002,177.648601 156.051349,183.283871 176.168455,169.566881"></path>
                <circle className={[classes.logoCircle_IbGX, classes.logo_zGer].join(' ')} cx="185" cy="163" r="11"></circle>
                <path className={[classes.logoLine_vBks, classes.logo_zGer].join(' ')} d="M168.712085,117.011934 C186.053192,96.5261231 192.894725,75.4688937 184.526327,60.9744031 C178.406575,50.3746817 165.18029,45.0644667 148.184837,44.8434393"></path>
                <path className={[classes.logoLine_vBks, classes.logo_zGer].join(' ')} d="M123.879401,47.4832579 C107.838006,50.9201969 90.2641836,57.6854858 72.9698617,67.6703673 C30.9602155,91.9246478 4.57811277,127.105828 8.15869375,151.502356"></path>
                <circle className={[classes.logoCircle_IbGX, classes.logo_zGer].join(' ')} cx="11" cy="163" r="11"></circle>
                <path className={[classes.logoLine_vBks, classes.logo_zGer].join(' ')} d="M57.2996169,169.094663 C66.3669653,194.413962 81.1998943,210.912475 97.9595403,210.912475 C110.104945,210.912475 121.238508,202.248064 129.899251,187.841199"></path>
                <path className={[classes.logoLine_vBks, classes.logo_zGer].join(' ')} d="M140.356454,163.91057 C145.161419,148.555719 147.938898,130.403455 147.938898,110.95376 C147.938898,63.2217718 131.210891,23.3038536 108.840161,13.3705693"></path>
                <circle className={[classes.logoCircle_IbGX, classes.logo_zGer].join(' ')} cx="98" cy="12" r="11"></circle>
                <circle className={[classes.logoFilled_d164, classes.logo_zGer].join(' ')} cx="98" cy="112" r="10"></circle>
            </svg>
        </div>
    );
};

export default ElectronLogo;