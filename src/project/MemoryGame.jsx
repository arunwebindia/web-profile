import React, { useEffect,useState } from 'react'
import './memoryGame.css'
// import emojiArr from './utils/emoji'
const emojiArr = [
    {
        sign:'🍕',
        stat:'inactive',
        id:1
    },
    {
        sign:'🍕',
        stat:'inactive',
        id:2
    },
    {
        sign:'😊',
        stat:'inactive',
        id:3
    }, 
    {
        sign:'😊',
        stat:'inactive',
        id:4
    },
    {
        sign:'❤️',
        stat:'inactive',
        id:5
    },
    {
        sign:'❤️',
        stat:'inactive',
        id:6
    },
    {
        sign:'👍',
        stat:'inactive',
        id:7
    },
    {
        sign:'👍',
        stat:'inactive',
        id:8
    },
    
    {
        sign:'🎶',
        stat:'inactive',
        id:9
    },
    {
        sign:'🎶',
        stat:'inactive',
        id:10
    },
    {
        sign:'🤖',
        stat:'inactive',
        id:11
    },
    {
        sign:'🤖',
        stat:'inactive',
        id:12
    }
]
export default function Memory(){

    const [data,setdata]= useState(emojiArr);
    const [start,setstart] = useState(false);
    const [prev,setprev]= useState(-1);
    const [winner,setwin] = useState(false)
    useEffect(()=>{
        setdata([...emojiArr.sort(()=>Math.random() - .5)])
    },[start])
    function handleStart(){
        data.forEach((elem)=>{
            elem.stat = 'inactive'
           
        })
        setdata([...data])
        setstart(!start);
    }
    function handleClick(ind){
       let x= data.filter((element,ind)=>{
          return element.stat == "active"
        })
        
        if(prev === -1){
            setprev(ind);
            data[ind].stat = "active";
            setdata([...data]);
        }
        else{
            data[ind].stat = "active";
            setdata(pre=>[...data]);
           if(data[ind].sign === data[prev].sign){
                data[ind].stat = "active";
                data[prev].stat = "active";
                setdata(pre=>[...data]);
                setprev(pre=>-1);
                setTimeout(()=>{
                    if(x.length == data.length -1){
                        setwin(true)
                    }
                },1000)
           }
           else{
            setTimeout(()=>{
                data[ind].stat = "inactive";
                data[prev].stat = "inactive";
                setdata([...data]);
                setprev(pre=>-1)
            },1200)
           }
        }
    }

  return (
    <div>
        <div className="bg">
            <button onClick={handleStart}>Start game</button>
            <div className="container">
                {
                    data?.map((element,ind)=>{
                       return (
                        <div className={"card-wrapper"} key={ind} onClick={()=>handleClick(ind)}>
                            <div className={'card ' + element.stat}>
                                {element.sign}
                            </div>
                        </div>   
                    )
                    })
                }
            </div>
            {
                winner 
                ? 
                <div className='winner-wrapper' onClick={()=>setwin(false)}>
                <div className="winner-pop">
                    <h1>🥇</h1>
                    <h1>
                        You win the match.
                    </h1>
                </div>
            </div>
                :
                ""
            }
            
        </div>
    </div>
  )
}
