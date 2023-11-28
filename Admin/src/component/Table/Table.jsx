import './Table.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {
	const rows = [

	{
		id:1918911,
		product: "shirt",
		img:"https://assets.hermes.com/is/image/hermesproduct/h-embroidered-t-shirt--072025HA01-worn-5-0-0-800-800_b.jpg",
		customer:"jama Yasin",
		date:"1 september",
		amount: 785,
		method:"zaad service",
		status:"Approved",

	},
	{
		id:23418911,
		product: "T-shirt",
		img:"https://www.etro.com/on/demandware.static/-/Sites-etro_master/default/dwfc8da607/images/products/view_type_prod_pdp/221U1Y69991850800_SF_01.jpg",
		customer:"jama Yasin",
		date:"1 september",
		amount: 785,
		method:"zaad service",
		status:"pending",

	},
{
		id:3424328911,
		product: "Shoes",
		img:"https://m.media-amazon.com/images/I/71D9ImsvEtL._UY500_.jpg",
		customer:"jama Yasin",
		date:"1 september",
		amount: 785,
		method:"online",
		status:"Approved",

	},

{
		id:67443311,
		product: "jackets",
		img:"https://media.cntraveler.com/photos/60088d408ebb4b589a89b54e/master/w_2100,h_1500,c_limit/LightweightJackets-2021-Uniqlo.jpg",
		customer:"jama Yasin",
		date:"1 september",
		amount: 785,
		method:"online",
		status:"pending",

	},



	];
	return(

		  <TableContainer component={Paper} className="Table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tablecell">Tracking ID</TableCell>
             <TableCell className="tablecell">Product</TableCell>
              <TableCell className="tablecell">Customer</TableCell>
               <TableCell className="tablecell">Date</TableCell>
                <TableCell className="tablecell">Amount</TableCell>
                 <TableCell className="tablecell">Payement</TableCell>
                  <TableCell className="tablecell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell >
                {row.id}
              </TableCell>
              <TableCell className="tablecell">
              	<div className="cellWrapper">
              	<img src={row.img} alt="" className="image"/>
              	{row.Product}
              	</div>
              </TableCell>
              <TableCell className="tablecell">{row.customer}</TableCell>
              <TableCell className="tablecell">{row.date}</TableCell>
              <TableCell className="tablecell">{row.amount}</TableCell>
              <TableCell className="tablecell">{row.method}</TableCell>
              <TableCell className="tablecell">
              	<span className={'status ${row.status}'}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>



		);
}

export default List;