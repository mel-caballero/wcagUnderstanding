const criteria = wcagObj['criterion'];
let lang = document.documentElement.getAttribute('lang');
let total = "87";
let version = 'All';
let level = 'All';
let category = 'All';

const resume = document.getElementById('resume');
let message;

let checksAlias = [
	{
		"name" : "level",
		"alias" : {
			"ca" : "Nivell",
			"es" : "Nivel",
			"en" : "Level"
		}
	},
	{
		"name" : "version",
		"alias" : {
			"ca" : "Versió",
			"es" : "Versión",
			"en" : "Version"
		}
	},
	{
		"name" : "goal",
		"alias" : {
			"ca" : "Objectiu",
			"es" : "Objetivo",
			"en" : "Goal"
		}
	},
	{
		"name" : "intent",
		"alias" : {
			"ca" : "Intenció",
			"es" : "Intención",
			"en" : "Intent"
		}
	},
	{
		"name" : "benefits",
		"alias" : {
			"ca" : "Beneficis",
			"es" : "Beneficios",
			"en" : "Benefits"
		}
	},
	{
		"name" : "examples",
		"alias" : {
			"ca" : "Exemples",
			"es" : "Ejemplos",
			"en" : "Examples"
		}
	},
	{
		"name" : "techniques",
		"alias" : {
			"ca" : "Tècniques",
			"es" : "Técnicas",
			"en" : "Techniques"
		}
	},
	{
		"name" : "verification",
		"alias" : {
			"ca" : "Verificació",
			"es" : "Verificación",
			"en" : "Verification"
		}
	},
	{
		"name" : "tools",
		"alias" : {
			"ca" : "Eines",
			"es" : "Herramientas",
			"en" : "Tools"
		}
	},
	{
		"name" : "category",
		"alias" : {
			"ca" : "Categoria",
			"es" : "Categoría",
			"en" : "Category"
		}
	}
];

let headers = [
	{
		"name" : "criteria",
		"alias" : {
			"ca" : "Criteri",
			"es" : "Criterio",
			"en" : "Criteria"
		},
		"view" : true
	},
	{
		"name" : "link",
		"alias" : "Link",
		"view" : false
	},
	{
		"name" : "level",
		"alias" : {
			"ca" : "Nivell",
			"es" : "Nivel",
			"en" : "Level"
		},
		"view" : true
	},
	{
		"name" : "version",
		"alias" : {
			"ca" : "Versió",
			"es" : "Versión",
			"en" : "Version"
		},
		"view" : true
	},
	{
		"name" : "goal",
		"alias" : {
			"ca" : "Objectiu",
			"es" : "Objetivo",
			"en" : "Goal"
		},
		"view" : true
	},
	{
		"name" : "intent",
		"alias" : {
			"ca" : "Intenció",
			"es" : "Intención",
			"en" : "Intent"
		},
		"view" : true
	},
	{
		"name" : "benefits",
		"alias" : {
			"ca" : "Beneficis",
			"es" : "Beneficios",
			"en" : "Benefits"
		},
		"view" : false
	},
	{
		"name" : "examples",
		"alias" : {
			"ca" : "Exemples",
			"es" : "Ejemplos",
			"en" : "Examples"
		},
		"view" : false
	},
	{
		"name" : "techniques",
		"alias" : {
			"ca" : "Tècniques",
			"es" : "Técnicas",
			"en" : "Techniques"
		},
		"view" : false
	},
	{
		"name" : "verification",
		"alias" : {
			"ca" : "Verificació",
			"es" : "Verificación",
			"en" : "Verification"
		},
		"view" : false
	},
	{
		"name" : "tools",
		"alias" : {
			"ca" : "Eines",
			"es" : "Herramientas",
			"en" : "Tools"
		},
		"view" : false
	},
	{
		"name" : "category",
		"alias" : {
			"ca" : "Categoria",
			"es" : "Categoria",
			"en" : "Category"
		},
		"view" : false
	}
];

function createTable() {
	const filterLevel = level.split(",");
	const filterVersion = version.split(",");
	const tableHeader = document.getElementById('thead');
	const tableBody = document.getElementById('tbody');
  const totalHead = tableHeader.children.length;
  const totalBody = tableBody.children.length;
  
	for(let g= 0; g<totalHead; g++) {
    if (tableHeader.children.length >0 ) { tableHeader.removeChild(tableHeader.children[0]); }
  }

  for (let i = 0; i < totalBody;i++ ) {
    if (tableBody.children.length > 0 ) { tableBody.removeChild(tableBody.children[0]); }
  }

	// Create table headers
  let tr = document.createElement('tr');
	headers.forEach(item => {
    if (item.view) {
      const th = document.createElement('th')
			th.setAttribute('scope', 'column')
			th.innerHTML = item.alias[lang];
      tr.appendChild(th)
    }
  })
  tableHeader.appendChild(tr)

	// Create table body
  criteria.forEach(item => {
    tr = document.createElement('tr')
    headers.forEach(head => {
      if (head.view===true && (item.category.includes(category) || category === 'All') && (filterLevel.find(lev => lev === item.level) || filterLevel[0] === 'All') && (filterVersion.find(lev => lev === item.version) || filterVersion[0] === 'All')) {
				const a = document.createElement('a');
				let linkText;
        if (typeof item[head.name] === 'object') {
					if (head.name === 'criteria') {
						const th = document.createElement('th')
						th.setAttribute('scope', 'row');
						linkText = document.createTextNode(item.criteria[lang]);
						a.appendChild(linkText);
						a.title = item.criteria[lang];
						a.target = '_blank';
						a.href = item.link;
						th.appendChild(a);
						tr.appendChild(th);
					} else {
						const td = document.createElement('td');
						td.innerHTML = item[head.name][lang];
						tr.appendChild(td);
					}
				} else {
					const td = document.createElement('td');
					if (head.name === 'examples' && item.examples != '') {
						switch (lang) {
							case 'ca':
								linkText = document.createTextNode(item.criteria[lang] + ' Exemples');
								a.title = item.criteria[lang] + ' Exemples';
								break;
							case 'es':
								linkText = document.createTextNode(item.criteria[lang] + ' Ejemplos');
								a.title = item.criteria[lang] + ' Ejemplos';
								break;
							case 'en':
								linkText = document.createTextNode(item.criteria[lang] + ' Examples');
								a.title = item.criteria[lang] + ' Examples';
								break;
							default:
								linkText = document.createTextNode(item.criteria[lang] + ' Examples');
								a.title = item.criteria[lang] + ' Examples';
								break;	
						}
						a.appendChild(linkText);
						a.target = '_blank';
						a.href = item.examples;
						td.appendChild(a);
					}  else if (head.name === 'techniques' && item.techniques != '') {
						switch (lang) {
							case 'ca':
								linkText = document.createTextNode(item.criteria.cat + ' Tècniques');
								a.title = item.criteria.cat + ' Tècniques';
								break;
							case 'es':
								linkText = document.createTextNode(item.criteria.es + ' Tecnicas');
								a.title = item.criteria.es + ' Tecnicas';
								break;
							case 'en':
								linkText = document.createTextNode(item.criteria.en + ' Techniques');
								a.title = item.criteria.en + ' Techniques';
								break;
							default:
								linkText = document.createTextNode(item.criteria.en + ' Techniques');
								a.title = item.criteria.en + ' Techniques';
								break;	
						}
						a.appendChild(linkText);
						a.target = '_blank';
						a.href = item.techniques;
						td.appendChild(a);
					} else {
						td.innerHTML = item[head.name];
					}	
					tr.appendChild(td);
				}
      }
    });
		if (tr.firstElementChild != null){
			tableBody.append(tr);
		}
  });
	total = document.getElementById('wcagTable').rows.length - 1;
	updateResume();
}

function translateInterface() {
	const legendLang = document.getElementById('btnLang').firstElementChild;
	switch (lang) {
		case 'ca':
			legendLang.innerHTML = 'Idioma';
			break;
		case 'es':
			legendLang.innerHTML = 'Idioma';
			break;
		case 'en':
		default:
			legendLang.innerHTML = 'Language';
			break;	
	}
	const legendVersion = document.getElementById('btnVersion').firstElementChild;
	switch (lang) {
		case 'ca':
			legendVersion.innerHTML = 'Versió';
			break;
		case 'es':
			legendVersion.innerHTML = 'Versión';
			break;
		case 'en':
		default:
			legendVersion.innerHTML = 'Version';
			break;	
	}
	const legendLevel = document.getElementById('btnLevel').firstElementChild;
	switch (lang) {
		case 'ca':
			legendLevel.innerHTML = 'Nivell';
			break;
		case 'es':
			legendLevel.innerHTML = 'Nivel';
			break;
		case 'en':
		default:
			legendLevel.innerHTML = 'Level';
			break;	
	}
	const legendColumns = document.getElementById('columns').firstElementChild;
	switch (lang) {
		case 'ca':
			legendColumns.innerHTML = 'Columnes a mostrar';
			break;
		case 'es':
			legendColumns.innerHTML = 'Columnas a mostrar';
			break;
		case 'en':
		default:
			legendColumns.innerHTML = 'Show columns';
			break;	
	}
	const checks = document.getElementsByClassName('checks');
	for (i=0; i < checks.length; i++) {
		checks[i].innerHTML = checksAlias[i].alias[lang];
	}
	const legendCategory = document.getElementById('btnCategory').firstElementChild;
	switch (lang) {
		case 'ca':
			legendCategory.innerHTML = 'Categoria';
			break;
		case 'es':
			legendCategory.innerHTML = 'Categoría';
			break;
		case 'en':
		default:
			legendCategory.innerHTML = 'Category';
			break;	
	}
	updateResume();
}

function updateResume() {
	switch (lang) {
		case 'ca':
			message = 'Mostrant <span class="btn btn-info dark-text btn-sm">' + total + '</span> criteris. Versió <span class="btn btn-info btn-sm">' + version + '</span> nivell <span class="btn btn-info btn-sm">' + level + '</span>.';
		break;
		case 'es':
			message = 'Mostrando <span class="btn btn-info dark-text btn-sm">' + total + '</span> criterios. Versión <span class="btn btn-info btn-sm">' + version + '</span> nivel <span class="btn btn-info btn-sm">' + level + '</span>.';
		break;
		case 'en':
		default:
			message = 'Showing <span class="btn btn-info dark-text btn-sm">' + total + '</span> criterias. Version <span class="btn btn-info btn-sm">' + version + '</span> level <span class="btn btn-info btn-sm">' + level + '</span>.';
		break;
	}
	resume.innerHTML = message;
}

function btnLang(btn) {
	document.documentElement.setAttribute("lang", btn.id);
	lang = document.documentElement.getAttribute('lang');
	const btns = document.getElementsByClassName('language');
	for (i=0; i< btns.length; i++) {
		if (btns[i].id === btn.id) {
			btns[i].ariaPressed = 'true';
			btns[i].classList.remove('btn-secondary');
			btns[i].classList.add('btn-primary')
		} else {
			btns[i].ariaPressed = 'false';
			btns[i].classList.remove('btn-primary');
			btns[i].classList.add('btn-secondary')
		}
	}
	translateInterface();
	createTable();
}

function btnVersion(btn) {
	const versions = document.getElementsByClassName('version');
	const arrayVersions = [];
	let checker = false;

	if (btn.textContent === 'All') {
		for (i=0; i< versions.length; i++) {
			versions[i].ariaPressed = 'false';
		}
		versions[0].ariaPressed = 'true';
	} else {
		versions[0].ariaPressed = 'false';
		btn.ariaPressed === 'true' ? btn.ariaPressed = 'false' : btn.ariaPressed = 'true';
	}

	for (i=0; i< versions.length; i++) {
		if (versions[i].ariaPressed === 'true') {
			checker = true;
			versions[i].classList.remove('btn-secondary');
			versions[i].classList.add('btn-primary');
			arrayVersions.push(versions[i].textContent);
		} else {
			versions[i].ariaPressed = 'false';
			versions[i].classList.remove('btn-primary');
			versions[i].classList.add('btn-secondary');
		}
	}

	if (checker === false) {
		versions[0].ariaPressed = 'true';
		versions[0].classList.remove('btn-secondary');
		versions[0].classList.add('btn-primary');
		arrayVersions.push(versions[0].textContent);
	}
	version = arrayVersions.join();
	createTable()
}

function btnLevel(btn) {
	const levels = document.getElementsByClassName('level');
	const arrayLevels = [];
	let checker = false;

	if (btn.textContent === 'All') {
		for (i=0; i< levels.length; i++) {
			levels[i].ariaPressed = 'false';
		}
		levels[0].ariaPressed = 'true';
	} else {
		levels[0].ariaPressed = 'false';
		btn.ariaPressed === 'true' ? btn.ariaPressed = 'false' : btn.ariaPressed = 'true';
	}

	for (i=0; i< levels.length; i++) {
		if (levels[i].ariaPressed === 'true') {
			checker = true;
			levels[i].classList.remove('btn-secondary');
			levels[i].classList.add('btn-primary');
			arrayLevels.push(levels[i].textContent);
		} else {
			levels[i].ariaPressed = false;
			levels[i].classList.remove('btn-primary');
			levels[i].classList.add('btn-secondary');
		}
	}
	
	if (checker === false) {
		levels[0].ariaPressed = true;
		levels[0].classList.remove('btn-secondary');
		levels[0].classList.add('btn-primary');
		arrayLevels.push(levels[0].textContent);
	}
	level = arrayLevels.join();
	
	createTable()
}

function showColumns(check){
	headers.forEach(item => {
		if (item.name === check.id) {
			console.log(item.view)
			item.view ? item.view = false : item.view = true;
		}
	})
	createTable();
}

function btnCategory(btn) {
	category = btn.textContent;
	createTable()
}

function init() {
	const btnLang = document.getElementsByClassName('language');
	const btnVersion = document.getElementsByClassName('version')[0];
	const btnLevel = document.getElementsByClassName('level')[0];
	const btnCategory = document.getElementsByClassName('level')[0];

	for (i=0; i < btnLang.length; i++) {
		if (btnLang[i].id === lang) {
			btnLang[i].ariaPressed = 'true';
			btnLang[i].classList.remove('btn-secondary');
			btnLang[i].classList.add('btn-primary')
		}
	}

	btnVersion.ariaPressed = 'true';
	btnVersion.classList.remove('btn-secondary');
	btnVersion.classList.add('btn-primary')

	btnLevel.ariaPressed = 'true';
	btnLevel.classList.remove('btn-secondary');
	btnLevel.classList.add('btn-primary')

	btnCategory.ariaPressed = 'true';
	btnCategory.classList.remove('btn-secondary');
	btnCategory.classList.add('btn-primary')
	
	headers.forEach(item => {
		if (item.name !== 'criteria' && item.name !== 'link') {
			if (item.view === true) {
				document.getElementById(item.name).checked = true;
				document.getElementById(item.name).ariaPressed = 'true';
			} else {
				document.getElementById(item.name).checked = false;
				document.getElementById(item.name).ariaPressed = 'false';
			}
		}
		
	})
}

init();
translateInterface();
createTable();