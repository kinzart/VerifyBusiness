document.addEventListener('DOMContentLoaded', function () {
	var elems = document.querySelectorAll('.tooltipped');
	var instances = M.Tooltip.init(elems, options);
});



function Enviar() {

	// PROCURANDO O DIA DA SEMANA 
	function getDayOfWeek(date) {
		const dayOfWeek = new Date(date).getDay();
		return isNaN(dayOfWeek) ? null :
			['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'][dayOfWeek];
	}

	console.log("Hoje é " + getDayOfWeek(Date.now()) + "!");


	// SELECIONANDO EMPRESA
	function getCompany() {
		company = document.getElementById("whichCompany").value;
	}
	getCompany()








	//Declarando (obj) Propriedades da empresa

	let duetto = {
		name: 'Duetto Ambientes',
		id: 123231,
		orc: 20,
	}

	let faganello = {
		name: 'Faganello Móveis Planejados',
		id: 1232314,
		orc: 20,
	}

	let dgplanejados = {
		name: 'DG Planejados',
		id: 123231,
		orc: 231, //planejados = 140, orleans = 71, homedesign = 30
	}

	let vistalago = {
		name: 'Vista Lago',
		id: 123231,
		orc: 20,
	}

	let casaedesign = {
		name: 'Casa & Design',
		id: 123231,
		orc: 20,
	}

	let quecasa = {
		name: 'Que Casa',
		id: 123231,
		orc: 20,
	}

	let progettare = {
		name: 'Progettare Ambientes',
		id: 123231,
		orc: 20,
	}

	let dellamore = {
		name: "Dell'Amore",
		id: 123231,
		orc: 20,
	}

	let montserrat = {
		name: 'Montserrat',
		id: 123231,
		orc: 20,
	}

	let casabonita = {
		name: 'Casa Bonita',
		id: 123231,
		orc: 20,
	}

	let deseo = {
		name: 'Deseo Interiores',
		id: 123231,
		orc: 20,
	}

	let sap = {
		name: 'SAP',
		id: 123231,
		orc: 30,
	}

	let amare = {
		name: 'Amare',
		id: 123231,
		orc: 20,
	}

	//dg = [planejados = 140, orleans = 71, homedesign = 30]
	//faganello = [floripa = 50, itapema = 40]







	//Declarando o custo 
	var custoDiario = 0;       //faganello[0 + 1]

	//Testando qual empresa
	if (company === 'Duetto Ambientes') {
		custoDiario = duetto.orc;
		company = duetto.name;



	}
	else if (company === 'Faganello') {
		custoDiario = faganello.orc
		company = faganello.name;

	}
	else if (company === 'DG Planejados') {
		custoDiario = dgplanejados.orc;
		company = dgplanejados.name;
		console.log('EITA')

	}
	else if (company === 'Vista Lago') {
		custoDiario = vistalago.orc
		company = vistalago.name;

	}
	else if (company === 'Casa & Design') {
		custoDiario = casaedesign.orc
		company = casaedesign.name;

	}
	else if (company === 'Que Casa') {
		custoDiario = quecasa.orc
		company = quecasa.name;

	}
	else if (company === 'Progettare') {
		custoDiario = progettare.orc
		company = progettare.name;

	}
	else if (company === "Dell'Amore") {
		custoDiario = dellamore.orc
		company = dellamore.name;

	}
	else if (company === 'Montserrat') {
		custoDiario = montserrat.orc
		company = montserrat.name;

	}
	else if (company === 'Casa Bonita') {
		custoDiario = casabonita.orc
		company = casabonita.name
	}
	else if (company === 'Deseo Interiores') {
		custoDiario = deseo.orc
		company = deseo.name
	}
	else if (company === 'Sap') {
		custoDiario = sap.orc
		company = sap.name
	}
	else if (company === 'Amare') {
		custoDiario = amare.orc
		company = amare.name
	}



	console.log(custoDiario)

	let saldoInput = document.getElementById("saldoInputid");
	let saldoFloat = parseFloat(saldoInput.value);
	let saldo = saldoFloat.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });




	if (saldoInput.value != "") {
		console.log('sem format:' + saldoInput.value + '   saldo formatado:' + saldo);
	}
	else {
		console.log('algo errado')
	}








	/*Verificando a data*/
	var data = new Date(); //pegar dados da data
	var dia = String(data.getDate()).padStart(2, '0');
	var mes = String(data.getMonth() + 1).padStart(2, '0');
	var dataAtual = dia;
	var mesAtual = mes;

	diasRestantes = saldoFloat / custoDiario;
	diasRest = parseInt(diasRestantes);

	expiraSaldo = parseInt(diasRestantes + parseInt(dataAtual));
	if (expiraSaldo > 30) {
		expiraSaldo = (expiraSaldo - 30)
		mes = String(data.getMonth() + 2).padStart(2, '0');
		//para 2 meses basta fazer uma condição > 60 e expiraSaldo -60
	}

	const ultimaVerificacao = dataAtual
	document.getElementById('showEmpresa').innerHTML = `Empresa: ${company}`
	document.getElementById('showConta').innerHTML = `FACEBOOK BUSINESS`
	document.getElementById('showSaldo').innerHTML = `Saldo Atual: ${saldo}`
	document.getElementById('showDiasRestantes').innerHTML = `Dias Restantes: ${Math.floor(diasRestantes)}`
	if (saldoFloat <= 1) {
		document.getElementById('showExpiraSaldo').innerHTML = `Saldo expira em: Atenção! conta sem saldo! `
	} else {
		document.getElementById('showExpiraSaldo').innerHTML = `Saldo expira em: ${expiraSaldo}/${mes}`
	}
	document.getElementById('showDataAtual').innerHTML = `Ultima verificação: ${getDayOfWeek(Date.now())} ${dataAtual}/${mesAtual}`



	return saldoInput
}


















