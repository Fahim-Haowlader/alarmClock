let alarmTime = document.querySelectorAll('input')

setInterval(() => {
    let days = ["sun", 'mon', 'tuse', 'wednes', 'thurs', 'fri', 'satur']
    let months = ['january', 'February', 'march', 'april', 'may', 'june', 'july', 'augest', 'september', 'octorber', 'november', 'december']
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let day = time.getDay();
    let date = time.getDate();
    let month = time.getMonth() + 1;
    let year = time.getFullYear();


    let htmlTime = document.getElementById('time')


    htmlTime.innerText = `${hours} : ${minutes} : ${seconds} `
    document.getElementById('date').innerText = `${days[day]}, ${months[month]} ${date}, ${year} `
}, 1000)

let setTime = document.getElementById('setTime')

setTime.innerText = " Has not set a alarm "
document.querySelector('button').addEventListener('click', () => {
    let time = new Date();
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let timeLeft = ((Number.parseInt(alarmTime[0].value) - hours) * 3600 + (Number.parseInt(alarmTime[1].value) - minutes) * 60 + (Number.parseInt(alarmTime[2].value) - seconds)) * 1000
    console.log(timeLeft)
    let timeLeft2 =((24 - hours) * 3600 + (60 - minutes) * 60 + (60 - seconds))
    console.log(timeLeft2)



    console.log(alarmTime[0].value)


    if (alarmTime[0].value == "0" && alarmTime[1].value == '0' && alarmTime[2].value == '0') {
        setTime.innerText = `successfully alarm set at  Next Day`
        setTime.style.color = "green"
        setTimeout(() => {
            let alarm = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3')
            alarm.play()
        }, timeLeft2*1000)
    }
    else {
        if (alarmTime[0].value < hours) {
            console.log('problem in hour')
            console.log('you can not go backword because time has not invented yet ')
            setTime.innerText = " you can not go backword because time has not invented yet  "
            setTime.style.color = "red"
        }
        else if (alarmTime[0].value > hours) {    setTime.innerText = `successfully alarm set at ${alarmTime[0].value} ; ${alarmTime[1].value} : ${alarmTime[2].value}`
        setTime.style.color = "green"
        setTimeout(() => {
            let alarm = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3')
            alarm.play()


        }, timeLeft)}
        else {
            if (alarmTime[1].value < minutes) {
                console.log('problem in minute')
                console.log('you can not go backword because time has not invented yet ')
                setTime.innerText = " you can not go backword because time has not invented yet  "
                setTime.style.color = "red"

            }
            else if (alarmTime[1].value > minutes) {
                setTime.innerText = `successfully alarm set at ${alarmTime[0].value} ; ${alarmTime[1].value} : ${alarmTime[2].value}`
                setTime.style.color = "green"
                setTimeout(() => {
                    let alarm = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3')
                    alarm.play()


                }, timeLeft)
            }

        else {
                if ( alarmTime[2].value < seconds) {
                    console.log('problem in hour')
                    console.log('you can not go backword because time has not invented yet ')
                    setTime.innerText = " you can not go backword because time has not invented yet  "
                    setTime.style.color = "red"

                }
                else {
                    setTime.innerText = `successfully alarm set at ${alarmTime[0].value} ; ${alarmTime[1].value} : ${alarmTime[2].value}`
                    setTime.style.color = "green"
                    setTimeout(() => {
                        let alarm = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3')
                        alarm.play()


                    }, timeLeft)
                }
            }
        }
    }
})


console.log(alarmTime[0].value)

