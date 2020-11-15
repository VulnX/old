function ascii2hex() {
	var str = document.getElementById('ASCII').value;
	var arr1 = [];
	for (var i = 0; i < str.length; i++) {
		var ascii = "0x"
		ascii = ascii.concat(Number(str.charCodeAt(i)).toString(16));
		ascii = ascii.concat(' ');
		arr1.push(ascii);
	}
	document.getElementById('HEX').value = arr1.join('');
}