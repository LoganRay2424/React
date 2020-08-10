import React, { useState } from 'react';
import styled from 'styled-components';


const TabButton = styled.button`border: 2px solid rgb(230, 230, 230);
padding: 20px 32px;
background-color ${props => props.select ? 'grey' : 'white'};
color: ${props => props.select ? 'white' : 'grey'};
margin: 0px ${props => props.select ? '20' : '0'}px;`

const StyledP = styled.p`
    padding: 20px;
    
    
`;
const MainTab = () => {
    const [state, setState] = useState({
        selectTab: 1 // use hook to set the state

    });
    const tabClick = (event, value) => {
        setState({
            selectTab: value
        }); //tabClick method allow users to store the tabClick.  setState store the value into selectTab
    }
    return (
        <div>
            <h3>Tabs</h3>
            {[1, 2, 3].map((item, idx) => <TabButton key={idx} onClick={event => tabClick(event, item)} select={(state.selectTab === item)}>Tab {item}</TabButton>)}
            <h3><StyledP>Tab {state.selectTab} is currently showing.</StyledP></h3>
        </div>
    );
    //use .map to loop the onClick
}
// const App = () => {
//     return (
//         <div className="App">
//             <MainTab />


//         </div>
//     );
// }
export default MainTab;


