import { Button as ButtonNativeBase, IButtonProps, Heading } from 'native-base';

type Props = IButtonProps & {
  title: string;
}

export function Button({ title, ...rest }: Props) {
  return (
    <ButtonNativeBase
      bg="cyan.700"
      h={14}
      fontSize="sm"
      rounded="sm"
      _pressed={{ bg: "cyan.500" }}
      {...rest}
    >
      <Heading colort="white" fontSize="sm">
        {title}
      </Heading>
    </ButtonNativeBase>
  );
}