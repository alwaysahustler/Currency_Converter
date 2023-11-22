URL="https://api.currencyapi.com/v3/latest?apikey=cur_live_TJFnsmPL7RAGzfG6Vld3fnVWJUOEdHImN5np1E0I";
import CurrencyAPI from '@everapi/currencyapi-js';


const currencyApi = new CurrencyAPI('cur_live_TJFnsmPL7RAGzfG6Vld3fnVWJUOEdHImN5np1E0I');


document.addEventListener('DOMContentLoaded', function () {
    const convertButton = document.querySelector('.button');

    convertButton.addEventListener('click', () => {
        const amount = document.getElementById('amount').value.trim();
        const fromCurrency = document.getElementById('from').value;
        const toCurrency = document.getElementById('to').value;

        currencyApi.latest({
            base_currency: fromCurrency,
            currencies: toCurrency
        }).then(response => {
            displayResult(response, amount, fromCurrency, toCurrency);
        }).catch(error => {
            console.error('API Error:', error);
        });
    });

    function displayResult(response, amount, fromCurrency, toCurrency) {
        const resultDisplay = document.querySelector('.latest_rates_display');
        const result = response.data[toCurrency].value * amount;
        resultDisplay.innerHTML = `<div>${amount} ${fromCurrency} = ${result.toFixed(2)} ${toCurrency}</div>`;
    }
});
