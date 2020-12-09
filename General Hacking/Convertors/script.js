function copy() {
	object = document.getElementById('HEX');
	object.select();
	object.setSelectionRange(0, 99999);
	document.execCommand("copy");
	document.getElementById('copy').innerHTML = "Copied";
	setTimeout(function() {
		document.getElementById('copy').innerHTML = "Copy Text";
	}, 2500);
}

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
	if (!(document.getElementById('HEX').value == "")) {
		document.getElementById('copy').style.display = "block";
	}
}