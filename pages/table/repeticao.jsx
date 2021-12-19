import { listProducts } from "../../data/productsData"

export default function Renderizacao() {

  function renderProducts() {
    const list = listProducts
   return list.map(product => (
      <tr key={product.id}>
        <td>{product.id}</td>
        <td>{product.name}</td>
        <td>{product.value}</td>
      </tr>))
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>nome</th>
          <th>value</th>
        </tr>
      </thead>
      <tbody>
        {renderProducts()}
      </tbody>
    </table>
  )
}