import { db } from '../database/db.js';

export const getUsers = (_, response) => {
    const query = "SELECT * FROM users";

    db.query(query, (error, data) => {
        if (error)
            return response.json(error);

        return response.status(200).json(data);
    });
};

export const addUser = (request, response) => {
    const query = "INSERT INTO users (`name`, `email`, `phone`, `birthDate`) VALUES (?)";

    const values = [
        request.body.name,
        request.body.email,
        request.body.phone,
        request.body.birthDate
    ];

    db.query(query, [values], (error) => {
        if (error)
            return response.json(error);

        return response.status(201).json("Usuário criado com sucesso.");
    });
};

export const updateUser = (request, response) => {
    const query =
        "UPDATE users SET `name` = ?, `email` = ?, `phone` = ?, `birthDate` = ? WHERE `id` = ?";
    
    const values = [
        request.body.name,
        request.body.email,
        request.body.phone,
        request.body.birthDate,
    ];

    db.query(query, [...values, request.params.id], (error) => {
        if (error)
            return response.json(error);

        return response.status(200).json("Usuário atualizado com sucesso.");
    });
};

export const deleteUser = (request, response) => {
    const query = "DELETE FROM users WHERE `id` = ?";

    db.query(query, [request.params.id], (error) => {
        if (error)
            return response.json(error);
        
        return response.status(200).json("Usuário deletado com sucesso.");
    });
};