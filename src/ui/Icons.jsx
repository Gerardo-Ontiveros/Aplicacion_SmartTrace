import { createIconSetFromIcoMoon } from "react-native-vector-icons";
import Error from "react-native-vector-icons/Ionicons";

const Icons = createIconSetFromIcoMoon(
  require("../assets/icomoon/selection.json"),
  "Icomoon",
  "icomoon.ttf"
);

export function Icon({ name, size = 24, ...props }) {
  try {
    return <Icons name={name} size={size} {...props} />;
  } catch {
    return <Error name="help" size={size} />;
  }
}
