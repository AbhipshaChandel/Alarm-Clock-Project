let alarm_time=document.querySelector(".alarm_time")
let alarm_audio=document.querySelector(".alarm_audio")
let alarm_status=document.querySelector(".alarm_status")
let alarm_stop=document.querySelector(".alarm_stop")
let set_time=null

function clock(){
    let now=new Date()
    let hour=now.getHours()
    let minutes=now.getMinutes()
    let seconds=now.getSeconds()
    
    hour=hour<10?"0"+hour:hour
    minutes=minutes<10?"0"+minutes:minutes
    seconds=seconds<10?"0"+seconds:seconds
    let time=hour+":"+minutes+":"+seconds
    document.querySelector(".timer").innerHTML=time

    if(set_time===`${hour}:${minutes}`){
    alarm_audio.play()
    alarm_status.innerHTML="Alarm Ringing"
    alarm_stop.style.display="inline-block"
    set_time=null
}

}

setInterval(clock,1000)


document.querySelector(".btn").addEventListener("click",()=>{
    set_time=alarm_time.value
    if(!set_time){
        alert("Set an alarm")
    }
    alarm_status.innerHTML=`Alarm set to ${set_time}`
})

alarm_stop.addEventListener("click", () => {
    alarm_audio.pause()
    alarm_audio.currentTime = 0
    alarm_status.innerHTML = "Alarm Stopped"
    alarm_stop.style.display = "none"
    set_time = null
});