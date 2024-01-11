export default function BtnConatainer(props){
return(
     <div id="main-div">
            <button id="sid1" onClick={props.handlemenu}>MENU</button>
            <button id="sid4" onClick={props.prevsong}>⏪</button>
            <button id="inner-div" onClick={props.handleselect}></button>
            <button id="sid2" onClick={props.nextsong}>⏩</button>
            <button id="sid3" onClick={props.changemenu}>▶❚❚</button>
        </div>
)
}