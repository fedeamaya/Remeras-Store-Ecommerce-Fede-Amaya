import React, { useState, useContext } from "react";
import {
  Input,
  FormControl,
  FormLabel,
  Container,
  Heading,
  Center,
  InputLeftElement,
  Icon,
  InputGroup,
  FormHelperText,
  Button,
  Textarea,
  Divider,
  FormErrorMessage,
} from "@chakra-ui/react";
import { MdPermIdentity, MdPhone, MdOutlineHome } from "react-icons/md";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { CartContext } from "../context/ShoppingCartContext";

const OrderForm = () => {
  const { cart, total } = useContext(CartContext);

  const [orderId, setOrderId] = useState("");
  const [userName, setUserName] = useState("");
  const [userMail, setUserMail] = useState("");
  const [validateMail, setValidateMail] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [userPhone, setUserPhone] = useState();
  const [extra, setExtra] = useState("");

  const db = getFirestore();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    addDoc(ordersCollection, order)
      .then(({ id }) => setOrderId(id))
      .then(() =>
        Swal.fire({
          title: "Muchas Gracias!",
          text: `Su pedido ha sido realizado con exito`,
          icon: "success",
          confirmButtonText: "Ok",
          color: "black",
        })
      );
  };

  const order = {
    userName,
    userMail,
    userAddress,
    userPhone,
    extra,
    cart,
    total,
  };
  const ordersCollection = collection(db, "order");

  const emailError = userMail !== validateMail;

  return (
    <>
      <Container className="orderForm">
        <Center>
          <Heading size="md" className="formTitle">
            Complete el siguiente formulario:
          </Heading>
        </Center>
        <form onSubmit={handleSubmitForm}>
          <FormControl isRequired>
            <FormLabel htmlFor="userName">Nombre y Apellido:</FormLabel>
            <InputGroup>
              <InputLeftElement
                children={<Icon boxSize={5} as={MdPermIdentity} />}
              />
              <Input
                className="formInput"
                placeholder="Nombre y apellido"
                onChange={(e) => setUserName(e.target.value)}
                id="userName"
              />
            </InputGroup>
            <FormLabel htmlFor="userEmail">E-mail:</FormLabel>
            <InputGroup>
              <InputLeftElement children="@" />
              <Input
                className="formInput"
                placeholder="E-mail"
                onChange={(e) => setUserMail(e.target.value)}
                id="userEmail"
                type="email"
              />
            </InputGroup>
          </FormControl>
          <FormControl isRequired isInvalid={emailError}>
            <FormLabel htmlFor="userEmail">Confirme su E-mail:</FormLabel>
            <InputGroup>
              <InputLeftElement children="@" />
              <Input
                className="formInput"
                placeholder="E-mail"
                onChange={(e) => setValidateMail(e.target.value)}
                id="userEmail"
                type="email"
              />
            </InputGroup>
            <FormErrorMessage className="inputError">
              Los e-mail no coinciden
            </FormErrorMessage>
          </FormControl>
          <FormControl isRequired>
            <FormLabel htmlFor="userAddress">Dirección:</FormLabel>
            <InputGroup>
              <InputLeftElement
                children={<Icon boxSize={5} as={MdOutlineHome} />}
              />
              <Input
                className="formInput"
                placeholder="Dirección"
                onChange={(e) => setUserAddress(e.target.value)}
                id="userAddress"
              />
            </InputGroup>
            <FormLabel htmlFor="userPhone">Numero de telefono:</FormLabel>
            <InputGroup>
              <InputLeftElement children={<Icon boxSize={5} as={MdPhone} />} />
              <Input
                className="formInput"
                placeholder="Teléfono/Celular"
                onChange={(e) => setUserPhone(e.target.value)}
                id="userPhone"
                type="number"
              />
            </InputGroup>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="addInfo">
              Ingrese lo que quiera comunicarle al vendedor:
            </FormLabel>
            <Textarea
              placeholder="Quiero avisarle al vendedor acerca de..."
              onChange={(e) => setExtra(e.target.value)}
              id="addInfo"
            ></Textarea>
            <FormHelperText className="formFooter">
              Los campos con un * son obligatorios
            </FormHelperText>
          </FormControl>
          <Button colorScheme={"green"} type="submit" isDisabled={emailError}>
            Enviar
          </Button>
        </form>
        {orderId !== "" && (
          <>
            <Divider className="formDivider" />
            <Center className="orderNumber">
              <u>Su código es:</u>
              <span className="orderId">{orderId}</span>
            </Center>
          </>
        )}
      </Container>
    </>
  );
};

export default OrderForm;