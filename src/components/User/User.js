import React from 'react';
import Player from '../Player/Player';

const User = (props) => {
    const {familiar} = props;

    // 1. Element Variable
    let greeting;
    if(familiar){
        greeting = <h3>Good Morning to you my dear.</h3>
    }
    else{
        greeting = <h3>Ow! you are not familar with this?</h3>
    }

    return (
        <div>
            {greeting}

            {/* 2. Ternary Operator */}
            {familiar ? <h3>Good Morning to you my dear.</h3> : <h3>Ow! you are not familar with this?</h3>}
            <div>
                <h2>Yo Yo chiki chiki</h2>
                {
                    familiar 
                    ? 
                    <div>
                        <h3>This is a heading</h3>
                        <p>Tui to amar bondhu</p>
                    </div>
                    :
                    <div>
                        <h3>Kire mama, tore to chinlam na</h3>
                        <p>Tui to amar bondhu na</p>
                    </div>
                }
            </div>

            <div>
                <h2>Connection</h2>
                {
                    familiar && <div>
                        <h5>Dosto phone number dao</h5>
                    </div>
                }
            </div>
            <div>
                <h2>Shared Drink</h2>
                {
                    familiar || <h4>Khamu daab er pani, haramu sob khani</h4>
                }
            </div>
            <div>
                <h1>Player</h1>
                {
                    familiar && <Player></Player>
                }
            </div>
        </div>
    );
};

export default User;