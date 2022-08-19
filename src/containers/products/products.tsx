import styled from "styled-components";
import CategoryTitleComponent from "../../components/category-title/category-title";

const DivStyle = styled.div`
  width: 100%;
  max-width: 800px;
`

const ProductsContainer = () => {
  return(
    <DivStyle className="container">
      <CategoryTitleComponent></CategoryTitleComponent>
    </DivStyle>
  )
}

export default ProductsContainer;