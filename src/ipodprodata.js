import mmj from "./Maan Meri Jaan_320(PagalWorld.cm).mp3";
import mmjimg from "./Maan-Meri-Jaan-Purvish.jpg";
import daku from "./Daku_320(PagalWorld.cm).mp3";
import dakuimg from "./Daku-feat-Inderpal-Moga-English-2021-20230309091928-500x500.jpg";
import tlr from "./The Last Ride - Sidhu Moose Wala 320 Kbps.mp3";
import tlrimg from "./Sidhu-Moose-Wala-The-Last-Ride-Lyrics-Status-Download.jpg";
var mumenudata=[{
    itemname:"All Songs",
    isselected:true
},{
    itemname:"Artists",
    isselected:false
},{
    itemname:"Albums",
    isselected:false
},
{
itemname:"Back",
isselected:false
}];
var menudata=[{
    itemname:"CoverFlow",
    isselected:true,
    iscategory:false
    },
    {
        itemname:"Music",
        isselected:false
    },{
        itemname:"Games",
        isselected:false
    },{
        itemname:"Settings",
        isselected:false
    },
    {
        itemname:"Back",
        isselected:false
    }];
    var iaudiodata=[
        {   
            simg: mmjimg,
            song: mmj,
            isplaying:false
        },
        {   
            simg: dakuimg,
            song: daku,
            isplaying:false
        },
        {   
            simg: tlrimg,
            song: tlr,
            isplaying:false
        }
    ];
export {mumenudata, menudata, iaudiodata};