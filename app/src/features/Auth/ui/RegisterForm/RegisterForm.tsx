import Logo from "@/shared/assets/Logo.png";
import {Card ,  Button, Form, HStack, Input, Text, VStack , AppLink } from "@/shared/ui";
import cls from "./RegisterForm.module.scss";
import { Hr } from "@/shared/ui/Hr/Hr";

export const RegisterForm = () => {





  return (
    <HStack justify="center">
        <VStack gap={12}>

        
            <Card margin={50}>
                <VStack  gap={12}>
                    <VStack className={cls.card} max gap={20} align="center">
                    <img src={Logo} />
                    <div className={cls.text}>
                        <Text color="solid" align="center">
                        Зарегистрируйтесь, чтобы смотреть фото и видео ваших друзей.
                        </Text>                    
                    </div>


                    {/* <Button
                        addonLeft={
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                            d="M18.1712 8.36791H17.5V8.33332H9.99996V11.6667H14.7095C14.0225 13.6071 12.1762 15 9.99996 15C7.23871 15 4.99996 12.7612 4.99996 9.99999C4.99996 7.23874 7.23871 4.99999 9.99996 4.99999C11.2745 4.99999 12.4341 5.48082 13.317 6.26624L15.6741 3.90916C14.1858 2.52207 12.195 1.66666 9.99996 1.66666C5.39788 1.66666 1.66663 5.39791 1.66663 9.99999C1.66663 14.6021 5.39788 18.3333 9.99996 18.3333C14.602 18.3333 18.3333 14.6021 18.3333 9.99999C18.3333 9.44124 18.2758 8.89582 18.1712 8.36791Z"
                            fill="#FFC107"
                            />
                            <path
                            d="M2.62744 6.12124L5.36536 8.12916C6.10619 6.29499 7.90036 4.99999 9.99994 4.99999C11.2745 4.99999 12.4341 5.48082 13.317 6.26624L15.6741 3.90916C14.1858 2.52207 12.1949 1.66666 9.99994 1.66666C6.79911 1.66666 4.02327 3.47374 2.62744 6.12124Z"
                            fill="#FF3D00"
                            />
                            <path
                            d="M10 18.3333C12.1525 18.3333 14.1084 17.5096 15.5871 16.17L13.008 13.9875C12.1432 14.6452 11.0865 15.0009 10 15C7.83255 15 5.99213 13.6179 5.2988 11.6892L2.5813 13.7829C3.96047 16.4817 6.7613 18.3333 10 18.3333Z"
                            fill="#4CAF50"
                            />
                            <path
                            d="M18.1712 8.36793H17.5V8.33334H10V11.6667H14.7096C14.3809 12.5902 13.7889 13.3972 13.0067 13.9879L13.0079 13.9871L15.5871 16.1696C15.4046 16.3354 18.3333 14.1667 18.3333 10C18.3333 9.44126 18.2758 8.89584 18.1712 8.36793Z"
                            fill="#1976D2"
                            />
                        </svg>
                        }
                        variant="gray"
                        max
                    >
                        Войти через google
                    </Button> */}

                    <Button
                        addonLeft={
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g clipPath="url(#clip0_3_3014)">
                            <path
                                d="M18.2265 0.7547H1.77495C1.21145 0.7547 0.754639 1.21151 0.754639 1.77501V18.2266C0.754639 18.7901 1.21145 19.2469 1.77495 19.2469H18.2265C18.79 19.2469 19.2468 18.7901 19.2468 18.2266V1.77501C19.2468 1.21151 18.79 0.7547 18.2265 0.7547Z"
                                fill="#3D5A98"
                            />
                            <path
                                d="M13.5125 19.2453V12.0843H15.9157L16.275 9.29372H13.5125V7.51247C13.5125 6.70466 13.7375 6.1531 14.8954 6.1531H16.3735V3.6531C15.6577 3.5785 14.9384 3.54303 14.2188 3.54685C12.0907 3.54685 10.625 4.84372 10.625 7.23591V9.29372H8.22192V12.0843H10.625V19.2453H13.5125Z"
                                fill="white"
                            />
                            </g>
                            <defs>
                            <clipPath id="clip0_3_3014">
                                <rect width="20" height="20" fill="white" />
                            </clipPath>
                            </defs>
                        </svg>
                        }
                        variant="gray"
                        max
                    >
                        Войти через facebook
                    </Button>

                    <HStack gap={8}>
                        <div className={cls.line}></div>
                        <Hr></Hr>
                        <Text color="solid">Или</Text>
                        <Hr></Hr>
                        <div className={cls.line}></div>
                    </HStack>

                    <Form >
                        <VStack gap={16}>
                        <VStack gap={16} max>
                            <Input

                            placeholder="Телефон, имя пользователя или эл.адрес  "
                            />
                            <Input

                            placeholder="Имя и фамилия"
                            />
                            <Input
                
                            placeholder="Имя пользователя"
                            />
                            <Input
                            type="password"
                            placeholder="Пароль"
                            />
                            <Input
                
                            type="password"
                            placeholder="Повторите пароль"
                            />
                        </VStack>
                        <Text align="center" color="solid" size={12}>
                            Регистрируясь, вы принимаете Условия. Прочитайте Политика
                            конфидициальности, чтобы узнать, как мы получаем, используем и
                            передаем ваши данные. Также просмотрите Политику в отношении
                            файлов cookie, чтобы узнать, как мы используем файлы cookie и
                            подобные технологии.
                        </Text>

                        <Button max type="submit" variant="solid">
                            Войти
                        </Button>
                        </VStack>
                    </Form>
                    </VStack>


                </VStack>
        </Card>

        <Card >
            <HStack className={cls.card} max justify="center" gap={8}>
                <Text size={12} as="p">
                    Есть аккаунт?{" "}
                </Text>
                    <Text size={12} as="span" color="blue">
                    Войти
                    </Text>
            </HStack>
        </Card>
      </VStack>
    </HStack>
  );
};

export default RegisterForm;