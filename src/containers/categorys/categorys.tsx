import styled from "styled-components"
import SelectComponent from "../../components/select-box/selectbox"

const DivStyle = styled.div`
    width: 100%;
`

const CategoryContainer = () => {
  return(
    <DivStyle className="container">
      <SelectComponent></SelectComponent>
    </DivStyle>
  )
}

export default CategoryContainer;