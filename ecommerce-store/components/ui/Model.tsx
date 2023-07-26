"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";

interface ModelProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Model: React.FC<ModelProps> = ({
  open,
  onClose,
  children
}) => {
  return (
    <Transition show={open} appear as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <div className="fixed inset-0 bg-black bg-opacity-50" />

        <div>
          <div>

          </div>
        </div>
      </Dialog>

    </Transition>
  )
}