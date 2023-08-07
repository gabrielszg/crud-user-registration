import React, {
    useRef,
    useEffect,
    useState
} from 'react';

import axios from 'axios';

import {
    FormContainer,
    InputArea,
    Input,
    PhoneInput,
    Label,
    Button,
} from '../styles/styles';

import { toast } from 'react-toastify';

const Form = ({ getUsers, onEdit, setOnEdit }) => {
    const ref = useRef();

    const [phone, setPhone] = useState('');
    const handlePhoneInput = ({ target: { value } }) => setPhone(value);

    useEffect(() => {
        if (onEdit) {
            const user = ref.current;

            user.name.value = onEdit.name;
            user.email.value = onEdit.email;
            setPhone(onEdit.phone);
            user.birthDate.value = onEdit.birthDate;
        }
    }, [onEdit]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = ref.current;

        if (emptyFields(user)) {
            return toast.warn("Preencha todos os campos!");
        }

        if (phoneValidation(e)) {
            return toast.warn("Complete o campo telefone!");
        }

        if (onEdit) {
            await axios
                .put("http://localhost:8800/" + onEdit.id, {
                    name: user.name.value,
                    email: user.email.value,
                    phone: phone,
                    birthDate: user.birthDate.value,
                })
                .then(({ data }) => toast.success(data))
                .catch(({ data }) => toast.error(data));
        } else {
            await axios
                .post("http://localhost:8800", {
                    name: user.name.value,
                    email: user.email.value,
                    phone: phone,
                    birthDate: user.birthDate.value,
                })
                .then(({ data }) => toast.success(data))
                .catch(({ data }) => toast.error(data));
        }

        user.name.value = "";
        user.email.value = "";
        setPhone('');
        user.birthDate.value = "";

        setOnEdit(null);
        getUsers();
    };

    const emptyFields = (user) => {
        if (
            !user.name.value ||
            !user.email.value ||
            phone.length <= 0 ||
            !user.birthDate.value
        )
            return true;
    };

    const phoneValidation = (e) => {
        return (e.target.phone.value.length < 15);
    };

    return (
        <FormContainer ref={ref} onSubmit={handleSubmit}>
            <InputArea>
                <Label>Nome</Label>
                <Input name="name" />
            </InputArea>

            <InputArea>
                <Label>E-mail</Label>
                <Input name="email" type="email" />
            </InputArea>

            <InputArea>
                <Label>Telefone</Label>
                <PhoneInput
                    name="phone"
                    mask={phone.length > 0 ? '(99) 99999-9999' : phone}
                    value={phone}
                    onChange={handlePhoneInput}
                />
            </InputArea>

            <InputArea>
                <Label>Data de Nascimento</Label>
                <Input name="birthDate" type="date" />
            </InputArea>

            <Button type="submit">Salvar</Button>
        </FormContainer>
    );
};

export default Form;
