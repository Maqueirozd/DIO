function verificapalindromo (string) {
	if (!string) return;

	return string.split("").reverse().join("") === string;

}

console.log(verificapalindromo("ovo"));