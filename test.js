var numbers = [];
var operators = [];
var opersCount = 0;
var numberCount = 0;
var example = prompt ("введите ваше урaвнение ").split("");

for(var i = 0; i < example.length; i++){
	if (example[i]== "+"){
		operators[opersCount] = "+";
		opersCount ++;
		numberCount ++;
	}
	else if (example[i]== "-"){
		operators[opersCount] = "-";
		opersCount ++; 
		numberCount ++;
	}
	else if (example[i]== "*"){
		operators[opersCount] = "*";
		opersCount ++;
		numberCount ++;  
	}
	else if (example[i]== "/"){
		operators[opersCount] = "/";
		opersCount ++;
		numberCount ++; 
	}
	else if (example[i] - 0 > 0){
		if (!(numbers[numberCount] - 0 > 0)) { numbers[numberCount] = 0;}
		numbers[numberCount] =  example[i] - 0; 
	}
	else {
		numberCount ++;
	}
}
var result = 0;
var ofset =0 ;
for (var i = 0; i < opersCount; i++){
		if(operators[i] == "*"){
			if (result == 0) { result =  (numbers[i - ofset] - 0)}
			result *= (numbers[i+1 - ofset] - 0);
	}
	else if (operators [i]=="/"){
		if (result == 0) { result =  (numbers[i - ofset] - 0)}
		result /= (numbers [i + 1 - ofset] - 0);
	}
}

for (var i = 0; i < opersCount; i++) {
var next = 0;
var previous = 0;
if (operators[i-1] == "*" || operators[i-1] == "/") { next = (numbers[i+1 - ofset] - 0)}
else if (operators[i+1] == "*" || operators[i+1] == "/") { next = (numbers[i - ofset] - 0)}
else if (result == 0) {result = (numbers[i - ofset] - 0); next = (numbers[i+1 - ofset] - 0)}
	if(operators[i] == "+"){
			result += next;
	}
	else if (operators [i]=="-"){
		result += (-1) * next;
	}
}


alert (result);