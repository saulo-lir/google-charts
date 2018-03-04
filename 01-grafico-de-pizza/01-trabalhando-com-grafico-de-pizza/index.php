<html>
	<head>
		<meta charset='utf-8'>
		<title>Google Charts</title>
	</head>

	<body>

		<!-- O gráfico será renderizado nessa div -->
		<div id='my-chart'>
			
		</div>

		<div>
		
			<label>Autor:</label>
			<input type='text' name='author' id='author'>

			<label>Valor:</label>
			<input type='text' name='value' id='value'>		

			<button type='button' id='btn-insert-table' disabled onclick='insertTable()'>Inserir</button>

			<button type='button' id='btn-draw-chart' disabled onclick='drawChart()'>Gerar Gráfico</button>
		
		<!--
	 		Editar e remover valores
		

			<button type='button' id='btn-insert-table' onclick='editDataTableAndDrawChart()'>Editar</button>

			<button type='button' id='btn-insert-table' onclick='removeRowAndDrawChart()'>Remover linha 2</button>
		-->
		
			<table id='my-table' border='1'>
				<thead>
					<tr>
						<th>Autores</th>
						<th>Preferências</th>
					</tr>
				</thead>
				
				<tbody>
					<tr>
						<th scope='row'>JRR Tolken</th>
						<td>10</td>
					</tr>
					<tr>
						<th scope='row'>JK Rowling</th>
						<td>15</td>
					</tr>
					<tr>
						<th scope='row'>CSS Lewis</th>
						<td>20</td>
					</tr>
				</tbody>
				
			</table>

		</div>		
		

		<!-- Carregando a biblioteca de charts do google-->
		<!-- O arquivo loader.js carrega o google.charts contido na primeira linha do nosso arquivo script.js -->
		<script type='text/javascript' src='http://www.gstatic.com/charts/loader.js'></script>
		<script type='text/javascript' src='script.js'></script>
	</body>

</html>