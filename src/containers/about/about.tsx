import styled from 'styled-components'
const logo = require('../../assets/logo.webp')

const DivStyle = styled.div`
  
  img {
    height: 90px;
  }
  a {
    position: absolute;
    left: 80%;
    /* bottom: 8px; */
    padding: 0px;
    border-radius: 3px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }

  .span-search {
    box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%;
  }

  .span-search2 {
    box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%;
  }

  .search-img {
    position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;
  }

  .inside-search {
    display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px;
  }

  .about-storehref {
    display: block;
    font-size: 12px;
    font-weight: bold;
    line-height: 17px;
    color: rgb(48, 51, 60);
    text-decoration: none;
    //position: absolute;
    left: 16px;
    bottom: 8px;
    padding: 0px;
    border-radius: 3px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    position: absolute;
    bottom: 5%;
    left: 20%;
  }
`

const AboutContainer = () => {
  return (
    <DivStyle>
        <a className="about-storehref" href="/">
          <span>Sobre a loja</span>
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="22" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"></path></svg>
        </a>
        <img src={logo} alt="logo"></img>
        <a href="/" data-test="btn-search">
          <span className="span-search">
            <span className="span-search2">
              <img alt="" aria-hidden="true" src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2716%27%20height=%2716%27/%3e" className="inside-search"/>
            </span>
            <img className="search-img" src="https://alameda79.goomer.app/assets/search.svg" decoding="async" data-nimg="intrinsic" alt="search"/>
          </span>      
        </a>
    </DivStyle>
  )
}

export default AboutContainer;