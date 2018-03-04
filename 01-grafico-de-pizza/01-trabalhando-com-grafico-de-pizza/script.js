// 1) Carregando o Core (base do sistema) do google charts, ou seja, todos os pacotes necessários
// para o funcionamento dos gráficos

				// Versão atual
google.charts.load('current', {packages: ['corechart']});

// 2) Após ser carregada a biblioteca, chama a função para criar o gráfico

google.charts.setOnLoadCallback(initGoogleVisualization);


function initGoogleVisualization(){
	drawChart();

	var btnInsertTable = document.getElementById('btn-insert-table');
	var btnDrawChart = document.getElementById('btn-draw-chart');
	btnInsertTable.removeAttribute('disabled'); // Irá remover o atributo disabled só quando o gráfico estiver carregado
	btnDrawChart.removeAttribute('disabled');
}


function drawChart(){

/*		
	var data = new google.visualization.DataTable();

	// Definido as colunas
	data.addColumn('string', 'Autores'); // Coluna 0
	data.addColumn('number', 'Preferência'); // Coluna 1

	// Definindo as linhas
	data.addRows([
		['JRR Tolken', 10], // Linha 0
		['JK Rowling', 15], // Linha 1
		['CSS Lewis', 20], // Linha 2
	 // [ Coluna 0, Coluna 1 ]
	])
*/


	var data = makeDataTable();


	// Opções do gráfico

	var options = {
		title: 'Qual autor você prefere?',
		width: 600,
		height: 300
	}

	// Criar a instância do gráfico

	// Para renderizar um gráfico específico, basta inserir o nome dele seguido de Chart
										
																// Id criado no html
	var chart = new google.visualization.PieChart(document.getElementById('my-chart'));
					// Gráfico de Barras: BarChart

	// Renderizar o gráfico no html

	chart.draw(data, options);
}


function insertTable(){

	var author = document.getElementById('author').value;
	var value = document.getElementById('value').value;
	var table = document.getElementById('my-table');
	var numRows = table.getElementsByTagName('tbody')[0].children.length;
	var row = table.insertRow(numRows+1);

	var cellAuthor = row.insertCell(0);
	cellAuthor.outerHTML = '<th scope="row">'+author+'</th>';
	var cellValue = row.insertCell(1);
	cellValue.innerHTML = value;
}


// Função para alterar o valor do gráfico automaticamente após inserir valor na tabela
function makeDataTable(){

	var table = document.getElementById('my-table');
	var rows = table.getElementsByTagName('tbody')[0].children;

	var data = new google.visualization.DataTable();

	data.addColumn('string', 'Autores'); 
	data.addColumn('number', 'Preferência'); 

	for(var i=0;i<rows.length;i++){
		var author = rows[i].cells[0].innerHTML;
		var value = parseInt(rows[i].cells[1].innerHTML);

		data.addRow([author, value]);
	}

	return data;

}

// Função para editar os valores de um Gráfico
function editDataTableAndDrawChart(){

	var data = makeDataTable();	

	// Editar o valor de uma célula (junção de uma linha e uma coluna do gráfico)

			// Linha 0, Coluna 0, 'Valor a ser inserido'
	data.setValue(0,0, 'Autor 1'); // Vai editar o nome do primeiro autor 'JRR Tolken'

	// Linha 0, Coluna 1, 'Valor a ser inserido'
	data.setValue(0,1, 50); // Vai alterar o valor relacionado ao primeiro autor '10'

	// setCell() = Tem a mesma função do setValue, porém com mais opções de formatação dos valores
	data.setCell(1,0,'Autor 2');
	data.setCell(1,1,45); // Os parêmtros 4 e 5 são para exibir para o usuário o valor com formatações específicas (são opcionais)

	var options = {
		title: 'Qual autor você prefere?',
		width: 600,
		height: 300
	}

																
	var chart = new google.visualization.PieChart(document.getElementById('my-chart'));

	chart.draw(data, options);

}


// Função para excluir os valores de um Gráfico
function removeRowAndDrawChart(){

	var data = makeDataTable();	

	// Remove a linha com o índice indicado
	data.removeRow(2); // irá remover a terceira linha, pois a contagem de índices começa do 0

	var options = {
		title: 'Qual autor você prefere?',
		width: 600,
		height: 300
	}

																
	var chart = new google.visualization.PieChart(document.getElementById('my-chart'));
	

	chart.draw(data, options);

}
