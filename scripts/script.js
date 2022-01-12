const criteria = wcagObj['criterion'];
let lang = 'en';
let totalElem = "78";
let version = 'All';
let level = 'All';
let category = 'All';

const resume = document.getElementById('resume');
let message;

//const checks = ['level', 'version', 'goal', 'intent', 'benefits', 'verification', 'tools', 'category'];
const checks = ['level', 'version', 'goal', 'intent', 'benefits'];

let headers = [
	{
		"name": "criteria",
		"alias": "Criteria",
		"view": true
	},
	{
		"name": "link",
		"alias": "Link",
		"view": false
	},
	{
		"name": "level",
		"alias": "Level",
		"view": true
	},
	{
		"name": "version",
		"alias": "Version",
		"view": true
	},
	{
		"name": "goal",
		"alias": "Goal",
		"view": true
	},
	{
		"name": "intent",
		"alias": "Intent",
		"view": false
	},
	{
		"name": "benefits",
		"alias": "Benefits",
		"view": false
	},
	{
		"name": "verification",
		"alias": "Verification",
		"view": false
	},
	{
		"name": "tools",
		"alias": "Tools",
		"view": false
	},
	{
		"name": "category",
		"alias": "Category",
		"view": false
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
      const alias = document.createTextNode(item.alias)
      th.appendChild(alias)
      tr.appendChild(th)
    }
  })
  tableHeader.appendChild(tr)

	// Create table body
  criteria.forEach(item => {
    tr = document.createElement('tr')
    headers.forEach(head => {
      if (head.view===true && (item.category.includes(category) || category === 'All') && (filterLevel.find(lev => lev === item.level) || filterLevel[0] === 'All') && (filterVersion.find(lev => lev === item.version) || filterVersion[0] === 'All')) {
				
				const td = document.createElement('td');
        if (typeof item[head.name] === 'object') {
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
				} else {
						td.innerHTML = item[head.name];
				}
        tr.appendChild(td);
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