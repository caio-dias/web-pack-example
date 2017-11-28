function bar1() {
	console.log('bar1');
}

function bar2() {
	console.log('bar2');
}

function bar3() {
	console.log('bar3');
}

//setando apenas o que será exportado para o index.js, bar3 não será exportado, se tentar chamar ele em qualquer lugar, não irá funcionar.
export {bar1, bar2}