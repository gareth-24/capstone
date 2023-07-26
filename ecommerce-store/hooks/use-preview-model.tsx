import { create } from "zustand"; // library to handle state 

import { Product } from "@/types";

interface PreviewModalStore {
  isOpen: boolean;
  data?: Product;
  onOpen: (data: Product) => void;
  onClose: () => void;
}