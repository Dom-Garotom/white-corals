"use client"

import Footer from "@/components/moleculas/footer";
import InfoEvent from "@/components/moleculas/infoEvent";
import Login from "@/components/organismos/login";
import { Toaster } from "sonner";
import { Wrapper } from "./styles";

export default function LoginPage() {

  return (
    <Wrapper.Root>
      <Wrapper.Main>
        <InfoEvent />
        <Login />
        <Toaster toastOptions={{
          style: {
            padding: "10px",
            fontSize: "1.2rem",
            color: "green",
          }
        }} />
      </Wrapper.Main>
      <Footer />
    </Wrapper.Root>
  );


}
