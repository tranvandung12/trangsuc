import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, Typography, List, ListItem, ListItemText } from "@material-ui/core";

const AdminPanel = () => {
  // Giả định danh sách người dùng đã được lấy từ API hoặc một nguồn dữ liệu khác
  const [users, ] = useState([]);

  useEffect(() => {
    // Gọi API hoặc lấy dữ liệu người dùng từ nguồn dữ liệu khác ở đây
    // Ví dụ: fetchDataFromApi().then(data => setUsers(data));
  }, []); // useEffect sẽ chỉ chạy một lần sau khi component được render lần đầu tiên

  return (
    <Card>
      <CardHeader title="Welcome to Admin Panel" />
      <CardContent>
        <Typography variant="body1">
          This is the dashboard to control all the products and users.
        </Typography>
        <Typography variant="h6" gutterBottom>
          User List
        </Typography>
        <List>
          {users.map(user => (
            <ListItem key={user.id}>
              <ListItemText primary={user.username} secondary={user.email} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default AdminPanel;
