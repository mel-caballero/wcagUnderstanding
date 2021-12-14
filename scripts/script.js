const tableBody = document.querySelector('tbody');
const filteredBy = document.getElementById('filter');
const wcagVersion = document.getElementById('wcagVersion');

function populateTable(obj, filter)
{
	let cssSpan
	const resultsElement = document.getElementById('returnedResults');
	const tests = obj['intents'];
	let returnedResults = 0

	wcagVersion.textContent = obj.latestWCAGversion;

	for(let i = 0;i < tests.length; i++)
	{
		const tableRow = document.createElement('tr');
		for (let key in tests[i])
		{
			if (tests[i].hasOwnProperty(key))
			{
				if(key!=='link')
				{
					const val = tests[i][key]
					const tableData = document.createElement('td')

					if(tests[i].category.includes(filter) || filter == 'all')
					{
						if(key=='category')
						{
							returnedResults++;
							for(let a = 0;a < tests[i][key].length; a++)
							{
								cssSpan = document.createElement('span')
								cssSpan.textContent = val[a];
								cssSpan.classList.add('bg-primary');
								cssSpan.classList.add('badge');
								cssSpan.classList.add('rounded-pill');
								tableData.appendChild(cssSpan);
							}
						}
						else if(key==='wcagLevel')
						{
							cssSpan = document.createElement('span')
							cssSpan.textContent = val;
							cssSpan.classList.add(val);
							tableData.appendChild(cssSpan);
						/*	switch(val)
							{
								case 'A':
									var cssSpan = document.createElement('span');
									cssSpan.textContent = val;
									cssSpan.classList.add(val);
									/*cssSpan.classList.add('text-dark');
									cssSpan.classList.add('badge');
									cssSpan.classList.add('rounded-pill');
									tableData.appendChild(cssSpan);
									break;
								case 'AA':
									var cssSpan = document.createElement('span');
									cssSpan.textContent = val;
									cssSpan.classList.add('bg-success');
									cssSpan.classList.add('badge');
									cssSpan.classList.add('rounded-pill');
									tableData.appendChild(cssSpan);
									break;
								case 'AAA':
									var cssSpan = document.createElement('span');
									cssSpan.textContent = val;
									cssSpan.classList.add('bg-warning');
									cssSpan.classList.add('text-dark');
									cssSpan.classList.add('badge');
									cssSpan.classList.add('rounded-pill');
									tableData.appendChild(cssSpan);
									break;
								default:
									tableData.textContent = val;
									break;
							} */
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

const btns = document.querySelectorAll('button');
for (i of btns)
{
  i.addEventListener('click', function(){
		tableBody.innerHTML = '';
		populateTable(wcagObj,this.textContent);
		filteredBy.textContent = this.textContent;
  });
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
		populateTable(wcagObj, hashstring.replace('#',''));
		break;
	default:
		populateTable(wcagObj, 'all');
		break;
}
