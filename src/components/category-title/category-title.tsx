import styled from "styled-components";

const DivStyle = styled.div`
  h2::before {
    position: absolute;
    right: 0px;
    top: -10px;
    left: 0px;
    height: 10px;
    background-image: radial-gradient(circle at 10px -15px, transparent 20px, rgb(243, 245, 247) 21px);
    content: "";
    background-size: 20px 40px;
  }

  h2::after {
    position: absolute;
    right: 0px;
    top: -16px;
    left: 0px;
    height: 15px;
    background-image: radial-gradient(circle at 10px 26px, rgb(243, 245, 247) 20px, transparent 21px);
    content: "";
    background-size: 40px 40px;
}

  h2 {
    text-align: left;
    position: relative;
    margin-bottom: 0px;
    padding: 24px 16px 16px;
    border-bottom: 1px solid rgb(232, 234, 237);
    font-size: 14px;
    font-weight: bold;
    word-break: break-word;
    letter-spacing: 0.01em;
    text-transform: capitalize;
    color: rgb(72, 84, 96);
    background: rgb(243, 245, 247);
    font-size: 21px;
}
`

const CategoryTitleComponent = () => {
  return (
    <DivStyle>
      <h2>Pasteizinhos</h2>
    </DivStyle>
  )
}

export default CategoryTitleComponent;