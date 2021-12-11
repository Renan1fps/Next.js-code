import style from '../../styles/tabuleiro/container.module.css';
import { Linha } from "../../components/Linha";

export default function Tabuleiro(){
  return(
    <div className={style.container}>
      <Linha/>
    </div>
    
  )
}