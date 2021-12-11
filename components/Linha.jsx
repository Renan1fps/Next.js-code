import style from '../styles/tabuleiro/linha.module.css'
export function Linha(){
  return (
    <div className={style.linha}>
      <div className={style.corLinhaBlack}/>
      <div className={style.corlinhaWhithe}/>
      <div className={style.corLinhaBlack}/>
    </div>
  )
}