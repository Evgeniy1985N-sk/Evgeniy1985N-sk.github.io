
let 
	json = 	
		[
			[
				{
					"text" : "obj-0"
				},
				{
					"text" : "obj-1",
					"display" : "block"
				},
				{
					"text" : "obj-2"
				},
				{
					"text" : "obj-3"
				},
				{
					"text" : "obj-4"
				},
				{
					"text" : "obj-5",
					"display" : "block"
				},
				{
					"text" : "obj-6"
				},{
					"text" : "obj-7"
				},
				{
					"text" : "obj-8",
					"display" : "block"
				},
				{
					"text" : "obj-9"
				},
				{
					"text" : "obj-10"
				},
				{
					"text" : "obj-11",
					"display" : "block"
				},
				{
					"text" : "obj-12"
				},
				{
					"text" : "obj-13",
				},
				{
					"text" : "obj-14"
				},
				{
					"text" : "obj-15",
				},
				{
					"text" : "obj-16",
				},
				{
					"text" : "obj-17",
				},
			]
		],

	table = document.querySelector('.table'),
	tr, td;

if ( JSON.parse(localStorage.getItem('newJson')) ) {
	json = JSON.parse(localStorage.getItem('newJson'));
}

json[0].forEach(function(item, i) {
	if (i === 0 || i % 6 === 0 ) {
		tr = document.createElement('tr');
		table.append(tr);
	}

	td = document.createElement('td');
	td.setAttribute('id', i);
	td.classList.add('droppable');
	span = document.createElement('span');
	span.setAttribute('id', i);
	span.classList.add('draggable');
	span.setAttribute('draggable', 'true');
	span.innerHTML = item.text;
	td.append(span);

	if (item.display === 'block') {
		span.removeAttribute('draggable', 'true');
		span.classList.add('block');
	}

	tr.append(td);
});

const dragAndDrop = () => {
    let cards = document.querySelectorAll('.draggable');
    let cells = document.querySelectorAll('.droppable');
    let indexCell;

    const dragStart = function () {
        setTimeout(() => {
            this.classList.add('hide');
            this.classList.remove('droppable');
        }, 0);
        indexCell = +this.parentElement.id;
        idCard = +this.id;
    };
    
    const dragEnd = function () {
        this.classList.remove('hide');
    };

    const dragOver = function (evt) {
        evt.preventDefault();
    };

    const dragDrop = function () {
    	if (this.firstChild.classList.contains('block')) return;
    	let firstChild = this.firstChild;
    	cells[indexCell].append(this.firstChild);
        this.append(cards[idCard]);

        json[0].forEach(function(item, i) {
         	let td = table.querySelectorAll('.draggable');
	    	json[0][i].text = td[i].innerHTML;
			localStorage.setItem('newJson', JSON.stringify(json));
	    });
	    console.log(json)

    };

    cells.forEach(cell => {
        cell.addEventListener('dragover', dragOver);
        cell.addEventListener('drop', dragDrop);
    });

    cards.forEach(card => {
	    card.addEventListener('dragstart', dragStart);
	    card.addEventListener('dragend', dragEnd);
    });

};

dragAndDrop();