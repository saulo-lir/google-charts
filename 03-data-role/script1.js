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
		title: 'Pesquisa Eleitoral',
		width: 1000,
		height: 300,
		legend: 'bottom', // Posição da legenda: bottom, left, top, right(padrão)
	//	is3D: true	 Define o gráfico 3D
		pieHole: 0.4,   // Estiliza o gráfico no formato de rosquinha. A escala varia de 0.1 a 0.9
	//	colors: ['green', 'yellow'] Define as cores do gráfico
		sliceVisibilityThreshold:  0.15, // Define qual valor mínimo será exibido no gráfico. A escala é em porcentagem
										// No exemplo, 0.15 representa 15%
		slices:{ // Define as configurações de cada pedaço do gráfico de pizza
			0: {color: 'green'}, // Define a cor do pedaço 0
			1: {color: 'yellow'}, // Define a cor do pedaço 1
			2: {color: 'red'} // Define a cor do pedaço 2
		}
	}	

	// Criar a instância do gráfico

	// Para renderizar um gráfico específico, basta inserir o nome dele seguido de Chart
										
																// Id criado no html
	var chart = new google.visualization.PieChart(document.getElementById('my-chart'));
					// Gráfico de Barras: BarChart

	// Renderizar o gráfico no html

	chart.draw(data, options);
}


// Função para alterar o valor do gráfico automaticamente após inserir valor na tabela
function makeDataTable(){

	// Definindo uma instância do gráfico já com seus valores definidos

	var data = new google.visualization.arrayToDataTable([
			['Autores','Intenção de Votos'], // Define as colunas do gráfico
			['JRR Tolken', 10], // Linha 0
			['JK Rowling', 15], // Linha 1
			['CSS Lewis', 20]	// Linha 2
		]);

	// Data Role = Papel do gráfico, ou seja, o propósito para o qual uma coluna foi criada

	// Definindo uma coluna especificando seu papel (formato Explicit role)
	// data.addColumn({role: 'domain', type: 'string'}, 'Autores');  é a mesma coisa que data.addColumn('string', 'Candidatos'); // Coluna de domínio
	// data.addColumn({role: 'series', type: 'number'}, 'Autores');  é a mesma coisa que data.addColumn('number', 'Intenção de votos'); // Coluna de Séries


 // data.addColumn('string', 'Candidatos'); // Coluna de domínio no formato Implicit role	
 //	data.addColumn('number', 'Intenção de votos'); // Implicit role series

	

	return data;

}

