import React from "react";
import {Badge, Avatar, Switch} from "@nextui-org/react";
import { NotificationIcon } from "./NotificationIcon";
import { CartIcon } from "./CartIcon";


export default function MyBadge() {
  const [isInvisible, setIsInvisible] = React.useState(false);

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-3">
        <Badge color="danger" content={5} isInvisible={isInvisible} shape="circle">
          <NotificationIcon className="fill-current" size={30} />
        </Badge>
        <Badge color="danger" content={50} isInvisible={isInvisible} shape="circle">
          <CartIcon size={30} />
        </Badge>
      </div>
      <Switch isSelected={!isInvisible} onValueChange={(value) => setIsInvisible(!value)}>
        Show badge
      </Switch>
    </div>
  );
}
