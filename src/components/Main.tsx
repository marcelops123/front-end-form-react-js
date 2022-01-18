import React, { useEffect, useState, useContext, useRef } from "react";
import { useForm } from "react-hook-form";
import { Container, Formcontent} from "../Styles";
import axios from "axios";
import { Center, Editable, Wrap, WrapItem } from '@chakra-ui/react'
import { Empty, InputNumber, Spin,  Table, Typography} from 'antd';
import { Input,  Popconfirm, Form } from 'antd';
import { FormInstance } from 'antd/lib/form';
import { Button} from 'antd'
import { fail } from "assert";
import { result } from "lodash";
import { EditOutlined } from '@ant-design/icons';
import { DeleteOutlined  } from '@ant-design/icons';
import { m } from "framer-motion";

type Profile = {
nome: string
email: string
senha: number
genero: string
data_nascimento: Date
telefone: number
estado: string
endereco: string
cidade: string
resultado: string
}



export default function App() {
const {register, handleSubmit} = useForm<Profile>()
    const onSubmit = handleSubmit((data) => 
    console.log())
    
    
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [telefone, setTelefone] = useState("")
    const [genero, setGenero] = useState("")
    const [data_nascimento, setData_nascimento] = useState("")
    const [estado, setEstado] = useState("")
    const [cidade, setCidade] = useState("")
    const [endereco, setEndereco] = useState("")
    const submitReview  = ()  =>{
        axios.post("http://localhost:3009/api/insert", {
        InsertNome: nome,
        InsertEmail: email, 
        InsertSenha: senha, 
        InsertTelefone: telefone, 
        InsertGenero: genero, 
        InsertData_Nascimento: data_nascimento, 
        InsertEstado: estado, 
        InsertCidade: cidade, 
        InsertEndereco: endereco,
        
    })};
    
    
    interface RoomModel {
    id: string; 
    nome: string;
    email: string;
    senha: string;
    telefone: string;
    sexo: string;
    data_nasc: string;
    estado: string;
    cidade: string;
    endereco: string;
    key: string;
    name: string;
    age: number;
    address: string;
 
    
}


    const [rooms, setRooms] = useState<RoomModel[]>([]);

     
    useEffect(() => {
        axios
     .get("http://localhost:3009/api/pegar-dados", {
     headers: {
               
     },
           })
           .then((response) => {
             
             setRooms(response.data);
             var resultArray = Object.values(JSON.parse(JSON.stringify(response.data)))
             console.log(resultArray)
           });

           
           return () => {};
          }, 
          []
          );
          
          interface Item {

            key: string;
            id: string
            name: any;
            age: number;
            address: string;
            nome: any;
            email: string;
            senha: string;
            telefone: string;
            sexo: string;
            data_nasc: string;
            estado: string;
            cidade: string;
            endereco: string;
          }
          const originData: RoomModel[] = [];
            originData.push({
              key: toString(),
              name: '',
              age: 1,
              address: ``,
              id: '',
              nome:'',
              email:'',
              senha:'',
              telefone:'',
              sexo:'',
              data_nasc: '',
              estado: '',
              cidade: '',
              endereco: ''
            });
          
              
              
              
         
              
              
              
              
              
  
   


        


            interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
            editing: boolean;
            dataIndex: string;
            title: any;
            inputType: 'number' | 'text';
            record: Item;
            index: number;
            children: React.ReactNode;
          }
          
          const EditableCell: React.FC<EditableCellProps> = ({
            editing,
            dataIndex,
            title,
            inputType,
            record,
            index,
            children,
            ...restProps
          }) => {
            const inputNode = inputType === 'number' ? <InputNumber /> : <Input />;
          
            return (
              <td {...restProps}>
                {editing ? (
                  <Form.Item
                    name={dataIndex}
                    style={{ margin: 0 }}
                    rules={[
                      {
                        required: true,
                        message: `Por favor insira! ${title}!`,
                      },
                    ]}
                  >
                    {inputNode}
                  </Form.Item>
                ) : (
                  children
                )}
              </td>
            );
          };
          
          const EditableTable = () => {
            const [form] = Form.useForm();
            const [room, setRoom] = useState<RoomModel[]>([]);
            const [editingKey, setEditingKey] = useState('');
          
            const isEditing = (record: RoomModel) => record.id === editingKey;
          
            const edit = (record: Partial<RoomModel> & { id: React.Key }) => {
              form.setFieldsValue({setRooms, ...record });
              setEditingKey(record.id);
            };
          
            const cancel = () => {
              setEditingKey('');
            };
            
            
            
           
          
            const save = async (key: React.Key) => {
              try {
                const row = (await form.validateFields()) as RoomModel;
          
                const newData = [...room];
                const index = newData.findIndex(item => key === item.key);
                if (index > -1) {
                  const item = newData[index];
                  newData.splice(index, 1, {
                    ...item,
                    ...row,
                  });
                  setRooms(newData);
                  setEditingKey('');
                } else {
                  newData.push(row);
                  setRooms(newData);
                  setEditingKey('');
                  axios.post("http://localhost:3009/api/atualizar-dados",{newData}).then ((error) => {
                    console.log(newData[0])
                    window.location.reload()
                    
                  })
                }
              }
                catch (errInfo) {
                console.log('Validate Failed:', errInfo);
              }
            };
            
            
            const deleterow = async (key: string) => {

              
              axios.delete("http://localhost:3009/api/deletar-dados",{data: {key}})
              .then(response => {
                console.log(response)
                window.location.reload()
              })
     
              }
                    
            const columns = [
              {
                title: 'ID',
                dataIndex: 'id',
                width: '8%',
                editable: true,
                
               
              },
              {
                title: 'Nome',
                dataIndex: 'nome',
                width: '15%',
                editable: true,
               

              },
              {
                title: 'Email',
                dataIndex: 'email',
                width: '20%',
                editable: true,
               

              },
              {
                title: 'Senha',
                dataIndex: 'senha',
                width: '20%',
                editable: true,
               

              },
              {
                title: 'Telefone',
                dataIndex: 'telefone',
                width: '10%',
                editable: true,
               

              },
              {
                title: 'Gênero',
                dataIndex: 'genero',
                width: '10%',
                editable: true,
               

              },
              {
                title: 'Data-Nascimento',
                dataIndex: 'data_nasc',
                width: '15%',
                editable: true,
               

              },
              {
                title: 'Estado',
                dataIndex: 'estado',
                width: '30%',
                editable: true,
               

              },
              {
                title: 'Cidade',
                dataIndex: 'cidade',
                width: '30%',
                editable: true,
               

              },
              {
                title: 'Endereço',
                dataIndex: 'endereco',
                width: '30%',
                editable: true,
               

              },
              {
                title: 'Editar',
                dataIndex: 'operation',
                render: (_: any, record: RoomModel) => {
                  const editable = isEditing(record);
                  return editable ? (
                    <span>
                      <Typography.Link onClick={() => save(record.id)} style={{ marginRight: 8 }}>
                        Salvar
                      </Typography.Link>
                      <Popconfirm title="Tem certeza que quer cancelar?" onConfirm={cancel}>
                        <a>Cancelar</a>
                      </Popconfirm>
                    </span>
                  ) : (
                    <Typography.Link disabled={editingKey !== ''} onClick={() => edit(record)}>
                       <Button icon={<EditOutlined />} type="primary"></Button>
                    </Typography.Link>
                       );
                      },  
                    },
                    {
                      title: 'Deletar',
                      dataIndex: 'deletar',
                      width: '30%',
                      render: (_: any, record: RoomModel) => {
                        const editable = isEditing(record);
                  return editable ? (
                    <span>
                      <Typography.Link onClick={() => deleterow(record.id)} style={{ marginRight: 8 }}>
                        Excluir
                      </Typography.Link>
                     
                    </span>
                  ) : (
                    <Typography.Link disabled={editingKey !== ''} onClick={() => deleterow(record.id)}>
                       <Button icon={<DeleteOutlined />} type="primary"></Button>
                    </Typography.Link>
                       );
      
                    },
                  }
                    
                  ];
             

          
            const mergedColumns = columns.map(col => {
              if (!col.editable) {
                return col;
              }
              return {
                ...col,
                onCell: (record: RoomModel) => ({
                  record,
                  inputType: col.dataIndex === 'age' ? 'number' : 'text',
                  dataIndex: col.dataIndex,
                  title: col.title,
                  editing: isEditing(record),
                }),
              };
            });
          
            return (
              <Form form={form} component={false}>
                <Table
                  components={{
                    body: {
                      cell: EditableCell,
                    },
                  }}
                  bordered
                  dataSource={rooms}
                  columns={mergedColumns}
                  rowClassName="edi table-row"
                  pagination={false}
                />
              </Form>
            );
          };

          return (

            
      <body>

            
      <form onSubmit={onSubmit}>
        <Container>
            <Formcontent>
            <div className="box">
                <fieldset>
      <legend id="form"><b>FORMULÁRIO</b></legend>

      <div className="inputBox">
            
      <input type="text" {...register('nome')} name="nome" onChange={(e) =>{ setNome(e.target.value) }} id="nome" className="inputUser" required></input>
      <label htmlFor ="nome"  className= "labelInput">Nome completo</label>
            
      <br></br>
      <br></br>
      <br></br>
    

      </div>
      <div className="inputBox">
      <input type="text" {...register('email')} name="email" onChange={(e) =>{ setEmail(e.target.value) }} id="email" className="inputUser" required></input>
      <label htmlFor ="email"  className= "labelInput">Email</label>
      </div>
      <br></br>
      <br></br>
            
      <div className="inputBox">
      <input type="password"  {...register('senha')} name="senha" onChange={(e) =>{ setSenha(e.target.value) }} id="senha" className="inputUser" required></input>
      <label htmlFor ="senha" className= "labelInput">Senha</label>
      </div>
      <br></br>
      <br></br>
      <div className="inputBox">
      <input type="tel"  {...register('telefone')} name="telefone" onChange={(e) =>{ setTelefone(e.target.value) }} id="telefone" className="inputUser" required></input>
      <label htmlFor ="telefone" className= "labelInput">Telefone</label>
      </div>
      <br></br>
    
    <p>Sexo: </p>
    <input type="radio"  {...register('genero')}name="genero" onChange={(e) =>{ setGenero(e.target.value) }} id="masculino" value="Masculino" required></input>
    <label htmlFor="masculino">Masculino</label>
    <br></br>
    
    <div className="inputBox"></div>
    <input type="radio" {...register('genero')} name="genero" onChange={(e) =>{ setGenero(e.target.value) }} id="feminino" value="Feminino" required></input>
    <label htmlFor="feminino">Feminino</label>
    <br></br>
    
    <div className="inputBox"></div>
    <input type="radio" {...register('genero')} name="genero"  onChange={(e) =>{ setGenero(e.target.value) }} id="outro" value="outro" required></input>
    <label htmlFor="outro">Outro</label>
    <br></br>
    
    <label  htmlFor ="data_nascimento"><b>Data de nascimento:</b></label>
   
    
      <Wrap align='center' alignItems='center' >
    <WrapItem >
  ㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤㅤ ㅤㅤ<Center w='1936px'  h='60px' bg='red.200'>
  <EditableTable />
          </Center>
    </WrapItem>                       
     </Wrap>   
    
    <input type="date" {...register('data_nascimento')} name="data_nascimento" onChange={(e) =>{ setData_nascimento(e.target.value) }} id="data_nascimento"  required></input>
    <br></br>
    <br></br>
    <br></br>
    <div className="inputBox"></div>
    <div className="inputBox">
    <input type="txt" {...register('estado')} name="estado" onChange={(e) =>{ setEstado(e.target.value) }} id="estado" className="inputUser" required></input>
    <label htmlFor ="estado" className= "labelInput">Estado</label>
       </div>
        <br></br>
        <br></br>
        
        <div className="inputBox">
    <input type="txt" {...register('cidade')} name="cidade" onChange={(e) =>{ setCidade(e.target.value) }} id="cidade" className="inputUser" required></input>
    <label htmlFor ="cidade" className= "labelInput">Cidade</label>
       </div>
       <br></br>
        <br></br>
        
       <div className="inputBox">
    <input type="txt" {...register('endereco')} name="endereco" onChange={(e) =>{ setEndereco(e.target.value) }} id="endereco" className="inputUser" required></input>
    <label htmlFor ="endereco" className= "labelInput">Endereço</label>
       </div>
        <br></br>
        
        
            <input type ="submit" onClick={function() { submitReview(); window.location.reload(); }} name="submit" id="submit" value="Enviar"/>
         
        </fieldset>
        </div>
        <h1 id="bdd">DADOS DO BANCO:</h1>
        
      </Formcontent>
      </Container>
        
        </form>
        </body>
     );

    };






  
