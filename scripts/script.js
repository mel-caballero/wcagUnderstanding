const tableBody = document.querySelector('tbody');
const filteredBy = document.getElementById('filter');
const wcagVersion = document.getElementById('wcagVersion');
const level = document.getElementById('level')
const resultsElement = document.getElementById('returnedResults');
const tests = wcagObj['intents'];

function populateTable()
{
	
	var returnedResults = 0;
	
	for(let i = 0;i < tests.length; i++)
	{
		const tableRow = document.createElement('tr');
		for (var key in tests[i]) 
		{
			if (tests[i].hasOwnProperty(key)) 
			{
				if(key!=='link')
				{	
					var val = tests[i][key];
					var tableData = document.createElement('td');

					if(tests[i].category.includes(filteredBy.innerHTML) || filteredBy.innerHTML == 'all')
					{
						if(key=='category')
						{
							returnedResults++;
							for(let a = 0;a < tests[i][key].length; a++)
							{
								var cssSpan = document.createElement('span');
								cssSpan.textContent = val[a];
								cssSpan.classList.add('bg-primary');
								cssSpan.classList.add('badge');
								cssSpan.classList.add('rounded-pill');
								tableData.appendChild(cssSpan);
							}
						}
						else if(key=='wcagLevel')
						{
							switch(val)
							{
								case 'A':
									var cssSpan = document.createElement('span');
									cssSpan.textContent = val;
									cssSpan.classList.add('bg-info');
									cssSpan.classList.add('text-dark');
									cssSpan.classList.add('badge');
									cssSpan.classList.add('rounded-pill');
									tableData.appendChild(cssSpan);
									break;
								case 'AA':
									var cssSpan = document.createElement('span');
									cssSpan.textContent = val;
									cssSpan.classList.add('bg-warning');
									cssSpan.classList.add('text-dark');
									cssSpan.classList.add('badge');
									cssSpan.classList.add('rounded-pill');
									tableData.appendChild(cssSpan);
									break;
								case 'AAA':
									var cssSpan = document.createElement('span');
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
						else if(key=='understandingCriteria')
						{
							const a = document.createElement('a');
							const linkText = document.createTextNode(val);
							a.appendChild(linkText);
							a.title = val
							a.target = '_blank';
							a.href = tests[i].link;
							tableData.appendChild(a);
						}
						else if(key=='benefit') 
						{
							const ul = document.createElement('ul');
							const lista = val.split("#")
							lista.forEach(element => {
								const li = document.createElement('li');
								const liText = document.createTextNode(element);
								li.appendChild(liText);
								ul.appendChild(li)
							});
							tableData.appendChild(ul);
						}
						else if(key="intent")
						{
							const pText = val.split("#")
							pText.forEach(element => {
								const p = document.createElement('p');
								const pText = document.createTextNode(element);
								p.appendChild(pText);
								tableData.appendChild(p);
							});
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
/*
const btns = document.getElementsByClassName('category');
for (i of btns) 
{
  i.addEventListener('click', function(){
		tableBody.innerHTML = '';
		populateTable();
		filteredBy.textContent = this.textContent;
  });
}
*/
function btnCategory(btn)
{
	tableBody.innerHTML = '';
	populateTable();
	filteredBy.textContent = btn.textContent;
}
/*
const levels = document.getElementsByClassName('level');
for (i of levels) 
{
  i.addEventListener('click', function(){
		const datafilter = document.getElementById('filter')
		let dataLevel = datafilter.getAttribute('data-level')
		const contentLevel = this.textContent
		
		if (dataLevel == "")
		{
			datafilter.setAttribute('data-level', contentLevel)	
		}
		else if (contentLevel == "All")
		{
			datafilter.setAttribute('data-level', 'All')
		}
		else{
			const arrayLevels = dataLevel.split(",")
			if (arrayLevels.indexOf(contentLevel) !== -1)
			{
				const newArray = arrayLevels.filter(item => item != contentLevel)
				datafilter.setAttribute('data-level', newArray.join())
			}
			else
			{
				const index = arrayLevels.indexOf('All')
				if (index !== -1)
				{
					arrayLevels.splice(index, 1)
				}
				arrayLevels.push(contentLevel)
				datafilter.setAttribute('data-level', arrayLevels.join())
			}
		}
  });
}*/
/*
const levels = document.getElementsByClassName('level');
for (i of levels) 
{
  i.addEventListener('click', function(){
		const contentLevel = this.textContent
		
		if (contentLevel == "All")
		{
			level.textContent = 'All'
		}
		else
		{
			const arrayLevels = level.innerHTML.split(",")
			if (arrayLevels.indexOf(contentLevel) !== -1)
			{
				const newArray = arrayLevels.filter(item => item != contentLevel)
				level.textContent = newArray.join()
			}
			else
			{
				const index = arrayLevels.indexOf('All')
				if (index !== -1)
				{
					arrayLevels.splice(index, 1)
					level.textContent = arrayLevels.join()
				}
				arrayLevels.push(contentLevel)
				level.textContent = arrayLevels.join()
			}
		}
  });
}*/

function btnLevel(btn)
{
	const contentLevel = btn.textContent
			
			if (contentLevel == "All")
			{
				level.textContent = 'All'
			}
			else
			{
				const arrayLevels = level.innerHTML.split(",")
				if (arrayLevels.indexOf(contentLevel) !== -1)
				{
					const newArray = arrayLevels.filter(item => item != contentLevel)
					level.textContent = newArray.join()
				}
				else
				{
					const index = arrayLevels.indexOf('All')
					if (index !== -1)
					{
						arrayLevels.splice(index, 1)
						level.textContent = arrayLevels.join()
					}
					arrayLevels.push(contentLevel)
					level.textContent = arrayLevels.join()
				}
			}
}

const hashstring = window.location.hash;
switch(hashstring.replace('#',''))
{	
	case 'dynamic-content':
	case 'custom-controls':
	case 'forms-and-UI':
	case 'audio-video':
	case 'structure':
	case 'colour':
	case 'content':
	case 'keyboard':
	case 'link':
	case 'font-size':
		populateTable();
		break;
	default:
		populateTable();
		break;
}
