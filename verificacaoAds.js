


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
		id: "881-867-1827",
		orc: 20,
	}

	let faganello = {
		name: 'Faganello Móveis Planejados',
		id: "531-136-0929",
		orc: 90,
	}

	let dgplanejados = {
		name: 'DG Planejados',
		id: 123231,
		orc: 231, //planejados = 140, orleans = 71, homedesign = 30
	}

	let vistalago = {
		name: 'Vista Lago',
		id: "765-020-6842",
		orc: 50,
	}

	let casaedesign = {
		name: 'Casa & Design',
		id: "239-956-4162",
		orc: 40,
	}

	let quecasa = {
		name: 'Que Casa',
		id: "343-624-5937",
		orc: 20,
	}

	let progettare = {
		name: 'Progettare Ambientes',
		id: "253-653-7496",
		orc: 20,
	}

	let dellamore = {
		name: "Dell'Amore",
		id: "677-449-4778",
		orc: 20,
	}

	let montserrat = {
		name: 'Montserrat',
		id: "995-647-7207",
		orc: 20,
	}

	let casabonita = {
		name: 'Casa Bonita',
		id: "334-252-5919",
		orc: 95,
	}

	let deseo = {
		name: 'Deseo Interiores',
		id: "413-649-6358",
		orc: 20,
	}

	let sap = {
		name: 'SAP',
		id: 123231,
		orc: 30,
	}

	let amare = {
		name: 'Amare',
		id: "568-729-1942",
		orc: 20,
	}

	let favaretto = {
		name: 'Favaretto',
		id: 881 - 867 - 1827,
		orc: 20,
	}
	let jeremias = {
		name: 'Paulo Jeremias Imoveis',
		id: '771-955-1280',
		orc: 20,
	}
	let encorda = {
		name: 'Encorda',
		id: "881 -  867 - 1827",
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
		adsId = duetto.id;



	}
	else if (company === 'Faganello') {
		custoDiario = faganello.orc
		company = faganello.name;
		adsId = faganello.id;


	}
	else if (company === 'DG Planejados') {
		custoDiario = dgplanejados.orc;
		company = dgplanejados.name;
		adsId = dgplanejados.id


	}
	else if (company === 'Vista Lago') {
		custoDiario = vistalago.orc;
		company = vistalago.name;
		adsId = vistalago.id

	}
	else if (company === 'Casa & Design') {
		custoDiario = casaedesign.orc;
		company = casaedesign.name;
		adsId = casaedesign.id

	}
	else if (company === 'Que Casa') {
		custoDiario = quecasa.orc;
		company = quecasa.name;
		adsId = quecasa.id

	}
	else if (company === 'Progettare') {
		custoDiario = progettare.orc;
		company = progettare.name;
		adsId = progettare.id

	}
	else if (company === "Dell'Amore") {
		custoDiario = dellamore.orc;
		company = dellamore.name;
		adsId = dellamore.id

	}
	else if (company === 'Montserrat') {
		custoDiario = montserrat.orc;
		company = montserrat.name;
		adsId = montserrat.id

	}
	else if (company === 'Casa Bonita') {
		custoDiario = casabonita.orc;
		company = casabonita.name;
		adsId = casabonita.id
	}
	else if (company === 'Deseo Interiores') {
		custoDiario = deseo.orc;
		company = deseo.name;
		adsId = deseo.id
	}
	else if (company === 'Sap') {
		custoDiario = sap.orc;
		company = sap.name;
		adsId = sap.id
	}
	else if (company === 'Amare') {
		custoDiario = amare.orc;
		company = amare.name;
		adsId = amare.id
	}
	else if (company === 'Paulo Jeremias') {
		custoDiario = jeremias.orc;
		company = jeremias.name;
		adsId = jeremias.id
	}
	else if (company === 'Favaretto') {
		custoDiario = favaretto.orc;
		company = favaretto.name;
		adsId = favaretto.id
	}
	else if (company === 'Encorda') {
		custoDiario = encorda.orc;
		company = encorda.name;
		adsId = encorda.id
	}



	console.log(custoDiario)

	let saldoInput = document.getElementById("saldoInputid");
	let saldoFloat = parseFloat(saldoInput.value);
	saldo = saldoFloat.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });




	if (saldoInput.value != "") {
		console.log('sem format:' + saldoInput.value + '   saldo formatado:' + saldo);

	}
	else {
		console.log('algo errado')

		alert('Orraz, tais querenu inbica sem bota o saldo ehh?')
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








	//Desabilitando o botão


	const ultimaVerificacao = dataAtual
	document.getElementById('showEmpresa').innerHTML = `Empresa: ${company} ( ${adsId} )`
	document.getElementById('showConta').innerHTML = `GOOGLE ADS`
	document.getElementById('showSaldo').innerHTML = `Saldo Atual: ${saldo}`
	document.getElementById('showDiasRestantes').innerHTML = `Dias Restantes: ${Math.floor(diasRestantes)}`
	if (saldoFloat <= 1) {
		document.getElementById('showExpiraSaldo').innerHTML = `Saldo expira em: Atenção! conta sem saldo! `
	} else {
		document.getElementById('showExpiraSaldo').innerHTML = `Saldo expira em: ${expiraSaldo}/${mes}`
	}
	document.getElementById('showDataAtual').innerHTML = `Ultima verificação: ${getDayOfWeek(Date.now())} ${dataAtual}/${mesAtual}`

	/*
	
		btn = document.createElement("BUTTON");
		btn.innerHTML = "Copy";
		btn.className = "btnCopy";
		var copyT = document.getElementById("myInput");
		copyT.appendChild(btn)
		copyT.addEventListener("click", copyClipboard);
		//document.body.appendChild(btn);*/
	return saldoInput
}



function whats() {


	copyText = document.querySelectorAll(".copy")
	e = copyText[1].innerText;
	r = copyText[2].innerText;
	t = copyText[3].innerText;
	y = copyText[4].innerText;
	u = copyText[5].innerText;
	i = copyText[6].innerText;
	ha = `${e} \n ${r} \n ${t} \n ${y} \n ${u} \n ${i}`

	alert("Copied the text: " + ha);

	navigator.clipboard.writeText(ha)
	/*for(var i = 0; i < copyText.length; i++) {
		navigator.clipboard.writeText(copyText[i].innerText);
		alert("Copied the text: " + copyText[i].innerText);
	
	}*/


	//window.location.href = "https://api.whatsapp.com/send/?phone=5548996794524/?text=Olatudobem";


}














