const USD = 5.31
const EUR = 6.17
const GBP = 7

const form = document.querySelector("form")
const currency = document.querySelector("#currency")
const amount = document.querySelector("#amount")
const footer = document.querySelector("main footer")
const description = document.querySelector("#description")
const result = document.querySelector("#result")



amount.addEventListener("input", () => {

    const charactersRegex = /\D+/g
    amount.value = amount.value.replace(charactersRegex, "")

})

form.onsubmit = (event) => {
    event.preventDefault()

    switch (currency.value){
        case "USD":
            convertCurrency(amount.value, USD, "US§")
            break
        case "EUR":
            convertCurrency(amount.value, EUR, "€")
            break
        case "GBP":
            convertCurrency(amount.value, EUR, "£")
            break
    }

}

function convertCurrency(amount, price, symbol){
    try{
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)} `

        let total = amount * price
        total = (formatCurrencyBRL(total))
        result.textContent = total
      
        
        
        footer.classList.add("show-result")
        
    }catch (error){
        console.log(error)
        footer.classList.remove("show-result")
        alert("Try again")
    }

}

function formatCurrencyBRL(value){
    return Number(value).toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
    })

}