import { CSSProperties, FC } from "react";
import Link from "next/link";
import { useRouter } from "next/router";



const styles: CSSProperties = {
  
    color:"#0070f3",
    textDecoration :"underline",
    margin:'10px'
}

interface Props{
  text: string,
  href:string
}

export const ActiveLink :FC<Props> = ({ text, href }) => {
    const {asPath} = useRouter()



  return (
    <Link href={href}>
      <span style={asPath === href ? styles:{margin:'10px'}}>{text}</span>
    </Link>
  );
};
