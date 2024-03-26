import { Datagrid, List, TextField, Edit, SimpleForm, EditButton, TextInput, Create, } from 'react-admin';

export const listUsers = (props) => (
    <List {...props}>
      <Datagrid>
   
        <TextField source='name'/>
        <TextField source='company'/>

     <EditButton basePath='/Users'/>
      </Datagrid>
    </List>
)

export const editUser = (props) => (
  <Edit {...props}>
  <SimpleForm>
    <TextInput source='name'/>
    <TextInput source='company'/>

  </SimpleForm>
</Edit>
)
export const createUser = (props) => (
  <Create {...props}>
  <SimpleForm>
    <TextInput source='name'/>
    <TextInput source='company'/>

  </SimpleForm>
</Create>
)