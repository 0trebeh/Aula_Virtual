import React, { useState } from 'react';

import { message, Card, Table, Input, Button } from 'antd';
import { 
  CalculatorOutlined, 
} from '@ant-design/icons';

import Header from "../../components/header";
import Footer from "../../components/footer";

type DataSource = [{
  key: string,
  w: number,
  x: number,
  y: number,
  z: number,
  f: number
}];

const Laboratory = () => {

  const [expression, setExpression] = useState("");
  const [dataSource, setDataSource] = useState([{
    key: "0",
    w: 0,
    x: 0,
    y: 0,
    z: 0,
    f: 0
  }]);
  //const [columns, setColumns] = useState("");


  const columns = [
    {
      title: 'w',
      dataIndex: 'w',
      key: 'w',
    },
    {
      title: 'x',
      dataIndex: 'x',
      key: 'x',
    },
    {
      title: 'y',
      dataIndex: 'y',
      key: 'y',
    },
    {
      title: 'z',
      dataIndex: 'z',
      key: 'z',
    },
    {
      title: 'f',
      dataIndex: 'f',
      key: 'f',
    },
  ];

  const calculator = (param: string) => {
    setExpression(expression + param);
  }

  const clean = () => {
    setExpression("");
  }

  const truthTable = () => {
    var stack = [];
    var w = 0, x = 0, y = 0, z = 0;

    //Comprobacion de parentesis
    for(let single of expression){

      if(single === "w"){
        w = 1;
      }
      if(single === "x"){
        x = 1;
      }
      if(single === "y"){
        y = 1;
      }
      if(single === "z"){
        z = 1;
      }

      if(single === "("){
        stack.push("(");
      }
      if(single === ")"){
        if(stack.length === 0){
          //parentesis de cierre de mas
          message.error("Syntax Error comprueba los paréntesis");
          return console.log(false);
        } else {
          stack.pop();
        }      
      }
    }
    if(stack.length === 0){
      message.success("Listo");
    } else {
      message.error("Syntax Error comprueba los paréntesis");
    }

    console.log((w+x+y+z)**2);

    //Armar la tabla
    var listTable: any[] = [];
    for (let i = 0; i < 2**(w+x+y+z); i++) {
      var binary = i.toString(2).toString().split('');
      var listBinary = binary.map(Number);
      var listOfListBinary : any[] = [];

      if(listBinary.length === 1){
        listOfListBinary = [0,0,0].concat(listBinary);
        console.log(listOfListBinary);
      }
      if(listBinary.length === 2){
        listOfListBinary = [0,0].concat(listBinary);
        console.log(listOfListBinary);
      }
      if(listBinary.length === 3){
        listOfListBinary = [0].concat(listBinary);
        console.log(listOfListBinary);
      }
      if(listBinary.length === 4){
        listOfListBinary = listBinary;
        console.log(listOfListBinary);
      }

      listTable.push({
        key: i.toString(),
        w: listOfListBinary[0],
        x: listOfListBinary[1],
        y: listOfListBinary[2],
        z: listOfListBinary[3],
        f:0
      });

      /*for (var j = 0; j < 4; j ++) {
        if(j === 4){
          //push
        }
      }*/
    }

    setDataSource(listTable);
    console.log(listTable);
  }
    
    return (
        <>
          <Header 
            text_Subtitle={"Laboratorio"} 
            active_iconPerfil={true} 
            active_iconHome={true}
          />

          <div style={{ minHeight: "calc(100vh - 104px)", display: "flex", justifyContent: "space-around", alignItems: "center" }} >
            <div>
              <Card style={{ width: 300, backgroundColor: "#ddd" }}>
                <Input size="large" placeholder="Intruduce la funcion" 
                  prefix={<CalculatorOutlined style={{color:"#bbb"}}/>}
                  value={expression}
                />
                <div style={{display: "flex", justifyContent: "space-between", marginTop: 5 }}>
                <Button onClick={() => calculator("w")}>w</Button>
                <Button onClick={() => calculator("x")}>x</Button>
                <Button onClick={() => calculator("y")}>y</Button>
                <Button onClick={() => calculator("z")}>z</Button>
                <Button onClick={() => calculator("~")}>~</Button>
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