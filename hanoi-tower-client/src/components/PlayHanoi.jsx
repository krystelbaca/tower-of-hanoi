import usePlayHanoi from '../hooks/playable/usePlayHanoi';
import DisplayHanoi from './DisplayHanoi';
import '../styles/Hanoi.css';

const PlayHanoi = ({ numDisks }) => {
  const { handleDrop, rods } = usePlayHanoi(numDisks)
  
  return <DisplayHanoi rods={rods} onDrop={handleDrop} isPlayable />;
};

export default PlayHanoi;
