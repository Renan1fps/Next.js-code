import style from '../styles/tabuleiro/linha.module.css'
import { SubDivisao } from './SubDivisao'
export function Linha(props){
  console.log(props.initBlack)
  return (
    <div className={style.linha}>
      <SubDivisao initBlack={props.initBlack}/>
      <SubDivisao initBlack={!props.initBlack}/>
      <SubDivisao initBlack={props.initBlack}/>
      <SubDivisao initBlack={!props.initBlack}/>
      <SubDivisao initBlack={props.initBlack}/>
      <SubDivisao initBlack={!props.initBlack}/>
      <SubDivisao initBlack={props.initBlack}/>
      <SubDivisao initBlack={!props.initBlack}/>
    </div>
  )
}