import React, {useState} from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import { selectCars } from '../features/car/carSlice'
import { useSelector } from 'react-redux'
import Fade from 'react-reveal/Fade'

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);
    const cars = useSelector(selectCars);
    console.log(cars);

    return (
        <Fade>
            <Container>
                <a>
                    <img src="/images/logo.svg" alt="" />
                </a>
                <Menu>
                    {cars && cars.map((car, index) => (
                        <a key={index} href="#">{car}</a>
                    ))}
                </Menu>
                <RightMenu>
                    <a href="#">Shop</a>
                    <a href="#">Account</a>
                    {/* <a href="#">Menu</a> */}
                    <CustomMenu onClick={() => setBurgerStatus(true)}/>
                </RightMenu>
                <BurgerNav show={burgerStatus}>
                    <CloseWrapper>
                        <CustomClose onClick={() => setBurgerStatus(false)}/>
                    </CloseWrapper>
                    <ScrollWrapper>
                        <CarsWrapper>
                            {cars && cars.map((car, index) => (
                                <li key={index}><a href="#">{car}</a></li>
                            ))}
                        </CarsWrapper>
                        <li><a href="#">Existing Inventory</a></li>
                        <li><a href="#">Used Inventory</a></li>
                        <li><a href="#">Trade-In</a></li>
                        <li><a href="#">Test Drive</a></li>
                        <li><a href="#">Cybertruck</a></li>
                        <li><a href="#">Roadster</a></li>
                        <li><a href="#">Semi</a></li>
                        <li><a href="#">Charging</a></li>
                        <li><a href="#">Powerwall</a></li>
                        <li><a href="#">Commercial Energy</a></li>
                        <li><a href="#">Utilities</a></li>
                        <li><a href="#">Find Us</a></li>
                        <li><a href="#">Support</a></li>
                        <li><a href="#">Investor Relations</a></li>
                    </ScrollWrapper>
                </BurgerNav>
            </Container>
        </Fade>
    )
}

export default Header


const Container = styled.div`
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1001;
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a {
        padding: 0 10px;
        color: rgb(24, 27, 33);
    }

    @media(max-width: 768px) {
        display: none;
    }
`

const RightMenu = styled.div`
display: flex;
align-items: center;

    a {
        margin-right: 10px;
    }
`

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 290px;
    z-index: 1002;
    list-style: none;
    // padding: 70px 20px;
    padding: 70px 0px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.5s;
    li {
        padding: 11px 20px;
    }
`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`

const CloseWrapper = styled.div`
    margin-top: -40px;
    margin-bottom: 25px;
    display: flex;
    justify-content: flex-end;
    padding-right: 25px;
`

const CarsWrapper = styled.div`
    @media(min-width: 769px) {
        display: none;
    }
`

const ScrollWrapper = styled.div`
    height: 100%;
    width: 100%;
    overflow-y: auto;
    padding: 0 20px;
`