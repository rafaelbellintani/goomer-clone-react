import styled from 'styled-components'
import { BiMap, BiRestaurant, BiTimeFive } from 'react-icons/bi'
import { RiSendPlaneLine } from 'react-icons/ri'

const DivStyle = styled.div`
    padding: 16px 0px 0px;
  .category-status-div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .align-icon {
    display: flex;
    align-items: center;
  }

  .span-items {
    color: rgb(127, 143, 159);
    font-weight: 500;
    line-height: 17px;
    font-size: 16px;
    margin-bottom: 10px;
  }

  .icons {
    margin: 0 10px;
    font-size: 18px;
  }

  .status-store-closed {
    background-color: rgb(239, 71, 111);
    color: white;
    padding: 0px 6px;
    height: 22px;
    box-shadow: rgb(232 234 237) 0px 2px 4px;
    font-size: 16px;
    font-weight: 500;
    border-radius: 3px;
    cursor: pointer;
  }

  .select-address {
    font-weight: 500;
    line-height: 16px;
    text-align: left;
    color: rgb(48, 51, 60);
    margin-bottom: 0px;
    font-size: 13px
  }

  .button-address {
    max-width: 100%;
    margin-left: 0px;
    margin: 0px auto;
    min-height: 60px;
    border-radius: 5px;
    background: rgb(255, 255, 255);
    border: 1px solid rgb(48, 51, 60);
    cursor: pointer;
  }
`

const LocalContainer = () => {
  return (
    <DivStyle className='container'>
      <div className="category-status-div">
        <div className='align-icon span-items'>
          <BiRestaurant className='icons'/>
          <span>Bar & Restaurante</span>
        </div>
        <div className='align-icon status-store-closed'>
            <BiTimeFive style={{margin: '0px 4px 0 0'}}/>
            <span>Fechado</span>
        </div>
      </div>
      <div className='align-icon span-items'>
        <BiMap className='icons'/>
        <span>Avenida Lygia Latuf Salomão, 605 - Jardim João Rossi, Ribeirão Preto/SP</span>
      </div>
      <div className='align-icon select-address button-address'>
        <RiSendPlaneLine className='icons'/>
        <span>Selecione um endereço para entrega</span>
      </div>
    </DivStyle>
  )
}

export default LocalContainer;