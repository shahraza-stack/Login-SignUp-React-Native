// import { styled } from '@mui/system'
// import React,{useEffect, useState} from 'react'

// // type TimerProps = {
// //     countdownFrom : number,
// //     onTimeChange?(time?:number) : void
// // }

// const TimeContainer= styled('span')`
//     color:${({theme})=>theme.palette.colors.green["700"]}
// `

// export const Timer = ({countdownFrom,onTimeChange}) => {

//     const [time, setTime] = useState<number>((countdownFrom<59)?countdownFrom:59)
//     const countdown = () => {
//             return setTimeout( () => {
//                 setTime((time-1))
//             },1000)
//     }

//     useEffect(() => {
//         if(time != 0){
//             countdown()
//         }
//         onTimeChange?.(time)
//     })

//     return(
//         <TimeContainer>0:{time}</TimeContainer>
//     )
// }
