const tableHeader = document.querySelector('thead');
const tableBody = document.querySelector('tbody');
const filterCategory = document.getElementById('filter');
const level = document.getElementById('level')
const version = document.getElementById('version')
const resultsElement = document.getElementById('returnedResults');
const tests = wcagObj['criterion'];
const headers = ['understandingCriteria', 'wcagLevel', 'wcagVersion', 'goal', 'intent', 'benefits', 'verification', 'verification', 'tools', 'category']
const checks = ['understandingCriteria', 'wcagLevel', 'wcagVersion', 'goal', 'category']
let lang = 'en'
const headings = {
	understandingCriteria : {
		cat: 'Criteri',
		es: 'Criterio',
		'en': 'Criteria'
	},
	wcagLevel: {
		cat: 'Nivell',
		es: 'Nivel',
		en: 'Level'
	},
	wcagVersion : {
		cat: 'Versió',
		es: 'Versión',
		en: 'Version'
	},
	goal : {
		cat: 'Objectiu',
		es: 'Objetivo',
		en: 'Goal'
	},
	intent : {
		cat: 'Intent',
		es: 'Intent',
		en: 'Intent'
	},
	benefits : {
		cat: 'Beneficis',
		es: 'Beneficios',
		en: 'Benefits'
	},
	verification : {
		cat: 'Verificació',
		es: 'Verificación',
		en: 'Verification'
	},
	tools : {
		cat: 'Eines',
		es: 'Herramientas',
		en: 'Tools'
	},
	category : {
		cat: 'Categoria',
		es: 'Categoría',
		en: 'Category'
	}
} 

function populateTable() {
	const filterLevel = level.innerHTML.split(",")
	const filterVersion = version.innerHTML.split(",")
	let returnedResults = 0;
	tableHeader.innerHTML = ''
	tableBody.innerHTML = '';
	
	const tableHeaderRow = document.createElement('tr');
	for (let j = 0; j < headers.length; j++) {
		console.log(headings[headers[j]][lang])
		let tableHeader = document.createElement('th');
		let headerText = document.createTextNode(headings[headers[j]][lang])
		tableHeader.appendChild(headerText)
		tableHeaderRow.appendChild(tableHeader)
	}
	tableHeader.appendChild(tableHeaderRow);

	for (let i = 0; i < tests.length; i++) {
		if ((tests[i].category.includes(filterCategory.innerHTML) || filterCategory.innerHTML == 'all') && (filterLevel.find(item => item === tests[i].wcagLevel) || filterLevel[0] === 'All' ) && (filterVersion.find(item => item === tests[i].wcagVersion) || filterVersion[0] === 'All' )) {
			const tableRow = document.createElement('tr');
			for (let key in tests[i]) {
				if (tests[i].hasOwnProperty(key)) {
					if (key !== 'link' && (key == 'understandingCriteria' || (checks.find(item => item === key)))) {
						let val = tests[i][key];
						let tableData = document.createElement('td');

						if (key === 'understandingCriteria') {
							const a = document.createElement('a');
							let linkText;
							switch (lang) {
								case 'cat':
									linkText = document.createTextNode(tests[i][key].cat);
									break;
								case 'es':
									linkText = document.createTextNode(tests[i][key].es);
									break;
								case 'en':
									linkText = document.createTextNode(tests[i][key].en);
									break;
								default:
									linkText = document.createTextNode(tests[i][key].en);
									break;
							}
							
							a.appendChild(linkText);
							a.title = val
							a.target = '_blank';
							a.href = tests[i].link;
							tableData.appendChild(a);
						}
						else if (key === 'wcagLevel') {
							let cssSpan;
							switch (val) {
								case 'A':
									cssSpan = document.createElement('span');
									cssSpan.textContent = val;
									['bg-info', 'text-dark', 'badge', 'rounded-pill' ].forEach(item => {
										cssSpan.classList.add(item);
									})
									/*cssSpan.classList.add('bg-info');
									cssSpan.classList.add('text-dark');
									cssSpan.classList.add('badge');
									cssSpan.classList.add('rounded-pill');*/
									tableData.appendChild(cssSpan);
									break;
								case 'AA':
									cssSpan = document.createElement('span');
									cssSpan.textContent = val;
									cssSpan.classList.add('bg-warning');
									cssSpan.classList.add('text-dark');
									cssSpan.classList.add('badge');
									cssSpan.classList.add('rounded-pill');
									tableData.appendChild(cssSpan);
									break;
								case 'AAA':
									cssSpan = document.createElement('span');
									cssSpan.textContent = val;
									cssSpan.classList.add('bg-danger');
									cssSpan.classList.add('badge');
									cssSpan.classList.add('rounded-pill');
									tableData.appendChild(cssSpan);
									break;
								default:
									tableData.textContent = val;
									break;
							}
						}
						else if (key === 'goal') {
							const p = document.createElement('p');
							let text;
							switch (lang) {
								case 'cat':
									text = document.createTextNode(tests[i][key].cat);
									break;
								case 'es':
									text = document.createTextNode(tests[i][key].es);
									break;
								case 'en':
									text = document.createTextNode(tests[i][key].en);
									break;
								default:
									text = document.createTextNode(tests[i][key].en);
									break;
							}
							
							p.appendChild(text);
							tableData.appendChild(p);
						}
						else if (key === "intent") {
							let p
							let text
							switch (lang) {
								case 'cat':
									p = document.createElement('p');
									text = document.createTextNode(val.cat);
									p.appendChild(text);
									tableData.appendChild(p);
									break;
								case 'es':
									p = document.createElement('p');
									text = document.createTextNode(val.es);
									p.appendChild(text);
									tableData.appendChild(p);
									break;
								case 'en':
									p = document.createElement('p');
									text = document.createTextNode(val.en);
									p.appendChild(text);
									tableData.appendChild(p);
									break;
								default:
									p = document.createElement('p');
									text = document.createTextNode(val.en);
									p.appendChild(text);
									tableData.appendChild(p);
									break;
							}
						}
						else if (key === 'benefits') {
							const ul = document.createElement('ul');
							let lista
							switch (lang) {
								case 'cat':
									lista = val.cat.split("#")
									lista.forEach(element => {
										const li = document.createElement('li');
										const liText = document.createTextNode(element);
										li.appendChild(liText);
										ul.appendChild(li)
									});
									break;
								case 'es':
									lista = val.es.split("#")
									lista.forEach(element => {
										const li = document.createElement('li');
										const liText = document.createTextNode(element);
										li.appendChild(liText);
										ul.appendChild(li)
									});
									break;
								case 'en':
									lista = val.en.split("#")
									lista.forEach(element => {
										const li = document.createElement('li');
										const liText = document.createTextNode(element);
										li.appendChild(liText);
										ul.appendChild(li)
									});
									break;
								default:
									lista = val.en.split("#")
									lista.forEach(element => {
										const li = document.createElement('li');
										const liText = document.createTextNode(element);
										li.appendChild(liText);
										ul.appendChild(li)
									});
									break;
							}
							tableData.appendChild(ul);
						}
						else if (key === 'verification') {
							const ul = document.createElement('ul');
							let lista
							switch (lang) {
								case 'cat':
									lista = val.cat.split("#")
									lista.forEach(element => {
										const li = document.createElement('li');
										const liText = document.createTextNode(element);
										li.appendChild(liText);
										ul.appendChild(li)
									});
									break;
								case 'es':
									lista = val.es.split("#")
									lista.forEach(element => {
										const li = document.createElement('li');
										const liText = document.createTextNode(element);
										li.appendChild(liText);
										ul.appendChild(li)
									});
									break;
								case 'en':
									lista = val.en.split("#")
									lista.forEach(element => {
										const li = document.createElement('li');
										const liText = document.createTextNode(element);
										li.appendChild(liText);
										ul.appendChild(li)
									});
									break;
								default:
									lista = val.en.split("#")
									lista.forEach(element => {
										const li = document.createElement('li');
										const liText = document.createTextNode(element);
										li.appendChild(liText);
										ul.appendChild(li)
									});
									break;
							}
							tableData.appendChild(ul);
						}
						else if (key === 'tools') {
							const ul = document.createElement('ul');
							let lista
							switch (lang) {
								case 'cat':
									lista = val.cat.split("#")
									lista.forEach(element => {
										const li = document.createElement('li');
										const liText = document.createTextNode(element);
										li.appendChild(liText);
										ul.appendChild(li)
									});
									break;
								case 'es':
									lista = val.es.split("#")
									lista.forEach(element => {
										const li = document.createElement('li');
										const liText = document.createTextNode(element);
										li.appendChild(liText);
										ul.appendChild(li)
									});
									break;
								case 'en':
									lista = val.en.split("#")
									lista.forEach(element => {
										const li = document.createElement('li');
										const liText = document.createTextNode(element);
										li.appendChild(liText);
										ul.appendChild(li)
									});
									break;
								default:
									lista = val.en.split("#")
									lista.forEach(element => {
										const li = document.createElement('li');
										const liText = document.createTextNode(element);
										li.appendChild(liText);
										ul.appendChild(li)
									});
									break;
							}
							tableData.appendChild(ul);
						}
						else if (key === 'category') {
							returnedResults++;
							for (let a = 0; a < tests[i][key].length; a++) {
								cssSpan = document.createElement('span');
								cssSpan.textContent = val[a];
								cssSpan.classList.add('bg-primary');
								cssSpan.classList.add('badge');
								cssSpan.classList.add('rounded-pill');
								tableData.appendChild(cssSpan);
							}
						}
						else
						{
							let texto = document.createElement('p');
							texto.textContent = val
							tableData.appendChild(texto);
						}
						tableRow.appendChild(tableData);
						tableBody.appendChild(tableRow);
					}
				}
			}
		}
	}
	resultsElement.textContent = returnedResults;
}

function btnLang(btn) {
	lang = btn.id
	populateTable()
}

function btnCategory(btn) {
	filterCategory.textContent = btn.textContent;
	populateTable()
}

function btnLevel(btn) {
	const contentLevel = btn.textContent
	const arrayLevels = level.innerHTML.split(",")

	if (contentLevel == "All") {
		level.textContent = 'All'
	}
	else if (arrayLevels.indexOf(contentLevel) !== -1) {
		const newArray = arrayLevels.filter(item => item != contentLevel)
		level.textContent = newArray.join()
		if (level.innerHTML == "") {
			level.textContent = 'All'
		}
	}
	else {

		if (arrayLevels.indexOf('All') !== -1) {
			arrayLevels.splice(arrayLevels.indexOf('All'), 1)
			level.textContent = arrayLevels.join()
		}
		arrayLevels.push(contentLevel)
		if (arrayLevels.length === 3) {
			level.textContent = 'All'
		} else {
		level.textContent = arrayLevels.join()
		}
	}
	populateTable()
}

function btnVersion(btn) {
	const contentVersion = btn.textContent
	const arrayVersions = version.innerHTML.split(",")

	if (contentVersion == "All") {
		version.textContent = 'All'
	}
	else if (arrayVersions.indexOf(contentVersion) !== -1) {
		const newArray = arrayVersions.filter(item => item != contentVersion)
		version.textContent = newArray.join()
		if (version.innerHTML == "") {
			version.textContent = 'All'
		}
	}
	else {

		if (arrayVersions.indexOf('All') !== -1) {
			arrayVersions.splice(arrayVersions.indexOf('All'), 1)
			version.textContent = arrayVersions.join()
		}
		arrayVersions.push(contentVersion)
		if (arrayVersions.length === 3) {
			version.textContent = 'All'
		} else {
		version.textContent = arrayVersions.join()
		}
	}
	populateTable()
}

function showColumns(check){
	if (!checks.includes(check.id)){
		checks.push(check.id)
	} else if (checks.includes(check.id)){
		let index = checks.indexOf(check.id)
		checks.splice(index, 1)
	}
	populateTable()
}

populateTable()