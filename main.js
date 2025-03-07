
function isValidUrl(url) {
// return /^(https?:\/\/)([^:/]+)(?::(\d+))?([^?#]*)(\?[^#]*)?(#.*)?$/gi.test(url);
return /^(https?:\/\/)?(www\.)?([\w-]+\.)+[\w-]{2,}(\/[^\s]*)?$/i.test(url)
}

console.log(isValidUrl('https://www.example.com')) // Повинно вивести: true
console.log(isValidUrl('invalid-url'))             // Повинно вивести: false
console.log(isValidUrl('httphttphttps://www.example.com')) // Повинно вивести: false
console.log(isValidUrl('s://www.example.com/aaaaa')) // Повинно вивести: false
console.log(isValidUrl('google.com')) // Повинно вивести: true
