import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Page = () => {
  return (
    <Box mb={"10px"} pt={"80px"}>
      <Container maxW={"80%"} w={"100%"}>
        <Link to={"/"}>Главная</Link>
        <Box
          boxShadow={" 0px 0px 37px 0px rgba(210, 220, 230, 1)"}
          w={"100%"}
          pt={"10px"}
        >
          <Box p={"10px"}>
            <Heading p={"10px"} pl={"10px"} size={"30px"}>
              Способ 1
            </Heading>
            <Text p={"10px"} pl={"10px"}>
              Зайдите на страницу товара и нажмите на кнопку «Добавить в
              корзину». Далее можно продолжить покупки или перейти к оформлению
              заказа.
            </Text>
          </Box>
          <Box p={"10px"}>
            <Text p={"10px"} pl={"10px"} size={"30px"}>
              Пока оформление заказа не завершено, можно изменять количество
              экземпляров товара в корзине, стоимость пересчитается
              автоматически. В конце проверьте данные и, если всё верно, нажмите
              кнопку «Перейти к оформлению».
            </Text>
          </Box>
          <Box p={"10px"}>
            <Text borderRadius={"5px"} p={"10px"} pl={"10px"} size={"30px"}>
              Введите свои данные и нажмите кнопку «Оформить заказ». Далее на
              экране появится присвоенный Вам номер заказа, а также будет
              получено СМС-подтверждение на указанный Вами номер телефона. В
              скором времени сотрудники idea свяжутся с Вами.
            </Text>
          </Box>
          <Box p={"10px"}>
            <Heading p={"10px"} pl={"10px"} size={"30px"}>
              Способ 2
            </Heading>
            <Text>
              Зайдите на страницу товара и нажмите на кнопку «Заказать». Далее
              нужно ввести и отправить свои данные. Вы получите
              СМС-подтверждение на указанный Вами номер о том, что Ваша заявка
              принята. В скором времени сотрудники idea свяжутся с Вами.
            </Text>
          </Box>
          <Box p={"10px"}>
            <Text borderRadius={"5px"} p={"10px"} pl={"10px"} size={"30px"}>
              *Обратите внимание, что под каждым товаром имеется кнопка
              «Добавить в список желаний». Добавленные товары автоматически
              отображаются в разделе «Список желаний».
            </Text>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Page;
