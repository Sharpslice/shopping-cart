const TestBtn = ({amount, onAddBtn, onSubBtn}) =>{
    return(
        <div id = "fakeBtn">
            <button id="leftBtn" onClick={onSubBtn}> 
                -
            </button>

            {amount}

            <button id= "rightBtn" onClick={onAddBtn}>
                +
            </button>


        </div>
    )
}

export default TestBtn;