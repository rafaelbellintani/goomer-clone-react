import BannerBrand from "../../components/banner-brand/banner-brand";
import styled from 'styled-components'

const DivStyle = styled.div `
height: 28px;
  margin-bottom: 10px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  opacity: 1;
  color: rgb(48, 51, 60);
  background-color: rgba(48, 51, 60, 0.3);
`

const BrandContainer = () => {
  return (
    <DivStyle>
      <BannerBrand></BannerBrand>
    </DivStyle>
  )
}

export default BrandContainer;