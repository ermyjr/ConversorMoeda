const button = document.getElementById('convert-button')
const select = document.getElementById('currency-select')
const dolar = 5.2
const euro = 5.9
const btc = 119248.22


const convertValues = () => {
    const inputReal = document.getElementById('input-real').value
    const realValueText = document.getElementById('real-text-value')
    const currencyValueText = document.getElementById('currency-text-value')

    realValueText.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(inputReal)
    if (select.value === 'US$ Dolar Americano') {
        currencyValueText.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(inputReal / dolar)
    }
    if (select.value === '€ Euro') {

        currencyValueText.innerHTML = new Intl.NumberFormat('de-De', {
            style: 'currency',
            currency: 'EUR',
        }).format(inputReal / euro)
    }

    if (select.value === 'BitCoin') {
        currencyValueText.innerHTML = (inputReal / btc)
    }

}
changeCurrency = () => {

    const currencyName = document.getElementById('currency-name')
    const currencyImg = document.getElementById('currency-img')

    if (select.value === '€ Euro') {
        currencyName.innerHTML = 'Euro'
        currencyImg.src = './assets/Design sem nome 1.png'
    }

    if (select.value === 'US$ Dolar Americano') {
        currencyName.innerHTML = 'Dolar Americano'
        currencyImg.src = './assets/estados-unidos (1) 1.png'
    }
    if (select.value === 'BitCoin') {
        currencyName.innerHTML = 'BTC'
        currencyImg.src = './assets/btc.png'
    }


    convertValues()

}


button.addEventListener('click', convertValues)
select.addEventListener('change', changeCurrency);