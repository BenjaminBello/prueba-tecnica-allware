"use client";
import { create } from "zustand";

interface DialogProps {
    isOpen: boolean;
    setOpenDialog: (isOpen: boolean) => void;
}

export const useDialog = create<DialogProps>()((set) => ({
    isOpen: false,
    setOpenDialog: (isOpen: boolean) => set(() => ({ isOpen })),
}));
