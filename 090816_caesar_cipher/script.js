function caesarSalad () {
	var input = document.getElementById("name").innerHTML;
	//var input = "test";
	//alert(input);
}

function convertFunction() {
	    //document.getElementById("frm1").submit();
	    // alert('hello');
	    var x = document.getElementById("first").value;
	    alert(x);
	    // document.getElementById('namefirst').innerHTML = x;
	    rot13(x);
}

//CAESAR CIPHER ROT13 CONVERSION ALGORITHM
function rot13(str) {
	var arrCode = [];//PUSH CONVERTED ROT13 CHARACTER OF STR INTO EMPTY ARRAY
	var strCode;
	var newStrCode;
	var convertedStrCode;
	var upperCaseStr;
	var newStr;
	var convertedToCaesar;
	// newStr = "'" + str + "'";
	// console.log(newStr);
	upperCaseStr = str.toUpperCase();
	console.log(upperCaseStr);


	for (var i = 0; i < upperCaseStr.length; i++) {
		strCode = upperCaseStr.charCodeAt(i);

		
		if (strCode >= 65 && strCode <= 77) {
			newStrCode = strCode + 13;
			convertedStrCode = String.fromCharCode(newStrCode);
			console.log(str[i] + ' = ' + (newStrCode) + ' = ' + convertedStrCode);
			arrCode.push(convertedStrCode);
			//console.log(arrCode);
		}

		else if (strCode >= 78 && strCode <= 90) {
			newStrCode = strCode - 13;
			convertedStrCode = String.fromCharCode(newStrCode);
			console.log(str[i] + ' = '+ (newStrCode) + ' = ' + String.fromCharCode(newStrCode));
			arrCode.push(convertedStrCode);
			//console.log(arrCode);
		}
		else {
			convertedStrCode = String.fromCharCode(strCode);
			console.log(str[i] + ' = ' + strCode + ' = ' + convertedStrCode);
			arrCode.push(convertedStrCode);
			//console.log(arrCode);
		}
	}

	console.log(arrCode);
	convertedToCaesar = arrCode.join('');
	console.log(convertedToCaesar);
	document.getElementById('namefirst').innerHTML = convertedToCaesar;

}
