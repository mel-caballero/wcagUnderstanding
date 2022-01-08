const filterCategory = document.getElementById('filter');
const level = document.getElementById('level');
const version = document.getElementById('version');
const resultsElement = document.getElementById('returnedResults');
let lang = 'en';
const tableHeader = document.querySelector('thead');
const tableBody = document.querySelector('tbody');
const criteria = wcagObj['criterion'];
let headers = [
	{
		"name": "understandingCriteria",
		"alias": "Criteria",
		"view": true
	},
	{
		"name": "link",
		"alias": "Link",
		"view": false
	},
	{
		"name": "wcagLevel",
		"alias": "Level",
		"view": true
	},
	{
		"name": "wcagVersion",
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
		"view": true
	}
];

const createTable = () => {
	const filterLevel = level.innerHTML.split(",");
	const filterVersion = version.innerHTML.split(",");
  const elementHead = document.getElementById('thead');
  const totalhead = elementHead.children.length;
  for(let g= 0; g<totalhead; g++) {
    if (elementHead.children.length >0 ) { elementHead.removeChild(elementHead.children[0]) }
  }

	const element = document.getElementById('bodyTable')
  const total = element.children.length
  for (let i = 0; i < total;i++ ) {
    if (element.children.length > 0 ) { element.removeChild(element.children[0]) }
  }

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
  elementHead.appendChild(tr)

  criteria.forEach(item => {
    tr = document.createElement('tr')
    headers.forEach(head => {
      if (head.view===true && (item.category.includes(filterCategory.innerHTML) || filterCategory.innerHTML === 'all') && (filterLevel.find(lev => lev === item.wcagLevel) || filterLevel[0] === 'All') && (filterVersion.find(lev => lev === item.wcagVersion) || filterVersion[0] === 'All')) {
        
				const td = document.createElement('td');
        let content;
				content = document.createTextNode(item[head.name]);
				
				if (content.textContent === '[object Object]'){
					switch (lang) {
						case 'cat':
							content = document.createTextNode(item[head.name].cat);
							break;
						case 'es':
							content = document.createTextNode(item[head.name].es);
							break;
						case 'en':
							content = document.createTextNode(item[head.name].en);
							break;
						default:
							content = document.createTextNode(item[head.name].en);
							break;
					}
				}
        td.appendChild(content);
        tr.appendChild(td);
      }
    });
		if (tr.firstElementChild != null){
			element.append(tr);
		}
  });
	resultsElement.innerHTML = document.getElementById('wcagTable').rows.length - 1;
}

function btnLang(btn) {
	lang = btn.id
	createTable()
}

function btnCategory(btn) {
	filterCategory.textContent = btn.textContent;
	createTable()
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
	createTable()
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
	createTable()
}

function showColumns(check){
	headers.forEach(item => {
		if (item.name === check.id) { check.checked ? item.view = true : item.view = false; }
	})
	createTable();
}	

createTable();