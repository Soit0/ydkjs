const TAX_RATE =  1.21
const PHONE_PRICE = 399.99
const ACCESSORY_PRICE = 49.99

var bank_account_balance = prompt("How much money do can I spend on those phone(s) ? ")
var spending_threshold = prompt('And how much on the accessories ?')
var purchase = {
	price: 0,
	phoneCount: 0,
	accessoryCount: 0
}
while(purchase.price < bank_account_balance) {
	purchase.price += PHONE_PRICE
	purchase.phoneCount ++
	if(purchase.price < spending_threshold) {
	purchase.price += ACCESSORY_PRICE
	purchase.accessoryCount ++
	}
}

function calculateTax(amount) {
	return amount * TAX_RATE
}

function formatPrice(price) {
	return price.toFixed(2)
}


console.log('Basket price is : ' + formatPrice(calculateTax(purchase.price)) + ', you have ' + purchase.phoneCount + ' phone(s) and ' + purchase.accessoryCount + ' accessorie(s)')

if(purchase.price > bank_account_balance) {
	console.log('You can\'t afford this purchase')
} else {
	console.log('Enjoy !')
}
