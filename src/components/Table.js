import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
// import 'rsuite-table/lib/less/index.less';
import 'rsuite-table/dist/css/rsuite-table.css';
import userData from '../../src/users.json';

const ImageCell = ({ rowData, dataKey, ...rest }) => (
  <Cell {...rest}>
    <img src={rowData[dataKey]} width="50" />
  </Cell>
);

const App = () => (
  <Table class="bg-indigo-500 ..." data={userData} height={800}>
    <Column width={100} sortable fixed resizable>
      <HeaderCell>ID</HeaderCell>
      <Cell dataKey="id" />
    </Column>

    <Column width={100} sortable resizable>
      <HeaderCell>Name</HeaderCell>
      <Cell dataKey="first_name" />
    </Column>

    <Column width={300} sortable resizable>
      <HeaderCell>Email</HeaderCell>
      <Cell>
        {(rowData) => {
          return <a href={`mailto:${rowData.email}`}>{rowData.email}</a>;
        }}
      </Cell>
    </Column>

    <Column width={100} resizable>
      <HeaderCell>Favorite Color</HeaderCell>
      <ImageCell dataKey="favorite_color" />
    </Column>
  </Table>
);

export default App;
