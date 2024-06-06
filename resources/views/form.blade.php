<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Formulario presupuesto</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
        }
        table {
            width: 50%;
            margin: 20px auto;
            border-collapse: collapse;
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
        }
        table th, table td {
            padding: 10px;
            border-bottom: 1px solid #ddd;
        }
        th {
            background-color: #f2f2f2;
            text-align: left;
        }
    </style>


</head>
<body>
    <h2>Pedir presupuesto</h2>
    <table>
        <tr>
            <th>Campo</th>
            <th>Datos</th>
        </tr>
        <tr>
            <td><strong>Nombre:</strong></td>
            <td>{{ $data['name'] }}</td>
        </tr>
        <tr>
            <td><strong>Email:</strong></td>
            <td>{{ $data['email'] }}</td>
        </tr>
        <tr>
            <td><strong>Phone:</strong></td>
            <td>{{ $data['tel'] }}</td>
        </tr>
        <tr>
            <td><strong>Categoría:</strong></td>
            <td>{{ $data['categoria'] }}</td>
        </tr>
        <tr>
            <td><strong>Mensaje:</strong></td>
            <td>{{ $data['message'] }}</td>
        </tr>
    </table>
</body>
</html>
