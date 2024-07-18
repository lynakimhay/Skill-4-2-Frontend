import '../styles/Farmlandtable.css';
function Farmlandtable() {
    return (
        
        <div className="content">
          <div className="header">
            {/* <h2>Farmers</h2> */}
            <div className="filters">
              {/* <button>Kampot</button> */}
              {/* <button>Kampot</button> */}
            </div>
          </div>
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Sive</th>
                <th>Province</th>
                <th>Latitude</th>
                <th>Longitude</th>
                <th>Farmer(owner)</th>
                <th>Status</th>
                <th>Action</th>
                
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Apple</td>
                <td>Tech</td>
                <td>Krinal</td>
                <td>Male</td>
                <td>Phone</td>
                <td>Source</td>
                <td>Action</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Nike</td>
                <td>Lifestyle</td>
                <td>Sophia</td>
                <td>Male</td>
                <td>Phone</td>
                <td>Source</td>
                <td>Action</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Government</td>
                <td>Workspace</td>
                <td>Gregory</td>
                <td>Female</td>
                <td>Phone</td>
                <td>Source</td>
                <td>Action</td>
              </tr>
              <tr>
                <td>4</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>5</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      
    );
  }
  
  export default Farmlandtable;