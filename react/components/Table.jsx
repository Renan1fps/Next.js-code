import style from '../styles/table/table.module.css'
export function TableComponente() {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Table componente</h1>
      <table className={style.table}>
        <thead >
          <tr className={style.tableHead}>
            <th className={style.th}>Id</th>
            <th className={style.th}>nome</th>
            <th className={style.th}>Descrição</th>
          </tr>
        </thead>
        <tbody>
          <tr className={style.tableHead}>
            <td className={style.td}>1</td>
            <td>Notebook</td>
            <td>descrição</td>
          </tr>
          <tr className={style.tableHead}>
            <td className={style.td}>1</td>
            <td>Notebook</td>
            <td>descrição</td>
          </tr>
          <tr className={style.tableHead}>
            <td className={style.td}>1</td>
            <td>Notebook</td>
            <td>descrição</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}