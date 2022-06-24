import React from 'react';
import logo from './logo.svg';
import classes from './App.module.css';
import DataTable from './components/DataTable/DataTable';
import { useState, useEffect } from 'react';

const tableColumns = [
  'id',
  'email',
  'first_name',
  'last_name',
];

function App({ data }) {

  const [restRows, setRestRows] = useState([]);

  const getServerSideProps = async () => {
    const res = await fetch(`https://reqres.in/api/users`)
    const data = await res.json()
    return { props: { data } }
  }

  useEffect((e) => {
    getServerSideProps().then((data) => {
      setRestRows(data.props.data.data);
    })
  }, []);

  return (
    <div className={classes["App"]}>
      <div className={classes["table-container"]}>
        <DataTable cellClasses={classes["small-text"]} columns={tableColumns} rows={restRows}></DataTable>
      </div>
    </div>
  );
}

export default App;
