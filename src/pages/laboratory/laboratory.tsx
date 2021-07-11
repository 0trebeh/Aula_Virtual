import React, { useState } from 'react';

import { Card, Table, Input, Button } from 'antd';
import { 
  CalculatorOutlined, 
} from '@ant-design/icons';

import Header from "../../components/header";
import Footer from "../../components/footer";

const Laboratory = () => {

  const [expression, setExpression] = useState("");
  //const [dataSource, setDataSource] = useState("");
  //const [columns, setColumns] = useState("");

  const dataSource = [
    {
      key: '1',
      name: 0,
      age: 0,
      address: 0,
    },
    {
      key: '2',
      name: 1,
      age: 1,
      address: 1,
    },
  ];

  const columns = [
    {
      title: 'x',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'y',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'f',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  const calculator = (param: string) => {
    setExpression(expression + param);
  }

  const clean = () => {
    setExpression("");
  }

  const truthTable = () => {
    console.log(expression)
  }

/*
  const fixedData = [];
  for (let i = 0; i < 20; i += 1) {
    fixedData.push({
      key: i,
      name: ['Light', 'Bamboo', 'Little'][i % 3],
      description: 'Everything that has a beginning, has an end.',
    });
  }*/
    
    return (
        <>
          <Header 
            text_Subtitle={"Laboratorio"} 
            active_iconPerfil={true} 
            active_iconHome={true}
          />

          <div style={{ height: "calc(100vh - 104px)", display: "flex", justifyContent: "space-around", alignItems: "center" }} >
            <div>
              <Card style={{ width: 300, backgroundColor: "#ddd" }}>
                <Input size="large" placeholder="Intruduce la funcion" 
                  prefix={<CalculatorOutlined style={{color:"#bbb"}}/>}
                  value={expression}
                />
                <div style={{display: "flex", justifyContent: "space-between", marginTop: 5 }}>
                <Button onClick={() => calculator("x")}>x</Button>
                <Button onClick={() => calculator("y")}>y</Button>
                <Button onClick={() => calculator("z")}>z</Button>
                <Button onClick={() => calculator("~")}>~</Button>
                <Button onClick={() => calculator("*")}>*</Button>
                <Button onClick={() => calculator("+")}>+</Button>
                </div>
                <div style={{display: "flex", justifyContent: "space-between", marginTop: 5 }}>
                <Button onClick={() => calculator("(")}>(</Button>
                <Button onClick={() => calculator(")")}>)</Button>
                <Button onClick={clean} style={{color:"#ff9400"}}>Limpiar</Button>
                <Button onClick={clean} style={{color:"#f5222d"}}>Eliminar</Button>
                </div>
                <div style={{display: "flex", justifyContent: "flex-end", marginTop: 7 }}>
                <Button onClick={truthTable}  style={{color:"#1890ff"}}>Ejecutar</Button>
                </div>
              </Card>
              <h3>Leyenda:</h3>
              <h4>~ : Inversor</h4>
              <h4>* : And</h4>
              <h4>+ : Or</h4>
            </div>
            <Card bordered={false}>
              <Table
                columns={columns}
                dataSource={dataSource}
                pagination={false}
                bordered
                size="small"
                title={() => 'Tabla de la Verdad'}
              />
            </Card>
          </div>

          <Footer/>
        </>
    );
}

export default Laboratory;