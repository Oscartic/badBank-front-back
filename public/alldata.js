const AllData = () => {
  
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch('account/all')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setData(data);
      })
  },[ ]);

  const renderData = () => {
    if(!data && data.length < 0) return <span>Sin datos registrados</span> 
    return (
      data.map((u, key) => (
        <div className="col" key={`${key}-${u.name}`}>
          <Card 
            bgcolor="secondary"
            txtcolor="white"
            header={<strong>{`Name: ${u.name}`}</strong>}
            title={`Email: ${u.email}`}
            text={`Balance: ${u.balance}`}
            body={<code>{`password: ${u.password}`}</code>}
          />
        </div>
      ))
      )
  } 

  return (
    <>
    <div className="container-fluid">
      <div className="row">
          <h1>All Data</h1>
          { renderData() }
      </div>
    </div>
    </>
  );
}
