import Image from "next/image";
import { toast } from "react-hot-toast";
import { X } from "lucide-react";

import IconButton from "@/components/ui/Icon-button";
import Currency from "@/components/ui/Currency";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";

interface CartItemProps {
  data: Product;
}

const CartItem: React.FC<CartItemProps> = ({
  data
}) => {
  return (
    <div>
      Cart item here
    </div>
  );
}

export default CartItem;