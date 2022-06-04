let usersTable = document.getElementById('usersTable');
function DataTable(config, data) {
    let table = document.createElement('table');
    table.classList.add('table')
    let tHead = document.createElement('thead')
    let tr = document.createElement('tr');
  
    table.appendChild(tHead);
    tHead.appendChild(tr);

    for(i = 0;i<config.columns.length; i++)
    {
        let th = document.createElement('th')
        th.innerHTML = config.columns[i].title;
        th.classList.add('Th')
        tr.appendChild(th)
    }
    let tBody = document.createElement('tbody');

    table.insertAdjacentElement('beforeend', tBody);
    for(i = 0;i<data.length;i++)
    {
        let row = document.createElement('tr')
        for(j = 0;j < Object.keys(data[i]).length;j++)
        {
            let td = document.createElement('td')
            td.innerHTML = Object.values(data[i])[j]
            row.appendChild(td)
            td.classList.add('td')
        }
        tbody.appendChild(row)
    }
    usersTable.appendChild(table)
 }
 
 const config1 = {
   parent: '#usersTable',
   columns: [
     {title: '№', value: 'id'},      
     {title: 'Имя', value: 'name'},
     {title: 'Фамилия', value: 'surname'},
     {title: 'Возраст', value: 'age'},
   ]
 };
 
 const users = [
   {id: 30050, name: 'Вася', surname: 'Петров', age: 12},
   {id: 30051, name: 'Вася', surname: 'Васечкин', age: 15},
 ];
 
 DataTable(config1, users);
 