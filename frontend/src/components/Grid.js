import React from "react";

import axios from "axios";

import {
    DivTable,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
} from '../styles/styles';

import { FaTrash, FaEdit } from 'react-icons/fa';

import { toast } from "react-toastify";

const Grid = ({ users, setUsers, setOnEdit }) => {
    const handleEdit = (item) => {
        setOnEdit(item);
    };

    const handleDelete = async (id) => {
        await axios
            .delete("http://localhost:8800/" + id)
            .then(({ data }) => {
                const newArray = users.filter((user) => user.id !== id);

                setUsers(newArray);
                toast.success(data);
            })
            .catch(({ data }) => toast.error(data));

        setOnEdit(null);
    };

    return (
        <DivTable>
            <Table>
                <Thead>
                    <Tr>
                        <Th>Nome</Th>
                        <Th>Email</Th>
                        <Th onlyWeb>Fone</Th>
                        <Th></Th>
                        <Th></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {users.map((item, i) => (
                        <Tr key={i}>
                            <Td width="30%">{item.name}</Td>
                            <Td width="30%">{item.email}</Td>
                            <Td width="20%" onlyWeb>
                                {item.phone}
                            </Td>
                            <Td alignCenter width="5%">
                                <FaEdit style={{ cursor: "pointer" }} onClick={() => handleEdit(item)} />
                            </Td>
                            <Td alignCenter width="5%">
                                <FaTrash style={{ cursor: "pointer" }} onClick={() => handleDelete(item.id)} />
                            </Td>
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </DivTable>
    );
};

export default Grid;
