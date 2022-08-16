import styled from 'styled-components'
import logo from '../../assets/logo.webp'

const DivStyle = styled.div`
  img {
    height: 90px;
  }
`

const AboutContainer = () => {
  return (
    <DivStyle>
      <img src={logo} alt="logo"></img>
    </DivStyle>
  )
}

export default AboutContainer;