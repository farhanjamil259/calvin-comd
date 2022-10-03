import {
  Center,
  Box,
  Heading,
  VStack,
  FormControl,
  Input,
  Link,
  HStack,
  Button,
  Text,
} from "native-base";
import { Image } from "react-native";

const LOGO = require("../assets/images/LOGO.png");

const LoginScreen = () => {
  return (
    <Center width="full">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
        <Box mb="6">
          <Image
            source={LOGO}
            style={{
              width: "100%",
              height: undefined,
              aspectRatio: 2 / 1,
            }}
          />
        </Box>

        <Heading size="lg" fontWeight="600" color="coolGray.900">
          Welcome
        </Heading>
        <Heading mt="1" color="coolGray.600" fontWeight="medium" size="xs">
          Sign in to continue!
        </Heading>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email ID</FormControl.Label>
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" />
            <Link
              _text={{
                fontSize: "xs",
                fontWeight: "500",
                color: "gray.600",
              }}
              alignSelf="flex-end"
              mt="1"
            >
              Forget Password?
            </Link>
          </FormControl>
          <Button mt="2">Sign in</Button>
          <HStack mt="6" justifyContent="center">
            <Text fontSize="sm">I'm a new user. </Text>
            <Link
              _text={{
                color: "gray.600",
                fontWeight: "medium",
                fontSize: "sm",
              }}
              href="#"
            >
              Sign Up
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
};

export default LoginScreen;
