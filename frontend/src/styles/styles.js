import styled from 'styled-components';
import InputMask from 'react-input-mask';

export const Container = styled.div`
  width: 100%;
  max-width: 992px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const Title = styled.h2``;

export const Image = styled.img``;

export const FormContainer = styled.form`
    display: flex;
    align-items: flex-end;
    gap: 10px;
    flex-wrap: wrap;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
`;

export const InputArea = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Input = styled.input`
    width: 145px;
    padding: 0 10px;
    border: 1px solid #bbb;
    border-radius: 5px;
    height: 40px;
`;

export const PhoneInput = ({ name, mask, value, onChange }) => {
    return (
        <InputMask
            name={name}
            mask={mask}
            value={value}
            onChange={onChange}
            style={inputMaskStyle}
            type={'tel'}
            maskChar={null}
        />
    );
};

export const inputMaskStyle = {
    width: '145px',
    padding: '0 10px',
    border: '1px solid #bbb',
    borderRadius: '5px',
    height: '40px',
}

export const Label = styled.label``;

export const Button = styled.button`
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
    border: none;
    background-color: #2c73d2;
    color: white;
    height: 42px;
`;

export const DivTable = styled.div`
    width: 100%;
    height: 350px;
    overflow-y: auto;
    margin: 20px auto;
`;

export const Table = styled.table`
    width: 100%;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    max-width: 992px;
    word-break: break-all;
`;

export const Thead = styled.thead`
    position: sticky;
    top: 0;
    z-index: 1;
    background-color: #fff;
`;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
    text-align: start;
    border-bottom: inset;
    padding-bottom: 5px;

    @media (max-width: 500px) {
        ${(props) => props.onlyWeb && "display: none"};
    }
`;

export const Td = styled.td`
    padding-top: 15px;
    text-align: ${(props) => (props.alignCenter ? "center" : "start")};
    width: ${(props) => (props.width ? props.width : "auto")};

    @media (max-width: 500px) {
        ${(props) => props.onlyWeb && "display: none"};
    }
`;