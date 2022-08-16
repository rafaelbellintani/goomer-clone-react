import styled from "styled-components";
import AboutContainer from "../about/about";
import BrandContainer from "../brand/brand-container";

const DivStyle = styled.div`
    position: relative;
    height: 156px;
    background: rgb(140, 200, 232);
`

const BrandAboutContainer = () => {
  return(
  <DivStyle>
    <BrandContainer></BrandContainer>
    <AboutContainer></AboutContainer>
  </DivStyle>
  )
  
}

export default BrandAboutContainer;