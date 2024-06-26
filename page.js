'use client'
import { Button } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'


const Lottery = () => {
    const lotteryOptions = ['💥','🍒', '💥', '🍋', '💥', '💥','🍌', '💥', '💥']

    const [randomNum, setRandomNum] = useState(null)
    //create extra state isPaused which by default should be false
    useEffect(() => {
        setTimeout(()=>{
            const tempNum = Math.floor(Math.random() * lotteryOptions.length)
            if(tempNum == randomNum){
                setRandomNum(randomNum + 1)
            }else{
                setRandomNum(tempNum)
            }

        }, 50)
      }, [randomNum]);
  return (
    <div>
              {lotteryOptions[randomNum] == '💥' ? 'You lost' : 'Congrats you won'+lotteryOptions[randomNum]  }
        <div className='bg-black w-10 m-10'>

            {lotteryOptions.map((item,id)=>{
                return(
                    <div style={{backgroundColor: id ===randomNum ? 'red': null}} className='text-4xl text-white rounded-sm my-4'>
                       {item}
                    </div>
                )
            })}
        </div>
        <Button>Pause</Button>
    </div>
  )
}

export default Lottery