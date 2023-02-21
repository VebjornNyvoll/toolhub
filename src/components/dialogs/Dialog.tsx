import { useState } from "react";
import { Dialog } from "@headlessui/react";
import Button, { ColorOptions } from "../buttons/Button";

interface DialogProps {
  title: string;
  description: string;
  open: boolean;
  onClose: () => void;
  button1?: string;
  button2?: string;
  button1Click?: () => void;
  button2Click?: () => void;
}

const DialogComponent = ({
  title,
  description,
  open,
  onClose,
  button1,
  button2,
  button1Click,
  button2Click,
}: DialogProps) => {
  return (
    <Dialog
      open={open}
      onClose={() => onClose()}
      className="relative z-50 h-screen w-screen bg-red-500"
    >
      <div className="fixed inset-0 flex h-screen w-screen items-center justify-center bg-black bg-opacity-50">
        <Dialog.Panel className="shadow-3xl flex w-full max-w-sm flex-col items-center justify-center gap-4 rounded-md bg-white px-20 py-10">
          <Dialog.Title className="font-sofia text-xl font-semibold">
            {title}
          </Dialog.Title>
          <Dialog.Description>{description}</Dialog.Description>
          {button1 ? (
            <Button
              text={button1}
              onClick={button1Click}
              color={ColorOptions.black}
            />
          ) : null}
          {button2 ? (
            <Button
              text={button2}
              onClick={button2Click}
              color={ColorOptions.black}
            />
          ) : null}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default DialogComponent;
