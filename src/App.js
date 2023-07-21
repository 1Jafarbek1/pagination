import { useState } from 'react';
import './App.css';
import Data from "./Data.json";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [currentPage, setCurrentPage] = useState(1)
  const recordsPerPages = 5;
  const lastIndex = currentPage * recordsPerPages;
  const firstIndex = lastIndex - recordsPerPages;
  const records = Data.slice(firstIndex, lastIndex);
  const npage = Math.ceil(Data.length / recordsPerPages)
  const numbers = [...Array(npage + 1).keys()].slice(1)
  return (
    <div>
        <h1>Jami {Data.length} Uquvchilar</h1>
        <table className='table'>
          <thead>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone number</th>
          </thead>
          <tbody>
            {records.map((d,i) => (
              <tr key={i}>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>{d.number}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <nav>
              <ul className='pagination'>
                <li className='page-item'>
                  <a href='#' className='page-link' onClick={prePage}>prev</a>
                </li>
                {numbers.map((n,i) => {
                  <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
                    <a href='#' className='page-link' onClick={() => changeCPage(n)}>{n}</a>
                  </li>
                })
              }
                <li className='page-item'>
                <a href='#' className='page-link' onClick={nextPage}>Next</a>
              </li>
            </ul>
        </nav>
    </div>
  );
  function prePage() {
    if(currentPage !== firstIndex) {
      setCurrentPage(currentPage -1 )
    }
  }

  function changeCPage(id) {
    setCurrentPage(id)
  }

  function nextPage() {
    if(currentPage !== lastIndex) {
      setCurrentPage(currentPage + 1)
    }
  }
}

export default App;
