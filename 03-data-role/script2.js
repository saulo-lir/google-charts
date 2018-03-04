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
		height: 300,
		legend: 'top',
		isStacked: true, // Empilha as barras do gráfico
		colors: ['green', 'red'],
		hAxis:{ // Configurações do eixo horizontal do gráfico
			title: 'Autores',
			titleTextStyle:{
				bold: true,
				fontSize: 16,
				color: 'purple'
			},
			textStyle:{
				bold: true,
				fontSize: 12,
				color: 'purple'
			} 
		},
		vAxis:{ // Configurações do eixo vertical do gráfico
			title: 'Número de votos',
			titleTextStyle:{
				bold: true,
				fontSize: 16,
				color: 'blue'
			},
			textStyle:{
				bold: true,
				fontSize: 12,
				color: 'blue'
			} 
		}
	}

	// Criar a instância do gráfico

	// Para renderizar um gráfico específico, basta inserir o nome dele seguido de Chart
										
																// Id criado no html
	var chart = new google.visualization.BarChart(document.getElementById('my-chart'));
									

	// Renderizar o gráfico no html

	chart.draw(data, options);
}


// Função para alterar o valor do gráfico automaticamente após inserir valor na tabela
function makeDataTable(){

	var data = new google.visualization.DataTable();

	// Definindo uma instância do gráfico já com seus valores definidos

	var data = new google.visualization.arrayToDataTable([
									// Define as cores das barras	// Define uma anotação			    // Define as cores das barras
			['Autores','Prefer. 2016',{role: 'style', type: 'string'},{role: 'annotation', type: 'string'},'Prefer. 2017',{role: 'style', type: 'string'}], // Define as colunas do gráfico
			['JRR Tolken', 10,'green','Anotação1', 5,'red'], // Linha 0
			['JK Rowling', 15,'green','Anotação2', 10,'yellow'], // Linha 1
			['CSS Lewis', 20,'green',null, 25,'red']	// Linha 2
		]);

	return data;

}

