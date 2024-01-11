import settiimg from "./Settings-L-icon.png";
import gameimg from "./game-icon.png";
import cover from "./cover-flow.png";
export default function IpodScreenn(props){   
    return(
        <div id="scr-div">
            {props.ismenu?<ul className="scr-ul">
                <h1 style={{margin:0}}>Ipod.js</h1>
                {props.menu.map((ele, index)=><li key={index} className={ele.isselected?"scr-li":""}>{ele.itemname} <span>{ele.isselected?">":""}</span></li>)} 
            </ul>:null}
            {props.ismume?<ul className="scr-ul">
                <h1 style={{margin:0}}>Music</h1>
                {props.mumenu.map((ele, index)=><li key={index} className={ele.isselected?"scr-li":""}>{ele.itemname} <span>{ele.isselected?">":""}</span></li>)}                
            </ul>:null}
            {props.iscover?<img src={cover} alt="cover flow" style={{width:100+"%",height:100+"%", backgroundColor:"white"}}/>:null}
            {props.issetting?<img src={settiimg} alt="setting" style={{width:100+"%",height:100+"%", backgroundColor:"white"}}/>:null}
            {props.isgame?<img src={gameimg} alt="game" style={{width:100+"%",height:100+"%", backgroundColor:"white"}}/>:null}
            {props.issong?<div  style={{backgroundImage: `url(${props.iaudio[props.songcount].simg})`,
                            width:100+"%",
                            height:100+"%",
                            display:"flex",
                            flexDirection:"column",
                            justifyContent:"end",
                            alignItems:"center",
                            backgroundColor:"white",
                            backgroundSize:"cover"
                        }}>
                <audio  ref={props.audioref} id="pptar" controls  autoPlay style={{width:100+"%"}}> <source src={props.iaudio[props.songcount].song}/></audio>
            </div>:null}
            
        </div>
    )
}