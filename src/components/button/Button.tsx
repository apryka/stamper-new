import styled from "styled-components";
import { variant } from "styled-system";

const IconContainer = styled.div`
  display: flex;
  margin-left: 14px;
`;

type ButtonVariants = "primary" | "secondary" | "icon";

const Button = styled("button")<{ variant: ButtonVariants }>(
  {
    fontFamily: "Nunito, sans-serif",
    border: "none",
    background: "none",
    fontSize: 16,
    lineHeight: "22px",
    borderRadius: 53,
    cursor: "pointer",
    transition: "background 150ms ease-in-out",
    path: {
      fill: "currentColor",
    },
  },
  variant({
    variants: {
      primary: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 600,
        color: "#fff",
        background: "#0147F5",
        padding: "12px 20px",
        border: "2px solid #0147F5",
        "&:hover": {
          bg: "transparent",
          borderColor: "#fff",
        },
      },
      secondary: {
        fontWeight: 400,
        color: "#0147F5",
        padding: "10px 20px",
        background:
          "linear-gradient(68.09deg, #0C97FE -1.58%, #0D9EFE 14.06%, #11B2FE 37.34%, #18D3FD 65.26%, #1DEEFD 84.34%)",
        "&:hover": {
          background:
            "linear-gradient(255.84deg, #0C97FE 10.07%, #0D9EFE 24.17%, #11B2FE 45.16%, #18D3FD 70.34%, #1DEEFD 87.53%)",
        },
      },
      icon: {
        fontWeight: 600,
        padding: "12px 25px",
        background: "#0CE8F9",
        "&:hover": {
          background: "#77F5FF",
        },
      },
    },
  })
);

export { Button, IconContainer };
