const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")

let init = 0 

const botSay = (data) => {
    return ["Perkenalkan nama saya qiwBot, siapa nama kamu?",
    `Hallo ${data?.nama}, berapa usia kamu?`,
    `Ohhhh umur kamu ${data?.usia},hobi kamu apaa?`,
    `Wawwww ${data?.hobi} itu hobi yang sangat menyenangkan, btw kamu punya pacar gak?`,
    `Ohhh ${data?.pacar}, oke kalau begitu.`
]
    
    
}
pertanyaan.innerHTML = botSay()[0]

let userData = []

function botStart() {
    init++
    if (init === 1) {
        botDelay({ nama: jawaban.value})
    } else if (init === 2) {
        botDelay({ usia: jawaban.value})
    } else if (init === 3) {
        botDelay({ hobi: jawaban.value})
    } else if (init === 4) {
        botDelay({ pacar: jawaban.value})
    } else if (init === 5) {
        finishing()
    } else {
        botEnd()
    }
}

function botDelay(jawabanUser) {
    setTimeout(() => {
        pertanyaan.innerHTML = botSay(jawabanUser)[init]
    }, [1200])
    userData.push(jawaban.value)
    jawaban.value = ""
}

function finishing() {
    pertanyaan.innerHTML = `Thankyou yaa ${userData[0]} udah main ke qiwBot, kali kali kita ${userData[2]} bareng yaa 😉`
    jawaban.value = ""
}

function botEnd() {
    window.location.reload()
}
