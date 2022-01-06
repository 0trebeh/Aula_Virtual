import React, { useState } from 'react';

import { message, Card, Table, Input, Button } from 'antd';
import { 
  CalculatorOutlined, 
} from '@ant-design/icons';

import Header from "../../components/header";
import Footer from "../../components/footer";

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

  const InW = { title: 'A', dataIndex: 'w', key: 'w',};
  const InX = { title: 'B', dataIndex: 'x', key: 'x',};
  const InY = { title: 'C', dataIndex: 'y', key: 'y',};
  const InZ = { title: 'D', dataIndex: 'z', key: 'z',};
  const OutF = { title: 'S', dataIndex: 'f', key: 'f',};
  const [columns, setcolumns] = useState([InW, InX, InY, InZ, OutF]);

  const calculator = (param: string) => {
    setExpression(expression + param);
  }

  const clean = () => {
    setExpression("");
    setDataSource([{
      key: "0",
      w: 0,
      x: 0,
      y: 0,
      z: 0,
      f: 0
    }]);
  }

  const Delete = () => {
    setExpression(expression.slice(0, -1));
  }

  const truthTable = async () => {

    if(expression == ""){
      //nada
    }
    else{
      var stack = [];
      var w = 0, x = 0, y = 0, z = 0;

      //Comprobacion de parentesis
      for(let single of expression){

        if(single === "A"){
          w = 1;
        }
        if(single === "B"){
          x = 1;
        }
        if(single === "C"){
          y = 1;
        }
        if(single === "D"){
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

        var not = expression.replaceAll("~", "!");
        var and = not.replaceAll(".", "&");
        var or = and.replaceAll("+", "|");
        var ecuation = or;

        console.log(ecuation);

        //Armar la tabla
        var listTable: any[] = [];
        var a = "", b = "", c = "", d = "";
        for (let i = 0; i < 2**(w+x+y+z); i++) {
          var result = ecuation;
          var binary = i.toString(2).toString().split('');
          
          var listBinary = binary.map(Number);
          var listOfListBinary : any[] = [];

          if(w+x+y+z === 1){
            listOfListBinary = listBinary;
          } 
          
          if(w+x+y+z === 2){
            if(listBinary.length === 1){
              listOfListBinary = [0].concat(listBinary);
            }
            if(listBinary.length === 2){
              listOfListBinary = listBinary;
            }
          } 

          if(w+x+y+z === 3){
            if(listBinary.length === 1){
              listOfListBinary = [0,0].concat(listBinary);
            }
            if(listBinary.length === 2){
              listOfListBinary = [0].concat(listBinary);
            }
            if(listBinary.length === 3){
              listOfListBinary = listBinary;
            }
          } 

          if(w+x+y+z === 4){
            if(listBinary.length === 1){
              listOfListBinary = [0,0,0].concat(listBinary);
            }
            if(listBinary.length === 2){
              listOfListBinary = [0,0].concat(listBinary);
            }
            if(listBinary.length === 3){
              listOfListBinary = [0].concat(listBinary);
            }
            if(listBinary.length === 4){
              listOfListBinary = listBinary;
            }
          }

          if(w === 1){
            a = listOfListBinary[0];
            
            if(x === 1){
              b = listOfListBinary[1];
              if(y === 1){
                c = listOfListBinary[2];
                if(z === 1){
                  d = listOfListBinary[3];
                }
              }
              if(y === 0){
                if(z === 1){
                  d = listOfListBinary[2];
                }
              }
            }
            if(x === 0){
              if(y === 1){
                c = listOfListBinary[1];
                if(z === 1){
                  d = listOfListBinary[2];
                }
              }
              if(y === 0){
                if(z === 1){
                  d = listOfListBinary[1];
                }
              }
            }
          }
          if(w === 0){
            if(x === 1){
              b = listOfListBinary[0];
              if(y === 1){
                c = listOfListBinary[1];
                if(z === 1){
                  d = listOfListBinary[2];
                }
              }
              if(y === 0){
                if(z === 1){
                  d = listOfListBinary[1];
                }
              }
            }
            if(x === 0){
              if(y === 1){
                c = listOfListBinary[0];
                if(z === 1){
                  d = listOfListBinary[1];
                }
              }
              if(y === 0){
                if(z === 1){
                  d = listOfListBinary[0];
                }
              }
            }
          }

          result = result.replaceAll("A", a);
          result = result.replaceAll("B", b);
          result = result.replaceAll("C", c);
          result = result.replaceAll("D", d);

          try {
            result = eval(result); 
          } catch (e) {
              if (e instanceof SyntaxError) {
                message.error("Error de sintaxis, comprueba la ecuacion");
              } else {
                throw e;
              }
              break
          }

          if(result.toString() == "false"){
            result = "0";
          }
          if(result.toString() == "true"){
            result = "1";
          }

          listTable.push({
            key: i.toString(),
            w: a,
            x: b,
            y: c,
            z: d,
            f: result,
          });
        }

        var columnsReal : any[] = [];
        if(w === 1){
          columnsReal.push(InW);
        }
        if(x === 1){
          columnsReal.push(InX);
        }
        if(y === 1){
          columnsReal.push(InY);
        }
        if(z === 1){
          columnsReal.push(InZ);
        }
        if(w+x+y+z !== 0){
          columnsReal.push(OutF);
        } 
        
        message.success("Listo");
        setcolumns(columnsReal);
        setDataSource(listTable);
      } else {
        message.error("Syntax Error comprueba los paréntesis");
      }
    }
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
                <div style={{display: "flex", justifyContent: "space-between", marginTop: 5, width: "80%" }}>
                <Button onClick={() => calculator("A")}>A</Button>
                <Button onClick={() => calculator("B")}>B</Button>
                <Button onClick={() => calculator("C")}>C</Button>
                <Button onClick={() => calculator("D")}>D</Button>
                </div>
                <div style={{display: "flex", justifyContent: "flex-start", marginTop: 5 }}>
                <Button onClick={() => calculator("~")}>~</Button>
                <Button onClick={() => calculator("+")}>+</Button>
                <Button onClick={() => calculator(".")}>.</Button>
                <Button onClick={() => calculator("(")}>(</Button>
                <Button onClick={() => calculator(")")}>)</Button>
                </div>
                <div style={{display: "flex", justifyContent: "flex-start", marginTop: 5 }}>
                <Button onClick={clean} style={{color:"#ff9400"}}>Limpiar</Button>
                <Button onClick={Delete} style={{color:"#f5222d"}}>Eliminar</Button>
                </div>
                <div style={{display: "flex", justifyContent: "flex-end", marginTop: 7 }}>
                <Button onClick={truthTable}  style={{color:"#1890ff"}}>Ejecutar</Button>
                </div>
              </Card>
              <h2>Leyenda:</h2>
              <h4>Inversor = ~</h4>
              <h4>Or = +</h4>
              <h4>And = .</h4>
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