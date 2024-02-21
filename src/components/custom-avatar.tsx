import { Avatar as AntdAvatar, AvatarProps } from "antd";

type Props = AvatarProps & { name: string };

const CustomAvatar = ({ name, style, ...rest }: Props) => {
  return (
    <AntdAvatar
      alt={"Joseph Abboud"}
      size="small"
      style={{
        backgroundColor: "blue",
        display: "flex",
        alignItems: "center",
        border: "none",
      }}
    >
      {name}
    </AntdAvatar>
  );
};

export default CustomAvatar;
