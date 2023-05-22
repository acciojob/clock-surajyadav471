//your JS code here. If required.
function updateClock(){
	let now=new Date();
            let output=now.getMonth()+"/"+now.getDate()+"/"+now.getFullYear()+", "+now.getHours()+":"+now.getMinutes()+":"+now.getSeconds();
            let timer=document.getElementById("timer");
            timer.innerHTML=output;
            setTimeout(updateClock,1000);
		}

		updateClock();