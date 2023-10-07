"use client"

import Navbar from '../components/navbar'
import Content from '../components/content'
import styles from '../scss/home.module.scss'
import { useState } from 'react';

export default function Home() {

  const [rowData, setRowData] = useState({
    checkbox: false,
    column2: '',
    column3: '',
    column4: '',
    column5: '',
    column6: '',
  });

  const handleInputChange = (name: string, value: string | boolean) => {
    setRowData({
      ...rowData,
      [name]: value,
    });
  };

  return (
    <main className={styles.main}>
      <Navbar />
      <Content>
        <div>
          <input placeholder='BUSCA' type='text' />
          <h1>Dashboard</h1>
          <div>
            <section />
            <div>
              <section />
              <section />
            </div>
          </div>
          <h2>AVISO/LEMBRETES</h2>
          <table>
            <thead>
              <tr>
                <th>Column 1</th>
                <th>Column 2</th>
                <th>Column 3</th>
                <th>Column 4</th>
                <th>Column 5</th>
                <th>Column 6</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input
                    type="checkbox"
                    checked={rowData.checkbox}
                    onChange={() => handleInputChange('checkbox', !rowData.checkbox)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={rowData.column2}
                    onChange={(e) => handleInputChange('column2', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={rowData.column3}
                    onChange={(e) => handleInputChange('column3', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={rowData.column4}
                    onChange={(e) => handleInputChange('column4', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={rowData.column5}
                    onChange={(e) => handleInputChange('column5', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={rowData.column6}
                    onChange={(e) => handleInputChange('column6', e.target.value)}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <section/>
          <div>
            <section/>
          </div>
        </div>
      </Content>
    </main>
  )
}
