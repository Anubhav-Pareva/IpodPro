import BtnConatainer from "./btncontainer"; // contains all buttons
import IpodScreenn from "./ipodscreen"; // display main content
import {mumenudata, menudata, iaudiodata} from "./ipodprodata";
import { useState, useRef, useEffect } from "react";
export default function IPodPro(){
    const audioref = useRef(null);// use to take reference of current playing song

    const [ismenu, setismenu] = useState(false); //define whether to show menu on screen

    const [ismume, setismume] = useState(false); //define whether to show music menu on screen

    const [issetting, setissetting] = useState(false); // define when to show settings

    const [issong, setissong] = useState(false); //define when to show songs

    const [iscover, setiscover] = useState(false); // define when to show cover flow

    const [isgame, setisgame] = useState(false); // define when to show games

    const [songcount, setsongcount] = useState(0); // use to find or indicate which song is playing

    const [count, setcount] = useState(0);

    const [count2, setcount2] = useState(0);

    const [iaudio] = useState(iaudiodata); // data of songs

    const [mumenu] = useState(mumenudata); // data of main menu

    const [menu] = useState(menudata); // data of music menu

    function handlemenu(){// function to handle click on menu button

        if(ismume===false && ismenu===false){
                setissetting(false);
                setisgame(false);
                setismume(false);
                setiscover(false);
                setissong(false);
                setismenu(true);
        }
        else{
            if(ismenu===true){
                let temp = count-1
                if(temp===-1){
                    temp = menu.length-1;
                }
                menu.map((ele ,index)=>{
                    if(index===temp){
                        ele.isselected =true
                    }else{
                        ele.isselected =false
                    }
                    return(ele);  
                })
                setcount(temp);
            }
            else if(ismume===true){
                let temp = count2-1
                if(temp===-1){
                    temp = mumenu.length-1
                }
                mumenu.map((ele ,index)=>{
                    if(index===temp){
                        ele.isselected =true
                    }else{
                        ele.isselected =false
                    }
                    return(ele);  
                })
                setcount2(temp);
            }
           
        }
    }
    function changemenu(){//function to handle click on play/pause button
        if(issong){
            let pp=document.getElementById("pptar");
            if(iaudio[songcount].isplaying===false){
                pp.play();
                iaudio[songcount].isplaying=true;
            }
            else{
                pp.pause();
                iaudio[songcount].isplaying=false;
            }
        }
       else if(ismenu){
        let temp = count+1
        if(temp===menu.length){
            temp = 0
        }
        menu.map((ele ,index)=>{
            if(index===temp){
                ele.isselected =true
            }else{
                ele.isselected =false
            }
            return(ele);  
        })
        setcount(temp);
    }
    else if(ismume){
        let temp = count2+1
        if(temp===mumenu.length){
            temp = 0
        }
        mumenu.map((ele ,index)=>{
            if(index===temp){
                ele.isselected =true
            }else{
                ele.isselected =false
            }
            return(ele);  
        })
        setcount2(temp);
    }
    }
    function handleselect(){// function to handle click on center button
        let selectedoption=null; 
        if(ismume===true){
            selectedoption=mumenu.filter((ele)=>ele.isselected===true);
            if(selectedoption[0].itemname==="All Songs"){
                setismenu(false);
                setismume(false);
                setissong(true);
                iaudio[0].isplaying=true;
                mumenu[0].isselected=false;
            }
            else if(selectedoption[0].itemname==="Artists"){
                mumenu[1].isselected=false;
                console.log("inside artists");
            }
            else if(selectedoption[0].itemname==="Albums"){
                mumenu[2].isselected=false;
                console.log("inside albums");
            }
            else{
                setismume(false);
                setismenu(true);
                mumenu[mumenu.length-1].isselected=false;
            }
            setcount2(0);
        }
        if(ismenu===true){
        selectedoption=menu.filter((ele)=>ele.isselected===true);
        if(selectedoption[0].itemname==="Back"){
            setismenu(false);
            setismume(false);
            setisgame(false);
            setissetting(false);
            setiscover(false);
            menu[menu.length-1].isselected=false;
        }
        else if(selectedoption[0].itemname==="Settings"){
            setissetting(true);
            setismenu(false);
            menu[3].isselected=false;
        }
        else if(selectedoption[0].itemname==="Games"){
            setismenu(false);
            setisgame(true);
            menu[2].isselected=false;
        }
        else if(selectedoption[0].itemname==="Music"){
            setismenu(false);
            setismume(true);
            menu[1].isselected=false;
        }
        else{
            setismenu(false);
            setiscover(true);
        }
        setcount(0);
    }
    mumenu[0].isselected=true;
        menu[0].isselected=true;
    }
    function nextsong(){
        let pp=document.getElementById("pptar");
        iaudio[songcount].isplaying=false;
        pp.pause();
        if(songcount===iaudio.length-1){
            setsongcount(0);
            iaudio[songcount].isplaying=true;
            pp.load();
            pp.play();
            return;
        }
        let temp=songcount+1;
        setsongcount(temp);
        iaudio[songcount].isplaying=true;
        pp.load();
        pp.play();
        return;
    }
    function prevsong(){
        let pp=document.getElementById("pptar");
        iaudio[songcount].isplaying=false;
        pp.pause();
        if(songcount===0){
            setsongcount(iaudio.length-1);
            iaudio[songcount].isplaying=true;
            pp.load();
            pp.play();
            return;
        }
        let temp=songcount-1;
        setsongcount(temp);
        iaudio[songcount].isplaying=true;
        pp.load();
        pp.play();
    }
    const handleAudioEnded = () => {
        // The audio has finished playing, you can perform any desired action here
        let pp=document.getElementById("pptar");
        iaudio[songcount].isplaying=false;
        pp.pause();
        if(songcount===iaudio.length-1){
            setsongcount(0);
            iaudio[songcount].isplaying=true;
            pp.load();
            pp.play();
            return;
        }
        const temp=songcount+1;
        setsongcount(prevsong=>{return temp});
        iaudio[songcount].isplaying=true;
        pp.load();
        pp.play();
        return
      };
    
    useEffect(()=>{
        if(issong){
          audioref.current.addEventListener('ended', handleAudioEnded);
      }
      return () => {
        // Clean up the event listener when the component unmounts
      if(issong){
        if(audioref.current){
        audioref.current.removeEventListener('ended', handleAudioEnded);
      }
    }
      };
    },[issong, songcount]);

    return(
        <div id="ipod-container">
            <div id="section-1"><IpodScreenn 
                                            ismenu={ismenu} 
                                            issetting={issetting} 
                                            isgame={isgame} 
                                            menu={menu} 
                                            ismume={ismume} 
                                            mumenu={mumenu} 
                                            iscover={iscover} 
                                            issong={issong} 
                                            iaudio={iaudio} 
                                            songcount={songcount}
                                            audioref={audioref}/></div>
            <div id="section-2"><BtnConatainer 
                                            handlemenu={handlemenu} 
                                            changemenu={changemenu} 
                                            handleselect={handleselect} 
                                            nextsong={nextsong} 
                                            prevsong={prevsong}/></div>
        </div>
    )
}