const criteria = wcagObj['criterion'];
let lang = 'en';
let totalElem = "78";
let version = 'All';
let level = 'All';
let category = 'All';

const resume = document.getElementById('resume');
let message;

//const checks = ['level', 'version', 'goal', 'intent', 'benefits', 'examples', 'techniques', 'verification', 'tools', 'category'];
const checks = ['level', 'version', 'goal', 'intent', 'benefits', 'examples', 'techniques'];

let headers = [
	{
		"name" : "criteria",
		"alias" : {
			"cat" : "Criteri",
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
			"cat" : "Nivell",
			"es" : "Nivel",
			"en" : "Level"
		},
		"view" : true
	},
	{
		"name" : "version",
		"alias" : {
			"cat" : "Versió",
			"es" : "Versión",
			"en" : "Version"
		},
		"view" : true
	},
	{
		"name" : "goal",
		"alias" : {
			"cat" : "Objectiu",
			"es" : "Objetivo",
			"en" : "Goal"
		},
		"view" : true
	},
	{
		"name" : "intent",
		"alias" : {
			"cat" : "Intenció",
			"es" : "Intención",
			"en" : "Intent"
		},
		"view" : true
	},
	{
		"name" : "benefits",
		"alias" : {
			"cat" : "Beneficis",
			"es" : "Beneficios",
			"en" : "Benefits"
		},
		"view" : false
	},
	{
		"name" : "examples",
		"alias" : {
			"cat" : "Exemples",
			"es" : "Ejemplos",
			"en" : "Examples"
		},
		"view" : false
	},
	{
		"name" : "techniques",
		"alias" : {
			"cat" : "Tècniques",
			"es" : "Técnicas",
			"en" : "Techniques"
		},
		"view" : false
	},
	{
		"name" : "verification",
		"alias" : {
			"cat" : "Verificació",
			"es" : "Verificación",
			"en" : "Verification"
		},
		"view" : false
	},
	{
		"name" : "tools",
		"alias" : {
			"cat" : "Eines",
			"es" : "Herramientas",
			"en" : "Tools"
		},
		"view" : false
	},
	{
		"name" : "category",
		"alias" : {
			"cat" : "Categoria",
			"es" : "Categoria",
			"en" : "Category"
		},
		"view" : false
	}
];

const createTable = () => {
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
			switch (lang) {
				case 'cat':
					th.innerHTML = item.alias.cat;
					break;
				case 'es':
					th.innerHTML = item.alias.es;
					break;
				case 'en':
					console.log(item.alias.en)
					th.innerHTML = item.alias.en;
					break;
				default:
					th.innerHTML = item.alias.en;
					break;
			}
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
						
						switch (lang) {
							case 'cat':
								linkText = document.createTextNode(item.criteria.cat);
								a.title = item.criteria.cat;
								break;
							case 'es':
								linkText = document.createTextNode(item.criteria.es);
								a.title = item.criteria.es;
								break;
							case 'en':
								linkText = document.createTextNode(item.criteria.en);
								a.title = item.criteria.en;
								break;
							default:
								linkText = document.createTextNode(item.criteria.en);
								a.title = item.criteria.en;
								break;	
						}
						a.appendChild(linkText);
						a.target = '_blank';
						a.href = item.link;
						th.appendChild(a);
						tr.appendChild(th);
					} 
					else {
						const td = document.createElement('td');
						switch (lang) {
							case 'cat':
								td.innerHTML = item[head.name].cat;
								break;
							case 'es':
								td.innerHTML = item[head.name].es;
								break;
							case 'en':
								td.innerHTML = item[head.name].en;
								break;
							default:
								td.innerHTML = item[head.name].en;
								break;
						}
						tr.appendChild(td);
					}
				} 
				else {
					const td = document.createElement('td');
					if (head.name === 'examples' && item.examples != '') {
						switch (lang) {
							case 'cat':
								linkText = document.createTextNode(item.criteria.cat + ' Exemples');
								a.title = item.criteria.cat + ' Exemples';
								break;
							case 'es':
								linkText = document.createTextNode(item.criteria.es + ' Ejemplos');
								a.title = item.criteria.es + ' Ejemplos';
								break;
							case 'en':
								linkText = document.createTextNode(item.criteria.en + ' Examples');
								a.title = item.criteria.en + ' Examples';
								break;
							default:
								linkText = document.createTextNode(item.criteria.en + ' Examples');
								a.title = item.criteria.en + ' Examples';
								break;	
						}
						a.appendChild(linkText);
						a.target = '_blank';
						a.href = item.examples;
						td.appendChild(a);
					} 
					else if (head.name === 'techniques' && item.techniques != '') {
						switch (lang) {
							case 'cat':
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
					} 
					else {
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

function updateResume() {
	switch (lang) {
		case 'cat':
			//message = 'Mostrar <span class="btn btn-primary btn-sm">' + total + '</span> tests. Versió <span class="btn btn-primary btn-sm">' + version + '</span> nivell <span class="btn btn-primary btn-sm">' + level + '</span>. Categoritzats en <span class="btn btn-primary btn-sm">' + category + '</span> criteris.';
			message = 'Mostrar <span class="btn btn-primary btn-sm">' + total + '</span> tests. Versió <span class="btn btn-primary btn-sm">' + version + '</span> nivell <span class="btn btn-primary btn-sm">' + level + '</span>.';
		break;
		case 'es':
			//message = 'Showing <span class="btn btn-primary btn-sm">' + total + '</span> tests. Version <span class="btn btn-primary btn-sm">' + version + '</span> level <span class="btn btn-primary btn-sm">' + level + '</span>. Categorised by <span class="btn btn-primary btn-sm">' + category + '</span> criterios.';
			message = 'Showing <span class="btn btn-primary btn-sm">' + total + '</span> tests. Version <span class="btn btn-primary btn-sm">' + version + '</span> level <span class="btn btn-primary btn-sm">' + level + '</span>.';
		break;
		case 'en':
			//message = 'Showing <span class="btn btn-primary btn-sm">' + total + '</span> tests. Version <span class="btn btn-primary btn-sm">' + version + '</span> level <span class="btn btn-primary btn-sm">' + level + '</span>. Categorised by <span class="btn btn-primary btn-sm">' + category + '</span> criteria.';
			message = 'Showing <span class="btn btn-primary btn-sm">' + total + '</span> tests. Version <span class="btn btn-primary btn-sm">' + version + '</span> level <span class="btn btn-primary btn-sm">' + level + '</span>.';
		break;
		default:
			//message = 'Showing <span class="btn btn-primary btn-sm">' + total + '</span> tests. Version <span class="btn btn-primary btn-sm">' + version + '</span> level <span class="btn btn-primary btn-sm">' + level + '</span>. Categorised by <span class="btn btn-primary btn-sm">' + category + '</span> criteria.';
			message = 'Showing <span class="btn btn-primary btn-sm">' + total + '</span> tests. Version <span class="btn btn-primary btn-sm">' + version + '</span> level <span class="btn btn-primary btn-sm">' + level + '</span>.';
		break;
	}
	resume.innerHTML = message;
}

function btnLang(btn) {
	lang = btn.id
	createTable()
}

function btnVersion(btn) {
	const contentVersion = btn.textContent
	const arrayVersions = version.split(",")

	if (contentVersion == "All") {
		version = 'All'
	}
	else if (arrayVersions.indexOf(contentVersion) !== -1) {
		const newArray = arrayVersions.filter(item => item != contentVersion)
		version = newArray.join()
		if (version == "") {
			version = 'All'
		}
	}
	else {

		if (arrayVersions.indexOf('All') !== -1) {
			arrayVersions.splice(arrayVersions.indexOf('All'), 1)
			version = arrayVersions.join()
		}
		arrayVersions.push(contentVersion)
		if (arrayVersions.length === 3) {
			version = 'All'
		} else {
		version = arrayVersions.join()
		}
	}
	createTable()
}

function btnLevel(btn) {
	const contentLevel = btn.textContent
	const arrayLevels = level.split(",")

	if (contentLevel == "All") {
		level = 'All'
	}
	else if (arrayLevels.indexOf(contentLevel) !== -1) {
		const newArray = arrayLevels.filter(item => item != contentLevel)
		level = newArray.join()
		if (level == "") {
			level = 'All'
		}
	}
	else {

		if (arrayLevels.indexOf('All') !== -1) {
			arrayLevels.splice(arrayLevels.indexOf('All'), 1)
			level = arrayLevels.join()
		}
		arrayLevels.push(contentLevel)
		if (arrayLevels.length === 3) {
			level = 'All'
		} else {
		level = arrayLevels.join()
		}
	}
	createTable()
}

function btnCategory(btn) {
	category = btn.textContent;
	createTable()
}

function showColumns(check){
	headers.forEach(item => {
		if (item.name === check.id) { 
			check.checked ? item.view = true : item.view = false; 
		}
	})
	createTable();
}	

function checksInit() {
	checks.forEach(item => {
		headers.forEach(header => {
			if (item == header.name) {
				header.view === true ? document.getElementById(item).checked = true : document.getElementById(item).checked = false;
				
			}
		})
	})
}

checksInit();
createTable();

// TODO element.ariaPressed = true || false
// TODO traducir botones