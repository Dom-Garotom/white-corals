"use client"
import Footer from "@/components/moleculas/footer";
import InfoEvent from "@/components/moleculas/infoEvent";
import SignUp from "@/components/organismos/signUp";
import { Toaster } from "sonner";
import { Wrapper } from "./style";

export default function SignUpPage( ) {

  return (
    <Wrapper.Root>
      <Wrapper.Main>
        <InfoEvent />
        <SignUp />
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
