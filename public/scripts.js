const Cards = [

    card1 = [1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,37,39,41,43,45,47,49,51,53,55,57,59,61,63],
    card2 = [2,3,6,7,10,11,14,15,18,19,22,23,26,27,30,31,34,35,38,39,42,43,46,47,50,51,54,55,58,59,62,63],
    card3 = [4,5,6,7,12,13,14,15,20,21,22,23,28,29,30,31,36,37,38,39,44,45,46,47,52,53,54,55,60,61,62,63],
    card4 = [8,9,10,11,12,13,14,15,24,25,26,27,28,29,30,31,40,41,42,43,44,45,46,47,56,57,58,59,60,61,62,63 ],
    card5 = [16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63],
    card6 = [32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63]

]

const cardsDiv = document.querySelector('#cards')
const cardsTitle = document.querySelector('#cards h2')


let result = 0
let nthCard = 0

const Magic = {

    sortCard() {

        //  Fisher–Yates shuffle
        for (let index = Cards.length; index; index--) {
            const randomIndex = Math.floor(Math.random() * index);

            const item = Cards[index - 1];

            Cards[index - 1] = Cards[randomIndex];
            Cards[randomIndex] = item;

        }
        
    },

    removeCard() {
        let cardDiv = document.querySelector('.card')
        cardDiv.remove()
    },

    calculateResult() {

        cardsTitle.innerHTML = "O número que você pensou é ..."

        const resultDiv = document.createElement('div')
        resultDiv.innerHTML = result
        resultDiv.classList.add("result")

        if(result == 0) alert('Seu número tem que ser de 1 a 63 ... Não vale pensar em  0 "zero", hein?! ')
        cardsDiv.appendChild(resultDiv)

        PlayGame.playAgain()

    },

    changeCard() {

        Magic.removeCard()

        if(nthCard == 6) return Magic.calculateResult()

        nthCard++

        if(nthCard == 1) Magic.sortCard()

        let card = Cards[nthCard-1]

        cardDiv = document.createElement('div')
        cardDiv.classList.add('card')

            card.forEach(number => {

                const numberDiv = document.createElement('div')
                numberDiv.innerHTML = number
                numberDiv.classList.add("number")

                setTimeout(() => {
                    cardDiv.appendChild(numberDiv)
                }, Math.floor(Math.random() * 100 ) + 1)

            })

        cardsDiv.appendChild(cardDiv)
        
    },

    yes() {

        let numbers = []

        const numbersDiv = document.querySelectorAll('.card div')

        numbersDiv.forEach(div => {
            const number = Number(div.innerHTML)
            numbers.push(number)
        })

        const n = Math.min.apply(null, numbers)

        result+= n

        Magic.changeCard()
    },

    no(){
        Magic.changeCard()
    }
}

const PlayGame = {
    play() {

        document.querySelector(".game").classList.add("active")
        document.querySelector(".buttons").classList.add("active")

        document.querySelector(".play").classList.remove("active")
        document.querySelector(".play-again").classList.remove("active")
        document.querySelector("h1").remove()
        document.querySelector(".links").remove()



        Magic.changeCard()

    },

    playAgain() {
        document.querySelector(".buttons").classList.remove("active")
        document.querySelector(".play-again").classList.add("active")
    }
}
