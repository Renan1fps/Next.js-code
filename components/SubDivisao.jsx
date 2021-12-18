import style from '../styles/tabuleiro/linha.module.css'
export function SubDivisao({initBlack}){
  return (
    <div className={initBlack ? style.corLinhaBlack : style.corlinhaWhithe}/>
  )
}