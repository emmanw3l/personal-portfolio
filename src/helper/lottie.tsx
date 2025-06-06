import { Player } from '@lottiefiles/react-lottie-player';
import { illustrate } from './icons';


export default function LottieAnimation() {
  return (
    <Player
      autoplay
      loop
      src={illustrate}
      style={{ height: '400px', width: '400px' }}
    />
  );
}
