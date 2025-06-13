"use client";

import { useRef } from "react";

export default function Navbar() {
  const modalRef = useRef<HTMLDialogElement | null>(null);

  return (
    <div className="w-full p-2 fixed top-0 z-50">
        <div className="rounded-2xl flex flex-row justify-center md:justify-start items-center">
            <div className="join rounded-2xl backdrop-blur-lg shadow-md bg-primary-content/30">
                <button className="btn btn-ghost join-item">Home</button>
                <button className="btn btn-ghost join-item">Newsletter</button>
                <button
                    onClick={() => modalRef.current?.showModal()}
                    className="btn btn-ghost join-item">
                    Contato
                </button>
            </div>
        </div>

        <dialog ref={modalRef} id="modal_contato" className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">Fale Conosco</h3>
                <p className="pt-4 pb-2">
                    contato@cpmpaulista.com.br
                </p>
                <p className="py-2">
                    +55 (11) 3487-8935
                </p>
                <div className="modal-action">
                    <form method="dialog">
                    <button className="btn">Fechar</button>
                    </form>
                </div>
            </div>
        </dialog>
    </div>
  );
}
