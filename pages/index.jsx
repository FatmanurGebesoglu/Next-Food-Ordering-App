import Header from "../components/layout/Header";
import Head from "next/head";
import Home from "./home";
import Input from "@/components/form/Input";

export default function Index() {
  return (
    <>
      <Head>
        <title>Fatmanur</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true"/>
        
      </Head>
      <Header/>
      <Home/>
      <div className="p-20 container mx-auto">
          <Input/>
      </div>
    </>
  );
}
