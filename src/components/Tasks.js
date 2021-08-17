import React from 'react'
import { google } from 'googleapis';

import { Table, Container } from 'react-bootstrap'

const Tasks = () => {


  return (
    <Container>
      <Table hover>
        <thead>
          <tr>
            <th className="text-center">Id</th>
            <th className="text-center">Título</th>
            <th className="text-center">Descripción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Rececionar Docs</td>
            <td>Recepciónar los documentos de manifiestos expedidos en Sitev</td>
          </tr>
          <tr>
            <td>2</td>
            <td>HV sxj152</td>
            <td>Crear la hoja de vida de sxj152</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  )
}

export default Tasks
