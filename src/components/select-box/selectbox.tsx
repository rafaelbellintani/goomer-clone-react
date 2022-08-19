import styled from "styled-components";
import ProductsCategoryInterface from "../../shared/interfaces/category-products";

const DivStyle = styled.div`
  padding: 16px 0;
    select {
      width: 100%;
      padding: 8px 16px;
      max-width: 800px;
      border: 1px solid rgb(127, 143, 159);
      border-radius: 4px;
      background: rgb(255, 255, 255)
    }
`

const CategoriaProdutos: ProductsCategoryInterface[] = [
  { name: 'Cafés', value: 'cafes'},
  { name: 'Sucos', value: 'sucos'},
  { name: 'Salgados', value: 'salgados'}
]

const SelectComponent = () => {
  return (
    <DivStyle>
        <select name="cars" id="cars">
          {CategoriaProdutos.map((category) => {
            return (
              <option value={category.value}>{category.name}</option>
            )  
          })}
        </select>
    </DivStyle>
  )
}

export default SelectComponent;