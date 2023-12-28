import React, {FC} from 'react';

interface TableRow{
	id:number;
	rut:string;
	name:string;
	age:number;
}

interface TableProps{
	data: TableRow[];
}

const Table: FC<TableProps> = ({data}) => {	
return (
	<table>
		<thead>
			<tr>
				<th>ID</th>
				<th>RUT</th>
				<th>Nombre</th>
				<th>Edad</th>
			</tr>
		</thead>
		<tbody>
			{data.map((row) => (
				<tr key={row.id}>
					<td>{row.id}</td>
					<td>{row.rut}</td>
					<td>{row.name}</td>
					<td>{row.age}</td>
				</tr>
			))}
		</tbody>
	</table>
	);
};

